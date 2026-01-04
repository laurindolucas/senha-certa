
import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";
export const buttonVariants = cva(
    "flex items-center justify-center cursor-pointer transition rounded-lg gap-2",
    {
        variants: {
            variant: {
                primary: `
          bg-[hsl(var(--card))]
          border border-[hsl(var(--border))]
          rounded-[var(--radius)]
          hover:bg-[hsl(var(--muted))]
          active:bg-[hsl(214,89%,11%)]
        `,
                secondary: `
         bg-[hsl(0,0%,100%)]
          border border-[hsl(var(--border))]
          rounded-[var(--radius)]
          hover:bg-[hsl(0,0%,89%)]
          active:bg-[hsl(216,2%,50%)]
        `
            },
            size: {
                md: "py-[1rem] px-[2rem]",
            },
            disabled: {
                true: "opacity-50 pointer-events-none",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false,
        },
    }
);


export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            primary: "border border-[hsl(var(--border))]"
        }, size: {
            md: "w-5 h-5"
        }
    }, defaultVariants: {
        variant: "primary",
        size: "md"

    }

})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: " border-[hsl(var(--border))]",
        },
    },
    defaultVariants: {
        variant: "primary",
    },
});



interface ButtonProps
    extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
    icon?: React.ComponentProps<typeof Icon>["svg"];
}



export default function Button({ variant, size, disabled, className, children, icon: IconComponent, ...props }: ButtonProps) {
    return (
        <button className={buttonVariants({ variant, size, disabled, className })}{...props}>
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={buttonIconVariants({ variant, size })}
                />
            )}
            <Text variant="body-md-bold" className={buttonTextVariants({ variant })}>
                {children}
            </Text>

        </button>
    );
}