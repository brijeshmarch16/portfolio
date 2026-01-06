import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
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
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h1" {...props} />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) =>
    type === "blog" ? (
      <Text as="h2" className="mt-8 mb-4" {...props} />
    ) : (
      <Text as="h2" className="mb-6 border-b pb-1" {...props} />
    ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h3" className="mb-4" {...props} />
  ),
  h4: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <Text as="h4" className="mb-2" {...props} />
  ),
  h5: (props: HTMLAttributes<HTMLHeadElement>) => <Text as="h5" {...props} />,
  h6: (props: HTMLAttributes<HTMLHeadElement>) => <Text as="h6" {...props} />,
  p: (props: HTMLAttributes<HTMLHeadElement>) =>
    type === "blog" ? (
      <Text {...props} className="text-foreground text-lg" />
    ) : (
      <Text {...props} />
    ),
  li: (props: HTMLAttributes<HTMLHeadElement>) =>
    type === "blog" ? (
      <Text
        as="li"
        {...props}
        className="mb-2 ml-4 text-foreground text-lg lg:ml-8"
      />
    ) : (
      <Text as="li" className="mb-2" {...props} />
    ),
  img: (props: HTMLAttributes<HTMLImageElement>) => (
    // biome-ignore lint/a11y/useAltText: alt text is not required for images in mdx
    // biome-ignore lint/performance/noImgElement: image is not required for images in mdx
    <img className="mx-auto my-8 w-full max-w-[600px]" {...props} />
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
      <a
        className="underline underline-offset-4 hover:decoration-primary"
        {...rest}
      />
    );
  },
  pre: CodeBlock,
  code: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded-sm bg-[#282A36] p-1 text-primary text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
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

export default function MDX({
  body,
  type = "doc",
}: {
  // biome-ignore lint/suspicious/noExplicitAny: MDX components require flexible typing
  body: React.ComponentType<{
    components?: Record<string, React.ComponentType<any>>;
  }>;
  type?: "doc" | "blog";
}) {
  const Body = body;

  // biome-ignore lint/suspicious/noExplicitAny: MDX components require flexible typing
  return (
    <Body
      components={components(type) as Record<string, React.ComponentType<any>>}
    />
  );
}
