"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Section, SectionTitle } from "@/components/ui/section";
import { stack } from "../data/home-data";
import type { Stack } from "../types";

export function StackSection() {
  const { resolvedTheme } = useTheme();
  const [mappedStack, setMappedStack] = useState<Array<Stack>>([]);

  useEffect(() => {
    const nextStack: Array<Stack> = stack.map((stack) => {
      const { key, hasThemedIcon } = stack;

      const iconPath =
        hasThemedIcon && resolvedTheme
          ? `/icons/skills/${key}-${resolvedTheme}.svg`
          : `/icons/skills/${key}.svg`;

      return { ...stack, iconPath };
    });

    setMappedStack(nextStack);
  }, [resolvedTheme]);

  return (
    <Section>
      <SectionTitle>Stack</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {mappedStack.map((skill) => (
          <div
            key={skill.key}
            className="flex items-center gap-2 rounded border-2 border-border bg-card p-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <Image
              src={skill.iconPath}
              alt={`${skill.name} icon`}
              width={24}
              height={24}
              className="size-6 shrink-0"
            />
            <span className="font-medium text-xs">{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
