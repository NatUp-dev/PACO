import React, { Fragment } from "react";
import { Select, SelectContent, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CollecteNavigationLink from "./collecte-navigation-link";
import CollecteSelectItem from "./collecte-select-item";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function CollecteHeader({ type }: { type: string }) {
  const params = useParams();
  const router = useRouter();
  const baseUrl = "/activites/suivi-de-collectes";

  const defaultNavigation = [
    {
      key: "synthese",
      name: "Synthèse",
      link: "/synthese",
    },
    {
      key: "livraisons",
      name: "Livraisons",
      link: "/livraisons",
    },
    {
      key: "contrats",
      name: "Contrats",
      link: "/contrats",
    },
    {
      key: "paiements",
      name: "Paiements",
      link: "/paiements",
    },
  ];
  const navigation = [
    {
      type: "grains",
      nav: defaultNavigation,
    },
    {
      type: "ovins",
      nav: [
        ...defaultNavigation,
        {
          key: "achats",
          name: "Achats",
          link: "/achats",
        },
        {
          key: "planifications",
          name: "Planifications",
          link: "/planifications",
        },
        {
          key: "financements",
          name: "Financements",
          link: "/financements",
        },
      ],
    },
    {
      type: "bovins",
      nav: defaultNavigation,
    },
    {
      type: "légumes",
      nav: defaultNavigation,
    },
  ];
  const filteredNavigation = navigation.filter((item) => item.type === type);

  const isActive = (value: any) => params.slug[1] === value;

  const handleCollecteTypeChange = (value: string) => {
    router.push(`${baseUrl}/${value}/synthese`);
  };

  return (
    <div className="sticky top-[68px] md:sticky md:top-1.5 z-10">
      <ScrollArea className="shadow-sm">
        <div className="flex items-center w-full h-12 ps-3.5 md:ps-7 gap-[18px] bg-white top-0">
          <Select
            defaultValue={params.slug[0]}
            onValueChange={handleCollecteTypeChange}
          >
            <SelectTrigger className="min-w-52 max-w-52 h-8 bg-blue-700 text-blue-50 rounded-lg">
              <SelectValue defaultValue={"light"} />
            </SelectTrigger>
            <SelectContent className="bg-blue-700 text-blue-50">
              <CollecteSelectItem
                icon="Wheat"
                text="Collecte grains"
                value="grains"
              />
              <CollecteSelectItem
                icon="Wheat"
                text="Collecte ovins"
                value="ovins"
              />
              <CollecteSelectItem
                icon="Wheat"
                text="Collecte bovins"
                value="bovins"
              />
              <CollecteSelectItem
                icon="Leaf"
                text="Collecte légumes"
                value="legumes"
              />
            </SelectContent>
          </Select>
          <div className="flex gap-4 text-sm font-medium">
            {filteredNavigation.map((item, index) => (
              <Fragment key={`${item.type}_${index}`}>
                {item.nav.map((navItem) => (
                  <div className="relative flex flex-col" key={navItem.key}>
                    <CollecteNavigationLink
                      isActive={isActive(navItem.key)}
                      text={navItem.name}
                      link={`${baseUrl}/${params.slug[0]}${navItem.link}`}
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
