import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import type { MDXContent } from "mdx/types";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./code-block";
import { CliCommand, ComponentInstall } from "./component-install";
import { ComponentShowcase } from "./component-showcase";
import { Alert } from "./ui/alert";
import { Table } from "./ui/table";

const components = (type: "doc" | "blog") => ({
  h1: (props: HTMLAttributes<HTMLHeadingElement>) =>
    type === "blog" ? (
      <Text as="h1" className="mt-0 mb-6" {...props} />
    ) : (
      <Text as="h1" className="mt-0 mb-8" {...props} />
    ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) =>
    type === "blog" ? (
      <Text as="h2" className="mt-8 mb-4" {...props} />
    ) : (
      <Text as="h2" className="mt-8 mb-6 border-b pb-1" {...props} />
    ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h3" className="mt-6 mb-4" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h4" className="mt-4 mb-3" {...props} />
  ),
  h5: (props: HTMLAttributes<HTMLHeadElement>) => <Text as="h5" className="mt-4 mb-2" {...props} />,
  h6: (props: HTMLAttributes<HTMLHeadElement>) => <Text as="h6" className="mt-3 mb-2" {...props} />,
  p: (props: HTMLAttributes<HTMLHeadElement>) =>
    type === "blog" ? (
      <Text {...props} className="mb-4 text-foreground text-lg" />
    ) : (
      <Text {...props} className="mb-4" />
    ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn(type === "blog" ? "mb-6" : "mb-4", "list-none pl-0")} {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn(type === "blog" ? "mb-6" : "mb-4", "list-none pl-0")} {...props} />
  ),
  li: (props: HTMLAttributes<HTMLHeadElement>) =>
    type === "blog" ? (
      <Text as="li" {...props} className="mb-2 ml-4 list-disc text-foreground text-lg lg:ml-8" />
    ) : (
      <Text as="li" className="mb-2 ml-4" {...props} />
    ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="my-6 ml-4 border-primary border-l-4 pl-4 italic" {...props} />
  ),
  hr: (props: HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-border border-t" {...props} />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => <strong className="font-bold" {...props} />,
  em: (props: HTMLAttributes<HTMLElement>) => <em className="italic" {...props} />,
  img: (props: HTMLAttributes<HTMLImageElement>) => (
    // biome-ignore lint/a11y/useAltText: alt text is not required for images in mdx
    // biome-ignore lint/performance/noImgElement: image is not required for images in mdx
    <img className="my-8 block w-full" {...props} />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, target, rel, ...rest } = props;

    if (!href) {
      return <a {...rest} />;
    }

    const isExternal = href.startsWith("http");

    return isExternal ? (
      <a
        href={href}
        target={target || "_blank"}
        rel={rel || "noopener noreferrer"}
        className="underline underline-offset-4 hover:decoration-primary"
        {...rest}
      />
    ) : (
      <a className="underline underline-offset-4 hover:decoration-primary" {...rest} />
    );
  },
  pre: CodeBlock,
  code: ({ className, children, style, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isBlockCode = className?.includes("language-");

    if (isBlockCode) {
      return (
        <code className={className} style={style} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className={cn("relative rounded-sm bg-muted px-1 py-0.5 text-sm", className)}
        style={style}
        {...props}
      >
        {children}
      </code>
    );
  },
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Table,
  Link,
  Badge,
  Image,
  Card,
  Alert,
  ComponentShowcase,
  ComponentInstall,
  CliCommand,
});

export default function MDXComponents({
  body,
  type = "doc",
}: {
  body: MDXContent;
  type?: "doc" | "blog";
}) {
  const Body = body;

  return <Body components={components(type)} />;
}
