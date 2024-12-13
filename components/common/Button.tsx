import { cva, cx, type VariantProps } from "class-variance-authority";

import type { PolyWithRefProps } from "./types";

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "border",
    "whitespace-nowrap",
    "transition-all",
  ],
  {
    variants: {
      corner: {
        pill: ["rounded-full"],
        round: ["rounded-sm"],
      },
      color: {
        "ghost-primary": [
          "bg-transparent",
          "border-transparent",
          "text-fg-text-brand",
        ],
        "ghost-gray": [
          "bg-transparent",
          "border-transparent",
          "text-fg-text-main",
        ],
        gray: ["bg-white", "border-fg-border-main", "text-fg-text-main"],
        icon: ["bg-white/40", "text-white", "border-transparent"],
        invert: ["bg-white", "border-fg-border-brand", "text-fg-text-brand"],
        primary: ["bg-bg-brand", "border-fg-border-brand", "text-white"],
        "transparent-white": ["bg-transparent", "border-white", "text-white"],
      },
      hover: {
        primary: [
          "hover:bg-bg-brand",
          "hover:border-fg-border-brand",
          "hover:text-white",
        ],
      },
      size: {
        icon: ["w-7", "h-7", "p-1"],
        "icon-sm": ["w-8", "h-8"],
        "icon-lg": ["w-10", "h-10"],
        "icon-xl": ["w-12", "h-12"],
        lg: ["h-12", "gap-2", "px-4", "py-3", "font-semibold"],
        md: ["h-10", "gap-1", "px-3", "py-2", "text-sm"],
        sm: ["h-8", "gap-1", "px-2", "py-2", "text-xs"],
      },
    },
    defaultVariants: {
      corner: "round",
      color: "invert",
      size: "md",
    },
  },
);

type ButtonProps<T extends React.ElementType = "button"> = PolyWithRefProps<
  T,
  VariantProps<typeof buttonVariants>
>;

export default function Button<T extends React.ElementType = "button">({
  ref,
  as,
  children,
  className,
  corner,
  color,
  disabled,
  hover,
  size,
  ...rest
}: ButtonProps<T>) {
  const Comp = as || "button";

  return (
    <Comp
      className={cx(
        buttonVariants({ corner, color, hover, size }),
        className,
        disabled && "cursor-not-allowed opacity-50",
      )}
      {...rest}
      ref={ref}
    >
      {children}
    </Comp>
  );
}
