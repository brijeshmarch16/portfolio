"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
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
            "-translate-x-1/2 fixed top-5 left-1/2 z-50 w-[95%] max-w-2xl border-3 border-black bg-white px-2 py-2 shadow shadow-hard sm:px-4 sm:py-3",
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
              </div>
              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex rounded border-2 border-black bg-white p-2 transition-all hover:bg-primary hover:shadow-hard-sm active:translate-x-1 active:translate-y-1 active:shadow-none sm:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={20} className="text-black" />
                ) : (
                  <Menu size={20} className="text-black" />
                )}
              </button>
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
    <div className="-translate-x-1/2 fixed top-24 left-1/2 z-40 w-[95%] max-w-2xl border-3 border-black bg-white shadow">
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
    <span className="block border-black border-b-2 px-3 py-4 font-bold text-lg transition-all hover:bg-primary">
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
    <Link href={href} onClick={handleClick}>
      {linkContent}
    </Link>
  );
};

const NavLink = ({ href, label, external }: NavItem) => {
  const linkContent = (
    <span className="font-medium text-sm transition-all hover:text-primary active:translate-x-1 active:translate-y-1 sm:text-base">
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

  return <Link href={href}>{linkContent}</Link>;
};

export { Navbar, NavLink };
