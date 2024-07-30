import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Icon, { type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { icons } from "lucide-react";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gray-100 text-gray-600",
        secondary: "border-transparent bg-blue-50 text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        wheat: "border-transparent bg-wheat text-wheat-foreground",
        beet: "border-transparent bg-beet text-beet-foreground",
        carrot: "border-transparent bg-carrot text-carrot-foreground",
        cow: "border-transparent bg-cow text-cow-foreground",
        sheep: "border-transparent bg-sheep text-sheep-foreground",
        potato: "border-transparent bg-vegetables text-potato-foreground",
      },
      size: {
        small: "text-xs",
        default: "text-sm",
        large: "text-base",
      },
      // icon: {},
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon: keyof typeof icons | IconName;
}

function Badge({ className, variant, size, icon, ...props }: BadgeProps) {
  return (
    <div
      className={cn("flex gap-1", badgeVariants({ variant, size }), className)}
      {...props}
    >
      <Icon iconName={icon} size={"small"}></Icon>
      {props.children}
    </div>
  );
}

export { Badge, badgeVariants };
