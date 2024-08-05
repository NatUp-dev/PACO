import React, { Fragment, useEffect, useState } from "react";
import MenuSection from "./menu-section";
import MenuItem from "./menu-item";
import { icons } from "lucide-react";
import { useStore } from "../hooks/use-store";
import { useSidebarToggle } from "../hooks/use-sidebar-toggle";
import { useParams } from "next/navigation";

export type MenuType = {
  key: string;
  section: string;
  items: MenuItemType[];
};

export type MenuItemType = {
  key: string;
  icon: keyof typeof icons;
  text: string;
  link: string;
};

export default function Menu({
  customOnClick,
}: {
  customOnClick?: () => void;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const params = useParams();
  const [activeMenu, setActiveMenu] = useState<string | undefined>();

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
                  customOnClick={customOnClick}
                />
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}
