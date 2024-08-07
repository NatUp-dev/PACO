"use client";

import React from "react";
import { Sidebar } from "../../components/menu/sidebar";
import { useStore } from "@/components/hooks/use-store";
import { useSidebarToggle } from "@/components/hooks/use-sidebar-toggle";
import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import NavigationProvider from "@/context/NavigationContext";
import Footer from "@/components/footer/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  return (
    <NavigationProvider>
      <Sidebar />
      <div
        className={cn(
          "transition-all duraction-500",
          sidebar?.isOpen ? "md:ml-[212px]" : "md:ml-[64px]"
        )}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </NavigationProvider>
  );
}
