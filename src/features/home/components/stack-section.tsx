"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Section, SectionTitle } from "@/components/ui/section";
import { Tooltip } from "@/components/ui/tooltip";
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
    <Section id="stack" className="p-4">
      <SectionTitle>Stack</SectionTitle>
      <div className="inline-flex flex-wrap gap-4">
        {mappedStack.map((stack) => (
          <Tooltip.Provider key={stack.key}>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Image
                  src={stack.iconPath}
                  alt={`${stack.name} icon`}
                  width={40}
                  height={40}
                  className="size-10"
                />
              </Tooltip.Trigger>
              <Tooltip.Content variant="default">{stack.name}</Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>
        ))}
      </div>
    </Section>
  );
}
