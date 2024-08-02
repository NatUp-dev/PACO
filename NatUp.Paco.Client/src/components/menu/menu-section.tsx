import React from "react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";

export default function MenuSection({
  text,
  isOpen,
}: {
  text: string;
  isOpen?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex px-2.5 gap-2.5 items-center text-gray-400 text-xs h-4.5 pb-6 md:pb-0",
        !isOpen && "pb-2"
      )}
    >
      {isOpen && <div>{text}</div>}
      <div className="w-full">
        <Separator className="text-gray-400" />
      </div>
    </div>
  );
}
