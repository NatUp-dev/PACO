import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { Wheat } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CollecteHeader({ type }: { type: string }) {
  const [selected, setSelected] = React.useState("light");

  const defaultNavigation = [
    {
      name: "Synthèse",
      link: "/synthese",
    },
    {
      name: "Livraisons",
      link: "/livraisons",
    },
    {
      name: "Contrats",
      link: "/contrats",
    },
    {
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
          name: "Achats",
          link: "/achats",
        },
        {
          name: "Planifications",
          link: "/planifications",
        },
        {
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

  return (
    <div className="flex items-center w-full h-12 shadow-sm ps-7 gap-[18px]">
      <Select defaultValue={"light"}>
        <SelectTrigger className="w-[180px] h-8 bg-blue-700 text-blue-50 rounded-lg">
          <SelectValue defaultValue={"light"} />
        </SelectTrigger>
        <SelectContent className="bg-blue-700 text-blue-50">
          <SelectItem value="light" withCheck={false}>
            <div className="flex items-center gap-2 px-1.5">
              <Wheat className="h-3.5 w-3.5" />
              <div>Collecte grains</div>
            </div>
          </SelectItem>
          <SelectItem value="dark" withCheck={false}>
            <div className="flex items-center gap-2 px-1.5">
              <Wheat className="h-3.5 w-3.5" />
              <div>Collecte ovins</div>
            </div>
          </SelectItem>
          <SelectItem value="system" withCheck={false}>
            <div className="flex items-center gap-2 px-1.5">
              <Wheat className="h-3.5 w-3.5" />
              <div>Collecte bovins</div>
            </div>
          </SelectItem>
          <SelectItem value="other" withCheck={false}>
            <div className="flex items-center gap-2 px-1.5">
              <Wheat className="h-3.5 w-3.5" />
              <div>Collecte légumes</div>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <div className="flex gap-4 text-sm font-medium">
        {filteredNavigation.map((item) =>
          item.nav.map((navItem) => (
            <div className="relative flex flex-col">
              <Link
                className={cn("px-4 py-2", "text-blue-700")}
                href={navItem.link}
              >
                {navItem.name}
              </Link>
              <div className="absolute w-full bg-blue-600 h-0.5 rounded-t-md bottom-0 mb-[-6px]"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
