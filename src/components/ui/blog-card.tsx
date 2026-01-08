import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./card";
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
      <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <div className="relative h-40 overflow-hidden bg-muted sm:h-48">
          {image ? (
            <Image src={image} alt={title} fill className="object-cover" />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-primary to-accent" />
          )}
        </div>
        <Card.Header>
          <Text as="small" className="mb-2 block">
            {formattedDate}
          </Text>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
      </Card>
    );
  },
);

BlogCard.displayName = "BlogCard";

export { BlogCard };
