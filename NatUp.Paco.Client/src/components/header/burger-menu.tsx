import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "@/assets/logo.svg?url";
import Image from "next/image";
import Menu from "../menu/menu";
import BottomMenu from "../menu/bottom-menu";

export default function BurgerMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <Sheet defaultOpen={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side={"top"}
        className="bg-white p-0 h-[calc(100%-70px)]"
        closeClassName="top-[25px]"
        displayOverlay={false}
      >
        <SheetHeader className="p-0">
          <SheetTitle className="border-b border-b-gray-100 flex px-3 py-5 h-full">
            <Image src={Logo} alt="logo natup" className="ml-2 w-20.5" />
          </SheetTitle>
        </SheetHeader>
        <div className="px-3 pb-5 flex flex-col pt-6 justify-between h-full bg-white">
          <Menu customOnClick={() => setIsOpen(false)} />
          <BottomMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
