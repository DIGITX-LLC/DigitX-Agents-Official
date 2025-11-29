"use client";
import { MotionDiv } from "@/components/ui/motion";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-background overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-background to-background pointer-events-none" />
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid place-items-center max-w-4xl mx-auto text-center gap-8">
          <MotionDiv 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Pioneering the Future of
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 pb-2">
                Digital Excellence
              </span>
            </h1>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic">
                "Born from the belief that technology should empower, not overwhelm."
              </p>
              <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                We combine creativity, technology, and strategy to deliver scalable solutions and unlock your full digital potential.
              </p>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
