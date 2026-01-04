import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva(
  "inline-block shrink-0 text-current",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      animate: {
        false: "",
        true: "animate-spin",
      },
    },
    defaultVariants: {
      size: "md",
      animate: false,
    },
  }
);

interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "ref">,
    VariantProps<typeof iconVariants> {
  svg: React.ElementType;
}

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconProps) {
  return (
    <SvgComponent
      className={iconVariants({
        animate,
        className: `fill-current ${className ?? ""}`,
      })}
      {...props}
    />
  );
}

