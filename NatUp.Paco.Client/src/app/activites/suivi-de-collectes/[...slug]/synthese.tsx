"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomToggle from "@/components/ui/customToggle";
import DataCard from "@/components/ui/datacard";
import Icon from "@/components/ui/icon";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";

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

            <Popover>
              <PopoverTrigger asChild>
                <Button size={"sm"} variant={"blue"}>
                  <div className="flex gap-1">
                    <Icon size={"small"} iconName={"Settings"}></Icon>{" "}
                    <span>Définir les indicateurs</span>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 mr-7 mt-2">
                <div className="grid gap-4">
                  <div className="text-gray-700">
                    <h4 className="text-sm font-medium leading-none">
                      Choix des indicateurs
                    </h4>
                    <p className="text-xs  text-muted-foreground">
                      Affichage de 4 indicateurs possibles
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option1" />
                        <Label size={"small"} htmlFor="option1">
                          Livraisons
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option2" />
                        <Label size={"small"} htmlFor="option2">
                          Paiements effectués
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option3" />
                        <Label size={"small"} htmlFor="option3">
                          Prochain paiement
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option4" />
                        <Label size={"small"} htmlFor="option4">
                          Apports contractualisés
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option5" />
                        <Label size={"small"} htmlFor="option5">
                          Ventes stockage dépôt
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option6" />
                        <Label size={"small"} htmlFor="option6">
                          Prix moyen pondéré blé tendre
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch size={"small"} id="option7" />
                        <Label size={"small"} htmlFor="option7">
                          Reste à vendre
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
          <Card className="h-56 mt-3">
            <div className="flex items-center justify-center h-full w-full text-gray-300">
              <Icon
                iconName="Hourglass"
                className="hover:rotate-180 transition ease-in-out duration-500 "
              ></Icon>
            </div>
          </Card>
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
          <Card className="h-56 mt-3">
            <div className="flex items-center justify-center h-full w-full text-gray-300">
              <Icon
                iconName="Hourglass"
                className="hover:rotate-180 transition ease-in-out duration-500"
              ></Icon>
            </div>
          </Card>
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
          <Card className="h-56 mt-3">
            <div className="flex items-center justify-center h-full w-full text-gray-300">
              <Icon
                iconName="Hourglass"
                className="hover:rotate-180 transition ease-in-out duration-500 "
              ></Icon>
            </div>
          </Card>
        </div>

        {/* Mes avantages NatUp */}
        <div>
          <Label className="font-bold">Mes avantages NatUp</Label>
          <Card className="h-56 mt-3">
            <div className="flex items-center justify-center h-full w-full text-gray-300">
              <Icon
                iconName="Hourglass"
                className="hover:rotate-180 transition ease-in-out duration-500 "
              ></Icon>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
