import { Headset } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Help({ isOpen }: { isOpen?: boolean }) {
  return isOpen ? (
    <HelpContent />
  ) : (
    <TooltipProvider>
      <Tooltip delayDuration={50} disableHoverableContent={true}>
        <TooltipTrigger>
          <div className="bg-green-50 rounded-md py-3 flex flex-col justify-center items-center">
            <Headset className="h-[18px] w-[18px] text-green-700" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" isOpenable={true}>
          <HelpContent className="bg-white" />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const HelpContent = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-green-50 rounded-md py-5 flex flex-col justify-center items-center truncate",
        className
      )}
    >
      <div className="flex items-center gap-2 text-green-950 text-base font-medium">
        <Headset className="h-[18px] w-[18px] text-green-700" />
        Besoin d&apos;aide ?
      </div>
      <div className="text-green-950 font-medium text-xs text-center">
        <div>Contacter notre support</div>
        <div className="text-green-600 font-bold text-lg">
          <a href="tel:0 809 409 409">0 809 409 409</a>
        </div>
        <div className="font-light">Du lundi au vendredi</div>
        <div className="font-light">(Service gratuit + prix appel.)</div>
      </div>
    </div>
  );
};
