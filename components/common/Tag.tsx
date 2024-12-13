import { cva, cx, VariantProps } from "cva";

const tagVariants = cva({
  base: ["px-2", "py-1", "text-xxs", "border", "rounded-sm"],
  variants: {
    color: {
      brand: [
        "bg-bg-brand-bright",
        "border-fg-border-brand-lc",
        "text-fg-text-brand",
      ],
      danger: [
        "bg-bg-danger-bright",
        "border-fg-border-danger-lc",
        "text-fg-text-danger",
      ],
      info: [
        "bg-bg-info-bright",
        "border-fg-border-info-lc",
        "text-fg-text-info",
      ],
      success: [
        "bg-bg-success-bright",
        "border-fg-border-success-lc",
        "text-fg-text-success",
      ],
      warning: [
        "bg-bg-warning-bright",
        "border-fg-border-warning-lc",
        "text-fg-text-warning",
      ],
    },
  },
  defaultVariants: {
    color: "brand",
  },
});

type TagProps = React.PropsWithChildren<VariantProps<typeof tagVariants>>;

export default function Tag({ color, children }: TagProps) {
  return <span className={cx(tagVariants({ color }))}>{children}</span>;
}
