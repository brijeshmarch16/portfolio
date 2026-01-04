import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "flex cursor-pointer items-center justify-center rounded font-head font-medium outline-hidden transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-2 border-border bg-primary text-primary-foreground shadow-md transition hover:translate-y-1 hover:bg-primary-hover hover:shadow active:translate-x-1 active:translate-y-2 active:shadow-none",
        secondary:
          "border-2 border-border bg-secondary text-secondary-foreground shadow-md shadow-primary transition hover:translate-y-1 hover:bg-secondary-hover hover:shadow active:translate-x-1 active:translate-y-2 active:shadow-none",
        outline:
          "border-2 bg-background shadow-md transition hover:translate-y-1 hover:shadow active:translate-x-1 active:translate-y-2 active:shadow-none",
        link: "bg-transparent hover:underline",
        ghost: "bg-transparent hover:bg-accent",
      },
      size: {
        sm: "min-h-10 px-2 py-1.5 text-xs sm:px-3 sm:text-sm",
        md: "min-h-11 px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base",
        lg: "min-h-12 px-4 py-2.5 text-base sm:px-6 sm:py-3 sm:text-lg",
        icon: "p-2",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  },
);

export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      children,
      size = "md",
      className = "",
      variant = "default",
      asChild = false,
      ...props
    }: IButtonProps,
    forwardedRef,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={forwardedRef}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = "Button";
