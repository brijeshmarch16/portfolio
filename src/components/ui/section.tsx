import * as React from "react";
import { cn } from "@/lib/utils";
import { Text } from "./text";

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
  <Text
    as="h2"
    ref={ref}
    className={cn("mb-4 sm:mb-6", className)}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <Text
    ref={ref}
    className={cn("mb-6 text-muted-foreground", className)}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

export { Section, SectionTitle, SectionDescription };
