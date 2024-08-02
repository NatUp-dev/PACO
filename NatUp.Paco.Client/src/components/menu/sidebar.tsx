"use client";
import { cn } from "@/lib/utils";
import Logo from "@/assets/logo.svg";
import LogoMini from "@/assets/logo_mini.svg";
import { ChevronsRight } from "lucide-react";
import { Button } from "../ui/button";
import { useSidebarToggle } from "../hooks/use-sidebar-toggle";
import { useStore } from "../hooks/use-store";
import Link from "next/link";
import Menu from "./menu";
import BottomMenu from "./bottom-menu";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "hidden lg:block fixed top-0 left-0 z-20 h-screen ease-in-out duration-200 mt-1.5 bg-white",
        sidebar.isOpen === false ? "w-16" : "w-[212px]"
      )}
    >
      <div className="relative h-full flex flex-col px-3 py-4 gap-2 shadow-md dark:shadow-zinc-800">
        <div className="flex flex-col items-center pt-0 px-2.5 pb-3 h-16">
          <Link href="/" className="h-14 flex justify-center">
            <Logo
              className={cn(
                "absolute h-9 w-full",
                sidebar.isOpen ? "opacity-100" : "opacity-0 hidden"
              )}
              alt="logo natup"
            />
            <LogoMini
              className={cn(
                "absolute h-9 w-full",
                sidebar.isOpen ? "opacity-0 hidden" : "opacity-100"
              )}
              alt="logo natup"
            />
          </Link>
        </div>
        <div className="flex flex-col text-sm justify-between h-full">
          <div className="flex flex-col gap-2 mt-[-10px]">
            <Menu />
          </div>
          <div className="flex flex-col gap-2">
            <BottomMenu />
            <div
              className={cn(
                "flex",
                sidebar.isOpen ? "justify-end" : "justify-center"
              )}
            >
              <Button variant={"ghost"} onClick={() => sidebar.setIsOpen()}>
                <ChevronsRight
                  className={cn(
                    "text-gray-500 transition-transform ease-in-out duration-700",
                    sidebar.isOpen ? "rotate-180" : "transform:rotate(-180deg)"
                  )}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
