import type { HTMLAttributes } from "react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Text } from "./text";

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex h-full w-full flex-col rounded border-2 bg-card shadow-sm transition-all hover:shadow-md",
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = "Card";

const CardHeader = ({ className, ...props }: ICardProps) => {
  return (
    <div
      className={cn("flex flex-col justify-start p-4", className)}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ICardProps) => {
  return <Text as="h3" className={cn("mb-2", className)} {...props} />;
};

const CardDescription = ({ className, ...props }: ICardProps) => (
  <p
    className={cn(
      "font-sans text-base text-muted-foreground leading-normal",
      className,
    )}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ICardProps) => {
  return <div className={cn("p-4", className)} {...props} />;
};

const CardComponent = Object.assign(Card, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});

export { CardComponent as Card };
