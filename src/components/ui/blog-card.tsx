import * as React from "react";
import { cn } from "@/lib/utils";
import { H3, Small, Text } from "./typography";

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  date: string;
}

const BlogCard = React.forwardRef<HTMLDivElement, BlogCardProps>(
  ({ className, image, title, description, date, ...props }, ref) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <div
        ref={ref}
        className={cn(
          "border-3 border-black bg-white shadow-md transition-transform hover:translate-y-1",
          className,
        )}
        {...props}
      >
        <div className="h-40 overflow-hidden bg-muted sm:h-48">
          <div className="h-full w-full bg-linear-to-br from-primary to-accent" />
        </div>
        <div className="p-4 sm:p-6">
          <Small className="mb-2 block">{formattedDate}</Small>
          <H3 className="mb-2">{title}</H3>
          <Text className="text-muted-foreground text-sm sm:text-base">
            {description}
          </Text>
        </div>
      </div>
    );
  },
);

BlogCard.displayName = "BlogCard";

export { BlogCard };
