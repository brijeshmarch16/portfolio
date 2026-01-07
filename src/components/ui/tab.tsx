import {
  Tab,
  TabGroup,
  TabList,
  type TabListProps,
  TabPanel,
  type TabPanelProps,
  TabPanels,
  type TabProps,
} from "@headlessui/react";
import { cn } from "@/lib/utils";

const Tabs = TabGroup;
const TabsPanels = TabPanels;

interface ITabsTriggerList extends TabListProps {
  className?: string;
}
const TabsTriggerList = ({
  children,
  className,
  ...props
}: ITabsTriggerList) => {
  return (
    <TabList className={cn("flex flex-row space-x-2", className)} {...props}>
      {children}
    </TabList>
  );
};

interface ITabsTrigger extends TabProps {
  className?: string;
}
const TabsTrigger = ({ children, className, ...props }: ITabsTrigger) => {
  return (
    <Tab
      className={cn(
        "border-2 border-transparent px-4 py-1 focus:outline-hidden data-selected:border-border data-selected:bg-primary data-selected:font-semibold data-selected:text-primary-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </Tab>
  );
};

interface ITabsContent extends TabPanelProps {
  className?: string;
}
const TabsContent = ({ children, className, ...props }: ITabsContent) => {
  return (
    <TabPanel
      className={cn("mt-2 border-2 border-border p-4", className)}
      {...props}
    >
      {children}
    </TabPanel>
  );
};

export { Tabs, TabsPanels, TabsTrigger, TabsContent, TabsTriggerList };
