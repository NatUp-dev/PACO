import { SelectItem } from "@/components/ui/select";
import React from "react";
import { icons } from "lucide-react";

export default function CollecteSelectItem({
  icon,
  text,
  value,
}: {
  icon: keyof typeof icons;
  text: string;
  value: "grains" | "ovins" | "bovins" | "legumes";
}) {
  const LucideIcon = icons[icon];
  return (
    <SelectItem value={value} withCheck={false}>
      <div className="flex items-center gap-2 px-1.5">
        <LucideIcon className="h-3.5 w-3.5" />
        <div>{text}</div>
      </div>
    </SelectItem>
  );
}
