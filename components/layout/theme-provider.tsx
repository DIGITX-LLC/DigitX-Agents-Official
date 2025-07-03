"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Handle scroll restoration on mount
  React.useEffect(() => {
    // Disable browser scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Ensure page starts at top with instant behavior
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // Re-enable smooth scrolling after a short delay by adding CSS class
    const timer = setTimeout(() => {
      document.documentElement.classList.add('smooth-scroll');
    }, 150);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
