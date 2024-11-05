import { cva, cx, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

import type { PolyRef, PolyWithRefProps } from "./types";

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
        round: ["rounded"],
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
      },
      size: {
        icon: ["w-7", "h-7", "p-1"],
        "icon-lg": ["w-10", "h-10"],
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

type ButtonComponent = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
) => React.ReactNode;

const Button: ButtonComponent = forwardRef(function Button<
  T extends React.ElementType,
>(
  { as, children, className, corner, color, size, ...rest }: ButtonProps<T>,
  ref?: PolyRef<T>,
) {
  const Comp = as || "button";

  return (
    <Comp
      className={cx(buttonVariants({ corner, color, size }), className)}
      {...rest}
      ref={ref}
    >
      {children}
    </Comp>
  );
});

export default Button;
