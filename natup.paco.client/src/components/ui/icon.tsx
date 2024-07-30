"use client";

import * as React from "react";
import { icons } from "lucide-react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

/*Icones custom */
import Potato from "@/assets/icons/potato.svg";
import Beet from "@/assets/icons/beet.svg";
import Cow from "@/assets/icons/cow.svg";
import Sheep from "@/assets/icons/sheep.svg";
import CO2 from "@/assets/icons/CO2.svg";
import Engrais_protection from "@/assets/icons/engrais_protection.svg";
import Engrais from "@/assets/icons/engrais.svg";
import Granules from "@/assets/icons/granules.svg";
import Seed from "@/assets/icons/seed.svg";
import Plant from "@/assets/icons/plant.svg";
import Toolsgarden from "@/assets/icons/toolsgarden.svg";
import Ficelle from "@/assets/icons/ficelle.svg";

const customIcons = {
  Potato: Potato,
  Beet: Beet,
  Cow: Cow,
  Sheep: Sheep,
  CO2: CO2,
  Engrais_protection: Engrais_protection,
  Engrais: Engrais,
  Granules: Granules,
  Seed: Seed,
  Plant: Plant,
  Toolsgarden: Toolsgarden,
  Ficelle: Ficelle,
};

export type IconName = keyof typeof icons | keyof typeof customIcons;

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconProps {
  iconName: IconName;
  tooltip?: string;
  className?: string;
  round?: boolean;
}

const iconVariants = cva("", {
  variants: {
    size: {
      small: "h-3 w-3",
      default: "h-4 w-4",
      large: "h-5 w-5",
    },
    defaultVariants: { size: "default" },
  },
});

const Icon: React.FC<IconProps & VariantProps<typeof iconVariants>> = ({
  iconName,
  className,
  tooltip,
  round,
  size,
}) => {
  const displayIcon = function () {
    let IconComponent;

    if (iconName in icons) {
      IconComponent = icons[iconName as keyof typeof icons];
    } else if (iconName in customIcons) {
      IconComponent = customIcons[iconName as keyof typeof customIcons];
    } else {
      return null;
    }

    return (
      <div
        className={cn(
          `flex items-center justify-center`,
          round ? "rounded-full p-2" : "",
          className
        )}
      >
        <IconComponent className={cn(iconVariants({ size }))} />
      </div>
    );
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
