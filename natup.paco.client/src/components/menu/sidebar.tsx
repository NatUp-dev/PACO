"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import LogoMini from "@/assets/logo_mini.svg";
import { ChevronsRight, icons } from "lucide-react";
import Help from "./help";
import MenuItem from "./menu-item";
import MenuSection from "./menu-section";
import { Button } from "../ui/button";
import BottomMenuItem from "./bottom-menu-item";
import { useSidebarToggle } from "../hooks/use-sidebar-toggle";
import { useStore } from "../hooks/use-store";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const params = useParams();
  const [activeMenu, setActiveMenu] = useState<string | undefined>();

  type MenuType = {
    key: string;
    section: string;
    items: MenuItemType[];
  };

  type MenuItemType = {
    key: string;
    icon: keyof typeof icons;
    text: string;
    link: string;
  };

  const menu: MenuType[] = [
    {
      key: "activites",
      section: "Activités",
      items: [
        {
          key: "suivi-de-collectes",
          icon: "PieChart",
          text: "Suivi de collectes",
          link: "/activites/suivi-de-collectes",
        },
        {
          key: "comptabilite",
          icon: "Wallet",
          text: "Comptabilité",
          link: "/activites/comptabilite",
        },
        {
          key: "commandes",
          icon: "ClipboardList",
          text: "Commandes",
          link: "/activites/commandes",
        },
        {
          key: "documents",
          icon: "File",
          text: "Documents",
          link: "/activites/documents",
        },
      ],
    },
  ];
  useEffect(() => {
    const parent = menu.find(
      (menu) => menu.key === window.location.pathname.split("/")[1]
    );
    const child = parent?.items.find(
      (menuItem) => menuItem.key === window.location.pathname.split("/")[2]
    );

    if (child) {
      setActiveMenu(child.key);
    }
  }, [params]);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "hidden lg:block fixed top-0 left-0 z-20 h-screen ease-in-out duration-200 mt-1.5",
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
            <div>
              {menu.map((item) => {
                return (
                  <Fragment key={item.section}>
                    <MenuSection text={item.section} isOpen={sidebar.isOpen} />
                    {item.items.map((menuItem) => {
                      return (
                        <MenuItem
                          key={menuItem.link}
                          icon={menuItem.icon}
                          text={menuItem.text}
                          link={menuItem.link}
                          isOpen={sidebar.isOpen}
                          isSelected={menuItem.key === activeMenu}
                        />
                      );
                    })}
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Help isOpen={sidebar.isOpen} />
            <div>
              <BottomMenuItem
                text="Mentions légales"
                link="/informations/mentions-legales"
                isOpen={sidebar.isOpen}
              />
              <BottomMenuItem
                text="Politique de confidentialité"
                link="/informations/politique-confidentialite"
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
