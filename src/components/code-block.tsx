"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ICodeBlock extends React.HTMLAttributes<HTMLPreElement> {}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    // trackEvent(event);
  }
}

export function CodeBlock({
  className,
  children,
  style,
  ...props
}: ICodeBlock) {
  const [hasCopied, setHasCopied] = React.useState(false);
  const preRef = React.useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;
    if (code) {
      setHasCopied(true);
      await navigator.clipboard.writeText(code);

      setTimeout(() => {
        setHasCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <pre
        ref={preRef}
        className={cn("mt-6 mb-8 overflow-x-auto rounded-sm p-4", className)}
        style={style}
        {...props}
      >
        <Button
          id="cody-copy-button"
          data-umami-event="copy-code-button"
          disabled={hasCopied}
          className="absolute top-4 right-4 z-10"
          size="sm"
          onClick={handleClickCopy}
        >
          {hasCopied ? "Copied" : "Copy"}
        </Button>
        {children}
      </pre>
    </div>
  );
}
