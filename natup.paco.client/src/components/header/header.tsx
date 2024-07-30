import React, { useEffect, useState } from "react";
import ExploitationSelect from "./exploitation-select";
import { useParams } from "next/navigation";

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

  useEffect(() => {
    const result = headerTitle.find((headerTitle) =>
      window.location.pathname.includes(headerTitle.key)
    );
    setTitles(result!);
  }, [params]);

  return (
    <>
      <div className="w-full flex justify-around items-center px-7 h-[68px] shadow-sm">
        <div className="hidden md:flex w-full flex-col justify-start">
          <div className="text-gray-500 text-xs font-medium">
            {titles?.title}
          </div>
          <div className="text-gray-800 text-base font-medium">
            {titles?.subtitle}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <ExploitationSelect />
        </div>
      </div>
    </>
  );
}
