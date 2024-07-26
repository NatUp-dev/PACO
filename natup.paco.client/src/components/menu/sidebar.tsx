"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import logomini from "@/assets/logo_mini.svg";
import { Separator } from "@/components/ui/separator";
import { ChevronsRight, icons } from "lucide-react";
import Help from "./help";
import MenuItem from "./menui-tem";
import MenuSection from "./menu-section";
import { Button } from "../ui/button";
import BottomMenuItem from "./bottom-menu-item";
import { useSidebarToggle } from "../hooks/use-sidebar-toggle";
import { useStore } from "../hooks/use-store";
import Link from "next/link";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  type MenuType = {
    section: string;
    items: MenuItemType[];
  };

  type MenuItemType = {
    icon: keyof typeof icons;
    text: string;
    link: string;
  };

  const menu: MenuType[] = [
    {
      section: "Activités",
      items: [
        {
          icon: "PieChart",
          text: "Suivi de collectes",
          link: "/",
        },
        {
          icon: "Wallet",
          text: "Comptabilité",
          link: "/",
        },
        {
          icon: "ClipboardList",
          text: "Commandes",
          link: "/",
        },
        {
          icon: "File",
          text: "Documents",
          link: "/",
        },
      ],
    },
  ];

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen ease-in-out duration-200 mt-1.5",
        sidebar.isOpen === false ? "w-16" : "w-[212px]"
      )}
    >
      <div className="relative h-full flex flex-col px-3 py-4 gap-2 shadow-md dark:shadow-zinc-800">
        <div className="flex flex-col items-center pt-0 px-2.5 pb-3 h-16">
          <Link href="/" className="h-14 flex justify-center">
            <Image
              priority
              src={logo}
              alt="logo natup"
              height={36}
              className={cn(
                "absolute",
                sidebar.isOpen ? "opacity-100" : "opacity-0 hidden"
              )}
            />
            <Image
              priority
              src={logomini}
              alt="logo natup"
              height={36}
              className={cn(
                "absolute",
                sidebar.isOpen ? "opacity-0 hidden" : "opacity-100"
              )}
            />
          </Link>
          <Separator />
        </div>
        <div className="flex flex-col text-sm justify-between h-full">
          <div className="flex flex-col gap-2 mt-[-10px]">
            <MenuItem
              icon="House"
              text="Accueil"
              link="/"
              isOpen={sidebar.isOpen}
              isSelected={true}
            />
            <div>
              {menu.map((item) => {
                return (
                  <>
                    <MenuSection
                      text={item.section}
                      key={item.section}
                      isOpen={sidebar.isOpen}
                    />
                    {item.items.map((menuItem) => {
                      return (
                        <MenuItem
                          icon={menuItem.icon}
                          text={menuItem.text}
                          link={menuItem.link}
                          isOpen={sidebar.isOpen}
                        />
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Help isOpen={sidebar.isOpen} />
            <div>
              <BottomMenuItem
                text="Mentions légales"
                link="/"
                isOpen={sidebar.isOpen}
              />
              <BottomMenuItem
                text="Politique de confidentialité"
                link="/"
                isOpen={sidebar.isOpen}
              />
            </div>
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
