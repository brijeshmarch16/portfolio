import Link from "next/link";
import type * as React from "react";
import type { ComponentProps } from "react";
import { Card } from "@/components/ui/card";
import { H3, Text } from "@/components/ui/typography";

export function Callout(props: React.PropsWithChildren) {
  return (
    <Card className="border-primary/40 bg-accent/30 px-4 py-3 text-sm">
      <Text className="text-sm">{props.children}</Text>
    </Card>
  );
}

export const blogMdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <H3 className="mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <H3 className="mt-6 mb-3 text-2xl" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <Text className="mb-4" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      className="text-primary underline-offset-4 hover:underline"
      {...props}
      href={props.href as ComponentProps<typeof Link>["href"]}
    >
      {props.children}
    </Link>
  ),
  Callout,
  Text,
};
