import type * as React from "react";

import { cn } from "@/lib/utils";

interface BlogPageShellProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function BlogPageShell(props: BlogPageShellProps) {
  const { children, className, ...restProps } = props;

  return (
    <main
      className={cn("mx-auto max-w-2xl pt-28 sm:pt-32", className)}
      {...restProps}
    >
      {children}
    </main>
  );
}
