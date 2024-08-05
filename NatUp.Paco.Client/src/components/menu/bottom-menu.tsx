import React from "react";
import Help from "./help";
import BottomMenuItem from "./bottom-menu-item";
import { useStore } from "../hooks/use-store";
import { useSidebarToggle } from "../hooks/use-sidebar-toggle";

export default function BottomMenu() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  if (!sidebar) return null;
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  );
}
