"use client";

import { MenuIcon, MoonIcon, SunIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logo } from "../config/navigation";
import { Logo } from "./logo";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, items = [], ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMenuOpen(false);
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }, []);

    return (
      <>
        <nav
          ref={ref}
          className={cn(
            "-translate-x-1/2 fixed top-5 left-1/2 z-50 w-[95%] max-w-2xl border-3 border-border bg-background px-2 py-2 shadow sm:px-4 sm:py-3",
            className,
          )}
          {...props}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Logo text={logo.text} />
            <div className="flex items-center gap-2">
              {/* Desktop Navigation */}
              <div className="hidden flex-wrap items-center justify-end gap-1 sm:flex sm:gap-4">
                {items.map((item) => (
                  <NavLink key={item.href} {...item} />
                ))}
                <ThemeToggle />
              </div>
              {/* Mobile: Theme Toggle and Hamburger Button */}
              <div className="flex items-center gap-2 sm:hidden">
                <ThemeToggle />
                <Button
                  type="button"
                  variant="default"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <XIcon size={20} className="text-foreground" />
                  ) : (
                    <MenuIcon size={20} className="text-foreground" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <MobileMenuOverlay
            items={items}
            onClose={() => setIsMenuOpen(false)}
          />
        )}
      </>
    );
  },
);

Navbar.displayName = "Navbar";

interface MobileMenuOverlayProps {
  items: NavItem[];
  onClose: () => void;
}

const MobileMenuOverlay = ({ items, onClose }: MobileMenuOverlayProps) => {
  return (
    <div className="-translate-x-1/2 fixed top-24 left-1/2 z-40 w-[95%] max-w-2xl border-3 border-border bg-card shadow">
      <div className="overflow-y-auto px-4 py-6">
        <div className="space-y-1">
          {items.map((item) => (
            <MobileNavLink key={item.href} {...item} onClose={onClose} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface MobileNavLinkProps extends NavItem {
  onClose: () => void;
}

const MobileNavLink = ({
  href,
  label,
  external,
  onClose,
}: MobileNavLinkProps) => {
  const handleClick = () => {
    if (!external) {
      onClose();
    }
  };

  const linkContent = (
    <span className="block border-border border-b-2 px-3 py-4 font-bold font-sans text-lg transition-all hover:bg-primary">
      {label}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link
      href={href as React.ComponentProps<typeof Link>["href"]}
      onClick={handleClick}
    >
      {linkContent}
    </Link>
  );
};

const NavLink = ({ href, label, external }: NavItem) => {
  const linkContent = (
    <span className="font-medium font-sans text-sm transition-all hover:text-primary active:translate-x-1 active:translate-y-1 sm:text-base">
      {label}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href as React.ComponentProps<typeof Link>["href"]}>
      {linkContent}
    </Link>
  );
};

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border-2 border-border"
        aria-label="Toggle theme"
      >
        <SunIcon size={20} className="text-foreground" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="border-2 border-border"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <SunIcon size={20} className="text-foreground" />
      ) : (
        <MoonIcon size={20} className="text-foreground" />
      )}
    </Button>
  );
}

export { Navbar, NavLink };
