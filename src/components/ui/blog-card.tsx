import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Text } from "./text";

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description?: string;
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
          "border-3 border-border bg-card shadow-md transition-transform hover:translate-y-1",
          className,
        )}
        {...props}
      >
        <div className="relative h-40 overflow-hidden bg-muted sm:h-48">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-primary to-accent" />
          )}
        </div>
        <div className="p-4 sm:p-6">
          <Text as="small" className="mb-2 block">
            {formattedDate}
          </Text>
          <Text as="h3" className="mb-2">
            {title}
          </Text>
          {description ? (
            <Text className="text-muted-foreground text-sm sm:text-base">
              {description}
            </Text>
          ) : null}
        </div>
      </div>
    );
  },
);

BlogCard.displayName = "BlogCard";

export { BlogCard };
