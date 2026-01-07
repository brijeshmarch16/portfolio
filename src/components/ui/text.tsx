import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head", {
  variants: {
    as: {
      p: "font-sans text-base leading-normal",
      li: "font-sans text-base leading-normal",
      a: "font-sans text-base leading-normal decoration-primary underline-offset-2 hover:underline",
      h1: "font-bold text-3xl leading-tight tracking-tight md:text-4xl",
      h2: "font-bold text-2xl leading-tight tracking-tight",
      h3: "text-lg leading-snug tracking-tight md:text-xl",
      h4: "font-normal text-xl",
      h5: "font-normal text-lg",
      h6: "font-normal text-base",
      small:
        "font-sans text-muted-foreground text-xs leading-normal md:text-sm",
      muted:
        "font-sans text-muted-foreground text-sm leading-relaxed md:text-base",
    },
  },
  defaultVariants: {
    as: "p",
  },
});

interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string;
}

export const Text = (props: TextProps) => {
  const { className, as, ...otherProps } = props;
  const Tag: ElementType = as === "muted" ? "p" : as || "p";

  return (
    <Tag className={cn(textVariants({ as }), className)} {...otherProps} />
  );
};
