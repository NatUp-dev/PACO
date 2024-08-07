"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomToggle from "@/components/ui/customToggle";
import DataCard from "@/components/ui/datacard";
import Icon from "@/components/ui/icon";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";

export default function Synthese({ type }: { type: string }) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleSelectYear = (item: string | null) => {
    setSelectedYear(item);
  };

  // TODO Supprimer : valeur de démo
  const years = [
    { value: "2023", label: "Année 2023" },
    { value: "2024", label: "Année 2024" },
    { value: "2025", label: "Année 2025" },
  ];

  const baseUrl = `/activites/suivi-de-collectes/${type}`;

  return (
    <>
      <div className="bg-white py-4 px-7 border-0 border-b">
        <CustomToggle onSelectItem={handleSelectYear} items={years} />
      </div>

      <div className="flex flex-col gap-14 p-7">
        {/* Indicateurs */}
        <div>
          <div className="flex justify-between items-center">
            <Label className="font-bold">Indicateurs</Label>
            <Button size={"sm"} variant={"blue"}>
              <div className="flex gap-1">
                <Icon size={"small"} iconName={"Settings"}></Icon>{" "}
                <span>Définir les indicateurs</span>
              </div>
            </Button>
          </div>

          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <DataCard
              title="Livraisons"
              data={18650.2}
              type="T"
              icon="Truck"
              tooltip="Tooltip livraisons"
            />
            <DataCard
              title="Paiements effectués"
              subtitle="En date du ven. 14 juin"
              data={13500}
              type="€ TTC"
              icon="Banknote"
            />
            <DataCard
              title="Livraisons sous contrats"
              type="Têtes"
              icon="Truck"
              tooltip="Tooltip livraisons"
            />
            <DataCard empty></DataCard>
          </div>
        </div>

        {/* Livraisons */}
        <div>
          <div className="flex justify-between items-center ">
            <Link href={`${baseUrl}/livraisons`}>
              <div className="flex items-center gap-2">
                <Label className="font-bold">Livraisons</Label>
                <Icon
                  size={"default"}
                  className="text-gray-500 border border-gray-300 bg-white p-0"
                  iconName={"ChevronRight"}
                  round
                ></Icon>
              </div>
            </Link>

            <Link href={`${baseUrl}/livraisons`}>
              <Button size={"sm"} variant={"blue"}>
                Voir les livraisons
              </Button>
            </Link>
          </div>
        </div>

        {/* Contrats */}
        <div>
          <div className="flex justify-between items-center">
            <Link href={`${baseUrl}/contrats`}>
              <div className="flex items-center gap-2">
                <Label className="font-bold">Contrats</Label>
                <Icon
                  size={"default"}
                  className="text-gray-500 border border-gray-300 bg-white p-0"
                  iconName={"ChevronRight"}
                  round
                ></Icon>
              </div>
            </Link>
            <Link href={`${baseUrl}/contrats`}>
              <Button size={"sm"} variant={"blue"}>
                Voir les contrats
              </Button>
            </Link>
          </div>
        </div>

        {/* Paiements */}
        <div>
          <div className="flex justify-between items-center">
            <Link href={`${baseUrl}/paiements`}>
              <div className="flex items-center gap-2">
                <Label className="font-bold">Paiements</Label>
                <Icon
                  size={"default"}
                  className="text-gray-500 border border-gray-300 bg-white p-0"
                  iconName={"ChevronRight"}
                  round
                ></Icon>
              </div>
            </Link>
            <Link href={`${baseUrl}/paiements`}>
              <Button size={"sm"} variant={"blue"}>
                Voir les paiements
              </Button>
            </Link>
          </div>
        </div>

        {/* Mes avantages NatUp */}
        <div>
          <Label className="font-bold">Mes avantages NatUp</Label>
        </div>
      </div>
    </>
  );
}
