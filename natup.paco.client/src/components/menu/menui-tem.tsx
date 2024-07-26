import React from "react";
import { icons } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function MenuItem({
  icon,
  text,
  link,
  className,
  isOpen,
  isSelected,
}: {
  icon: keyof typeof icons;
  text: string;
  link: string;
  className?: string;
  isOpen?: boolean;
  isSelected?: boolean;
}) {
  const LucideIcon = icons[icon];
  return (
    <div className="relative  ">
      {isSelected && (
        <div className="absolute w-[3px] bg-blue-600 h-[36px] rounded-e-md left-[-12px] top-0"></div>
      )}
      <TooltipProvider>
        <Tooltip delayDuration={50} disableHoverableContent={true}>
          <TooltipTrigger>
            <Link
              className={cn(
                "flex items-center justify-start h-9 text-gray-600 truncate gap-2 px-2.5 hover:bg-gray-50 rounded-[50px]",
                isOpen ? "w-[190px]" : "justify-center w-[38px]",
                isSelected && "pointer-events-none",
                className
              )}
              href={link}
            >
              <LucideIcon
                className={cn(
                  "absolute left-0 ml-[10px] h-[18px] w-[18px] text-gray-500",
                  isSelected && "text-blue-700"
                )}
              />
              <p
                className={cn(
                  "absolute max-w-[200px] pl-8",
                  isOpen
                    ? "transition-opacity duration-1000 opacity-100"
                    : "opacity-0 ",
                  isSelected && "text-blue-600"
                )}
              >
                {text}
              </p>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" isOpenable={!isOpen}>
            {text}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
