import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("py-8 sm:py-10", className)} {...props}>
        {children}
      </section>
    );
  },
);

Section.displayName = "Section";

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "mb-4 font-bold font-heading text-2xl sm:mb-6 sm:text-3xl",
      className,
    )}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mb-6 text-muted-foreground text-sm sm:text-base", className)}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

export { Section, SectionTitle, SectionDescription };
