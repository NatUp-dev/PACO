import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center py-0 justify-center whitespace-nowrap rounded-md font-normal ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:bg-gray-50 disabled:text-gray-200 disabled:border-gray-200 disabled:hover:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "border border-blue-700 bg-blue-700 text-blue-50 hover:bg-blue-700/60 hover:border-blue-700/60",
        outline:
          "border border-gray-300 bg-white text-gray-700 hover:border-gray-300/60 hover:text-gray-700/60",
        destructive:
          "border border-danger-50 bg-danger-50 text-danger-700 hover:bg-danger-50/60 hover:text-danger-700/60",
        secondary:
          "border border-blue-600 text-blue-700 bg-white hover:border-blue-600/60 hover:text-blue-700/60",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        blue: "border border-blue-600 text-blue-700 bg-white hover:text-blue-700/60 hover:border-blue-600/60",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8  px-3 text-sm",
        default: "h-10 px-3.5 text-base",
        lg: "h-12 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
