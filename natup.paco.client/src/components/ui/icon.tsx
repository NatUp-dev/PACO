"use client";

import * as React from "react";
import { icons } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconProps {
  iconName: keyof typeof icons;
  tooltip?: string;
  color?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose"
    | "success"
    | "warning"
    | "danger";
}

const Icon: React.FC<IconProps> = ({ iconName, color, tooltip }) => {
  const IconComponent = icons[iconName as keyof typeof icons];

  if (!IconComponent) {
    return <div>Icon not found</div>; // Gérer l'absence d'icône comme vous le souhaitez
  }

  const variant: string = color ?? "slate";
  const displayIcon = (
    <span>
      <div
        className={
          "bg-" +
          variant +
          "-200 text-" +
          variant +
          "-800 rounded-full flex justify-center items-center m-1 h-8 w-8"
        }
      >
        <IconComponent className="w-4" />
      </div>
    </span>
  );

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{displayIcon}</TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    displayIcon
  );
};

export default Icon;
