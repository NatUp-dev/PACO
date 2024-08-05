import React, { useEffect, useState } from "react";
import ExploitationSelect from "./exploitation-select";
import { useParams } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "@/assets/logo.svg?url";
import Image from "next/image";
import BurgerMenu from "./burger-menu";
import Link from "next/link";

type HeaderTitleType = {
  key: string;
  title: string;
  subtitle: string;
};

export default function Header() {
  const [titles, setTitles] = useState<HeaderTitleType | undefined>();
  const params = useParams();
  const headerTitle: HeaderTitleType[] = [
    {
      key: "/activites/suivi-de-collectes",
      title: "Activité",
      subtitle: "Suivi de collectes",
    },
    {
      key: "/activites/commandes",
      title: "Activité",
      subtitle: "Commandes",
    },
    {
      key: "/activites/comptabilite",
      title: "Activité",
      subtitle: "Comptabilité",
    },
    {
      key: "/activites/documents",
      title: "Activité",
      subtitle: "Documents",
    },
    {
      key: "mentions-legales",
      title: "Informations",
      subtitle: "Mentions légales",
    },
    {
      key: "politique-confidentialite",
      title: "Informations",
      subtitle: "Politique de confidentialité",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const result = headerTitle.find((headerTitle) =>
      window.location.pathname.includes(headerTitle.key)
    );
    setTitles(result!);
  }, [params]);

  return (
    <>
      <div className="z-10 fixed md:relative top-0 w-full flex justify-between md:justify-around items-center px-3 md:px-7 h-[68px] shadow-sm bg-white border-b border-b-gray-100">
        <div className="md:hidden flex items-center gap-4">
          <Button
            className="bg-transparent border-0 hover:bg-transparent p-0"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <Menu className="w-6 text-gray-700" />
          </Button>
          <div className="flex items-center">
            <Link href="/" className="h-14 flex justify-center">
              <Image src={Logo} alt="logo natup" className="w-20.5" />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex w-full flex-col justify-start">
          <div className="text-gray-500 text-xs font-medium">
            {titles?.title}
          </div>
          <div className="text-gray-800 text-base font-medium">
            {titles?.subtitle}
          </div>
        </div>
        <div className="flex justify-end">
          <ExploitationSelect />
        </div>
      </div>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
