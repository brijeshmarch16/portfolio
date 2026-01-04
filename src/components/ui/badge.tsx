import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center border-2 border-border px-2.5 py-0.5 font-medium text-xs transition-colors",
          {
            "bg-primary text-primary-foreground shadow-hard-sm":
              variant === "default",
            "bg-foreground text-background shadow-hard-sm":
              variant === "secondary",
            "bg-transparent text-foreground": variant === "outline",
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
