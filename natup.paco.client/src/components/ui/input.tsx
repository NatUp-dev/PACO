import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { icons } from "lucide-react";

const inputVariants = cva(
  "flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        small: "h-8 text-sm",
        default: "h-10 text-base",
        large: "h-12 text-lg",
      },
      defaultVariants: { size: "default" },
    },
  }
);

// Utilitaire pour omettre une propriété d'un type
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// Suppression de la propriété 'size' de 'InputHTMLAttributes<HTMLInputElement>'
type InputHTMLAttributesWithoutSize = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & { prefix?: keyof typeof icons; suffix?: keyof typeof icons };

export interface InputProps
  extends InputHTMLAttributesWithoutSize,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, prefix, suffix, ...props }, ref) => {
    const PrefixIcon = icons[prefix!] || null;
    const SuffixIcon = icons[suffix!] || null;
    return (
      <div className="relative">
        {PrefixIcon !== null && (
          <span className="absolute left-0 top-0 h-full flex p-2 items-center">
            <PrefixIcon className="h-4 w-4 text-muted-foreground top-2" />
          </span>
        )}
        <input
          type={type}
          className={cn(
            inputVariants({ size, className }),
            PrefixIcon !== null ? "pl-7" : "",
            SuffixIcon !== null ? "pr-7" : ""
          )}
          ref={ref}
          {...props}
        />
        {SuffixIcon !== null && (
          <span className="absolute right-0 top-0 h-full flex p-2 items-center">
            <SuffixIcon className="h-4 w-4 text-muted-foreground top-2" />
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
