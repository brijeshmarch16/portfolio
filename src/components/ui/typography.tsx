import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        className={cn(
          "font-bold font-head",
          "text-3xl md:text-4xl",
          "leading-tight tracking-tight",
          className,
        )}
        {...props}
      >
        {children}
      </h1>
    );
  },
);
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn(
          "font-bold font-head",
          "text-2xl",
          "leading-tight tracking-tight",
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    );
  },
);
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "font-head",
          "text-lg md:text-xl",
          "leading-snug tracking-tight",
          className,
        )}
        {...props}
      >
        {children}
      </h3>
    );
  },
);
H3.displayName = "H3";

export const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "font-sans",
          "text-lg md:text-xl",
          "leading-relaxed",
          "text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Lead.displayName = "Lead";

export const Text = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("font-sans", "text-base", "leading-normal", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Text.displayName = "Text";

export const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <small
        ref={ref}
        className={cn(
          "font-sans",
          "text-xs md:text-sm",
          "leading-normal",
          "text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </small>
    );
  },
);
Small.displayName = "Small";

export const Muted = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "font-sans",
          "text-sm md:text-base",
          "leading-relaxed",
          "text-muted-foreground",
          className,
        )}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Muted.displayName = "Muted";
