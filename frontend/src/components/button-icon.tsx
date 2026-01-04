import { cva, type VariantProps } from "class-variance-authority";
import Icon from "./icon";
import Skeleton from "./skeleton";

export const buttonIconVariants = cva(
  `
  inline-flex items-center justify-center
  cursor-pointer transition group
  bg-transparent border-0 appearance-none
  `,
  {
    variants: {
      variant: {
        none: "text-[hsl(var(--muted-foreground))]",
        primary: "text-[hsl(var(--primary))]",
        secondary: "text-[hsl(var(--secondary-foreground))]",
        destructive: "text-[hsl(var(--destructive))]",
      },
      size: {
        sm: "w-8 h-8",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);


export const buttonIconIconVariants = cva(
  "transition-colors",
  {
    variants: {
      variant: {
        none: "",

        primary: "text-[hsl(var(--primary-foreground))]",

        secondary: `
          text-[hsl(var(--secondary-foreground))]
          group-hover:text-[hsl(var(--foreground))]
        `,

        tertiary: `
          text-[hsl(var(--muted-foreground))]
          group-hover:text-[hsl(var(--foreground))]
        `,

        destructive: "text-[hsl(var(--destructive-foreground))]",
      },
      size: {
        sm: "w-4 h-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

interface ButtonIconProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  loading,
  icon,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ className, variant, size, disabled })}
      {...props}
    >
      <Icon
        svg={icon}
        className={buttonIconIconVariants({ size, variant })}
      />
    </button>
  );
}
