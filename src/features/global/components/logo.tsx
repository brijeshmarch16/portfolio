import Link from "next/link";
import type React from "react";

interface LogoProps {
  text: string;
}

export const Logo: React.FC<LogoProps> = ({ text }) => {
  return (
    <Link href="/" className="group inline-block">
      <span className="font-bold font-heading text-lg transition-all group-hover:text-primary">
        {text}
      </span>
    </Link>
  );
};

Logo.displayName = "Logo";
