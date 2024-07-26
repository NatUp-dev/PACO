"use client";

import React from "react";
import { Sidebar } from "../../../components/menu/sidebar";
import { useStore } from "@/components/hooks/use-store";
import { useSidebarToggle } from "@/components/hooks/use-sidebar-toggle";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <>
      <Sidebar />
      <div
        className={cn(
          "transition-all duraction-500",
          sidebar?.isOpen ? "ml-[212px]" : "ml-[64px]"
        )}
      >
        {children}
      </div>
    </>
  );
}
