import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function BottomMenuItem({
  text,
  link,
  isOpen,
  className,
}: {
  text: string;
  link: string;
  isOpen: boolean;
  className?: string;
}) {
  return (
    isOpen && (
      <Link
        className={cn(
          "flex items-center justify-center text-xs/5 text-gray-600 hover:underline hover:decoration-gray-600",
          className
        )}
        href={link}
      >
        {text}
      </Link>
    )
  );
}
