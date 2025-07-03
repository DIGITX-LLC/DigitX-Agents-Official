"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";
import "./CardSwap.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`card ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  )
);
Card.displayName = "Card";

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "smooth";
  children: React.ReactNode;
}

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 4000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
        ease: "elastic.out(0.6,0.9)",
        durDrop: 2,
        durMove: 2,
        durReturn: 2,
        promoteOverlap: 0.9,
        returnDelay: 0.05,
      }
      : {
        ease: "power1.inOut",
        durDrop: 0.8,
        durMove: 0.8,
        durReturn: 0.8,
        promoteOverlap: 0.45,
        returnDelay: 0.2,
      };

  // Optimized config for click interactions - much faster and smoother
  const clickConfig = {
    ease: "power2.out", // Smooth, fast easing
    duration: 0.4, // Very fast animation
    stagger: 0.05, // Minimal stagger for smooth effect
  };

  const childArr = useMemo(
    () => Children.toArray(children),
    [children]
  );
  
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(
    Array.from({ length: childArr.length }, (_, i) => i)
  );

  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);

  // Define swap function
  const swap = () => {
    if (order.current.length < 2) return;

    const [front, ...rest] = order.current;
    const elFront = refs[front].current;
    if (!elFront) return;

    const tl = gsap.timeline();
    tlRef.current = tl;

    tl.to(elFront, {
      y: "+=500",
      duration: config.durDrop,
      ease: config.ease,
    });

    tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
    rest.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      tl.set(el, { zIndex: slot.zIndex }, "promote");
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          duration: config.durMove,
          ease: config.ease,
          force3D: true,
        },
        `promote+=${i * 0.15}`
      );
    });

    const backSlot = makeSlot(
      refs.length - 1,
      cardDistance,
      verticalDistance,
      refs.length
    );
    tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
    tl.call(
      () => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
      },
      undefined,
      "return"
    );
    tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
    tl.to(
      elFront,
      {
        y: backSlot.y,
        duration: config.durReturn,
        ease: config.ease,
        force3D: true,
      },
      "return"
    );

    tl.call(() => {
      order.current = [...rest, front];
    });
  };

  // Optimized function to bring a specific card to the front with smooth, quick animation
  const bringToFront = (clickedIndex: number) => {
    // Stop current animation and clear interval
    if (tlRef.current) {
      tlRef.current.kill();
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Find the position of the clicked card in the current order
    const currentPosition = order.current.indexOf(clickedIndex);
    
    // If it's already at the front, do nothing
    if (currentPosition === 0) return;

    // Create new order with clicked card at front
    const newOrder = [clickedIndex, ...order.current.filter(idx => idx !== clickedIndex)];
    
    // Create fast, smooth animation timeline
    const tl = gsap.timeline();
    tlRef.current = tl;
    
    // Animate all cards to their new positions simultaneously with optimized timing
    newOrder.forEach((idx, i) => {
      const el = refs[idx].current;
      if (!el) return;
      
      const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
      
      // Set z-index immediately for proper layering
      tl.set(el, { zIndex: slot.zIndex }, 0);
      
      // Use optimized animation with smooth easing and fast duration
      tl.to(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        duration: clickConfig.duration,
        ease: clickConfig.ease,
        force3D: true, // Hardware acceleration
      }, i * clickConfig.stagger); // Minimal stagger for smooth effect
    });

    tl.call(() => {
      order.current = newOrder;
      // Restart the automatic rotation with minimal delay for better UX
      setTimeout(() => {
        if (!tlRef.current || tlRef.current.isActive() === false) {
          intervalRef.current = window.setInterval(swap, delay);
        }
      }, 300); // Reduced from 1000ms to 300ms for quicker restart
    });
  };

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        placeNow(
          r.current,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount
        );
      }
    });

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      if (!node) return;
      
      const pause = () => {
        tlRef.current?.pause();
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
      
      const resume = () => {
        if (tlRef.current && tlRef.current.paused()) {
          tlRef.current.play();
        } else if (!intervalRef.current) {
          intervalRef.current = window.setInterval(swap, delay);
        }
      };
      
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cardDistance,
    verticalDistance,
    delay,
    pauseOnHover,
    skewAmount,
    easing,
  ]);

  const rendered = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child, {
        key: i,
        ref: refs[i],
        style: { 
          width, 
          height, 
          cursor: 'pointer',
          transition: 'transform 0.1s ease', // Add subtle hover transition
          ...(child.props.style ?? {})
        },
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          child.props.onClick?.(e);
          onCardClick?.(i);
          bringToFront(i); // Bring clicked card to front with optimized animation
        },
        onMouseEnter: (e: React.MouseEvent) => {
          if (!tlRef.current || !tlRef.current.isActive()) {
            // Add subtle hover effect for better interactivity
            gsap.to(e.currentTarget, {
              scale: 1.02,
              duration: 0.2,
              ease: "power2.out"
            });
          }
          child.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent) => {
          if (!tlRef.current || !tlRef.current.isActive()) {
            // Remove hover effect
            gsap.to(e.currentTarget, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out"
            });
          }
          child.props.onMouseLeave?.(e);
        },
      } as any) : child
  );

  return (
    <div
      ref={container}
      className="card-swap-container"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap; 