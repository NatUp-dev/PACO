"use client";

import * as React from "react";
import Image from "next/image";
import { icons } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/*Icones custom */
import Beet from "@/assets/icons/beet.svg";
import Cow from "@/assets/icons/cow.svg";
import Sheep from "@/assets/icons/Sheep.svg";
import Potato from "@/assets/icons/potato.svg";

const customIcons = {
  beet: Beet,
  cow: Cow,
  sheep: Sheep,
  potato: Potato,
};

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconProps {
  iconName: keyof typeof icons | CutomIconType;
  tooltip?: string;
  className?: string;
  round?: boolean;
}

const iconVariants = cva("", {
  variants: {
    size: {
      small: "h-4 w-4",
      default: "h-6 w-6",
      large: "h-8 w-8",
    },
    defaultVariants: { size: "default" },
  },
});

type CutomIconType = "potato" | "beet" | "cow" | "sheep";

// Vérifie si la valeur est un nom d'icône valide
const isIconKey = (key: any): key is keyof typeof icons => {
  return key in icons;
};

const Icon: React.FC<IconProps & VariantProps<typeof iconVariants>> = ({
  iconName,
  className,
  tooltip,
  round,
  size,
}) => {
  const displayIcon = function () {
    if (isIconKey(iconName)) {
      const IconComponent = icons[iconName as keyof typeof icons];

      return (
        <div
          className={cn(
            `flex items-center justify-center`,
            round ? "rounded-full p-2" : "",
            className
          )}
        >
          <IconComponent className={cn(iconVariants({ size }), "")} />
        </div>
      );
    } else {
      return (
        <div className="self-center">
          <Image
            priority
            src={customIcons[iconName]}
            className={cn(iconVariants({ size }))}
            alt="Pas de données"
          />
        </div>
      );
    }
  };

  return tooltip ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{displayIcon()}</TooltipTrigger>
        <TooltipContent>
          <p className="">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    displayIcon()
  );
};

export default Icon;
