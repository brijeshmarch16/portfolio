import type * as React from "react";
import { Text } from "./ui/text";

export interface BlogCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const BlogCard = ({ className, title, description = "", ...props }: BlogCardProps) => {
  return (
    <div className={className} {...props}>
      <Text as="h3" className="font-semibold">
        {title}
      </Text>
      <Text as="muted" className="line-clamp-2">
        {description}
      </Text>
      <Text
        as="small"
        className="mt-2 inline-flex items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-70"
      >
        Read more
      </Text>
    </div>
  );
};

BlogCard.displayName = "BlogCard";

export { BlogCard };
