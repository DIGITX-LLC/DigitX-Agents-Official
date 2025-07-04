"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface FallbackImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
}

export function FallbackImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc = "/demo-img.jpg",
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  ...props
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      console.warn(`FallbackImage: Failed to load image "${src}", using fallback "${fallbackSrc}". This could be due to a 504 timeout error or missing image.`);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Add timeout for slow-loading images
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading && !hasError) {
        console.warn(`FallbackImage: Image "${src}" took too long to load, using fallback`);
        handleError();
      }
    }, 5000); // 5 second timeout (reduced from 10 seconds)

    return () => clearTimeout(timeout);
  }, [isLoading, hasError, src]);

  // Validation: either fill should be true OR width and height should be provided
  if (!fill && (!width || !height)) {
    console.warn("FallbackImage: Either fill must be true or width and height must be provided");
  }

  return (
    <div className={cn(
      "relative overflow-hidden",
      fill ? "w-full h-full" : "",
      className
    )}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-md flex items-center justify-center z-10">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        {...(fill ? { fill: true } : { width: width!, height: height! })}
        priority={priority}
        quality={quality}
        sizes={sizes}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          hasError ? "filter grayscale" : "",
          fill ? "object-cover" : ""
        )}
        {...props}
      />
      {hasError && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-20">
          Fallback
        </div>
      )}
    </div>
  );
} 