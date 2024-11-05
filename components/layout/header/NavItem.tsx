"use client";

import { cva } from "class-variance-authority";
import { usePathname } from "next/navigation";

import { Link } from "@/i18n/routing";

const linkVariants = cva(["text-sm", "text-fg-text-main"], {
  variants: {
    intent: {
      active: ["font-bold"],
      inactive: [],
    },
  },
  defaultVariants: {
    intent: "inactive",
  },
});

type NavItemProps = {
  href: string;
  t: {
    text: string;
  };
};

export default function NavItem({ href, t }: NavItemProps) {
  const pathname = usePathname();

  const isActive =
    href === "/" ? pathname.length === 3 : pathname.slice(3) === href;

  return (
    <Link
      className={linkVariants({
        intent: isActive ? "active" : "inactive",
      })}
      href={href}
    >
      {t.text}
    </Link>
  );
}
