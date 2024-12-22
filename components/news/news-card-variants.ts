import { cva, type VariantProps } from "cva";

export const cardVariants = cva({
  base: ["flex", "gap-6"],
  variants: {
    axis: {
      vertical: ["flex-col"],
      horizontal: ["flex-row"],
    },
  },
  defaultVariants: {
    axis: "vertical",
  },
});

export const imageVariants = cva({
  base: ["h-50", "overflow-hidden", "relative", "rounded", "w-full"],
  variants: {
    axis: {
      vertical: ["lg:h-70", "md:h-60"],
      horizontal: [],
    },
  },
  defaultVariants: {
    axis: "vertical",
  },
});

export const contentVariants = cva({
  variants: {
    axis: {
      vertical: [],
      horizontal: ["lg:max-w-1/2", "max-w-60"],
    },
  },
  defaultVariants: {
    axis: "vertical",
  },
});

export const titleVariants = cva({
  base: [
    "font-bold",
    "font-heading",
    "line-clamp-3",
    "mt-3",
    "text-brand-gray-8",
    "text-lg",
  ],
  variants: {
    axis: {
      vertical: ["lg:text-2xl"],
      horizontal: [],
    },
  },
  defaultVariants: {
    axis: "vertical",
  },
});

export type CardVariant = VariantProps<typeof cardVariants>;
