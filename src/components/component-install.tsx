"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Check, Copy } from "lucide-react";
import type React from "react";
import { type HTMLAttributes, useState } from "react";
import { Button } from "./ui/button";

interface IComponentShowcase extends HTMLAttributes<HTMLDivElement> {}

const CopyableCommand = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group flex items-center justify-between gap-2">
      <code className="flex-1">{command}</code>
      <Button
        size="sm"
        onClick={copyToClipboard}
        className="hidden md:block"
        title="Copy to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </Button>
      <Button
        className="md:hidden"
        size="icon"
        onClick={copyToClipboard}
        title="Copy to clipboard mobile"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
};

export function CliCommand({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
}: {
  npmCommand: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  bunCommand?: string;
}) {
  const isNpx = npmCommand.includes("npx");
  if (isNpx) {
    pnpmCommand = pnpmCommand ?? npmCommand.replace("npx", "pnpm dlx");
    yarnCommand = yarnCommand ?? npmCommand.replace("npx", "yarn dlx");
    bunCommand = bunCommand ?? npmCommand.replace("npx", "bunx");
  } else {
    pnpmCommand = pnpmCommand ?? npmCommand.replace("npm", "pnpm");
    yarnCommand = yarnCommand ?? npmCommand.replace("npm install", "yarn add");
    bunCommand = bunCommand ?? npmCommand.replace("npm", "bun");
  }

  return (
    <TabGroup className="my-2 rounded-md bg-gray-800 p-4 text-background/90">
      <TabList className="mb-6 flex space-x-4 text-sm">
        <Tab className="relative cursor-pointer border-accent bg-transparent px-2 py-1 text-gray-400 focus:outline-hidden data-selected:border-b-2 data-selected:text-white">
          pnpm
        </Tab>
        <Tab className="relative cursor-pointer border-accent bg-transparent px-2 py-1 text-gray-400 focus:outline-hidden data-selected:border-b-2 data-selected:text-white">
          npm
        </Tab>
        <Tab className="relative cursor-pointer border-accent bg-transparent px-2 py-1 text-gray-400 focus:outline-hidden data-selected:border-b-2 data-selected:text-white">
          yarn
        </Tab>
        <Tab className="relative cursor-pointer border-accent bg-transparent px-2 py-1 text-gray-400 focus:outline-hidden data-selected:border-b-2 data-selected:text-white">
          bun
        </Tab>
      </TabList>
      <TabPanels className="text-accent text-sm">
        <TabPanel>
          <CopyableCommand command={pnpmCommand} />
        </TabPanel>
        <TabPanel>
          <CopyableCommand command={npmCommand} />
        </TabPanel>
        <TabPanel>
          <CopyableCommand command={yarnCommand} />
        </TabPanel>
        <TabPanel>
          <CopyableCommand command={bunCommand} />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

function ComponentInstallCli({
  npmCommand,
  yarnCommand,
  pnpmCommand,
  bunCommand,
}: {
  npmCommand: string;
  yarnCommand?: string;
  pnpmCommand?: string;
  bunCommand?: string;
}) {
  return (
    <TabPanel>
      <CliCommand
        npmCommand={npmCommand}
        yarnCommand={yarnCommand}
        pnpmCommand={pnpmCommand}
        bunCommand={bunCommand}
      />
    </TabPanel>
  );
}

function ComponentInstallManual({ children }: { children: React.ReactNode }) {
  return <TabPanel>{children}</TabPanel>;
}

function ComponentInstall({ children }: IComponentShowcase) {
  return (
    <TabGroup>
      <TabList className="mb-6 flex space-x-4 border-b bg-transparent text-sm">
        <Tab className="relative min-w-12 cursor-pointer bg-transparent px-2 py-1 focus:outline-hidden data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white">
          CLI
        </Tab>
        <Tab className="relative min-w-12 cursor-pointer bg-transparent px-2 py-1 focus:outline-hidden data-selected:border data-selected:border-b-0 data-selected:bg-black data-selected:text-white">
          Manual
        </Tab>
      </TabList>

      <TabPanels>{children}</TabPanels>
    </TabGroup>
  );
}

Object.assign(ComponentInstall, {
  Cli: ComponentInstallCli,
  Manual: ComponentInstallManual,
});

export { ComponentInstall };
