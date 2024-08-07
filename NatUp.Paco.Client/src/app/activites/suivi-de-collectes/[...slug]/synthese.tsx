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
import CustomChart from "@/components/ui/customchart";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import CustomPieChart from "@/components/ui/customPieChart";

export default function Synthese({ type }: { type: string }) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleSelectYear = (item: string | null) => {
    setSelectedYear(item);
  };

  // TODO Supprimer : valeur de démo
  // Attention : Il existe des règles de gestions et des libellés spécifiques selon la collecte sélectionnée
  // GRAIN -> "Campagne XXXX"
  //    Sinon -> "Année XXXX"
  const years = [
    { value: "2022", label: "Campagne 2022" },
    { value: "2023", label: "Campagne 2023" },
    { value: "2024", label: "Campagne 2024" },
  ];

  const baseUrl = `/activites/suivi-de-collectes/${type}`;

  const chartData = [
    { type: "ble", delivered: 0, todeliver: 228.85 },
    { type: "erucique", delivered: 27.04, todeliver: 0 },
    { type: "orge", delivered: 27.04, todeliver: 19.3 },
    { type: "colza", delivered: 27.04, todeliver: 19.3 },
  ];

  const chartConfig = {
    delivered: {
      color: "hsl(var(--chart-1))",
      label: "Livré",
    },
    todeliver: {
      color: "hsl(var(--chart-3))",
      label: "Reste à livrer",
    },
    ble: {
      label: "Blé",
      icon: "Wheat",
      className: "bg-wheat text-wheat-foreground",
    },
    erucique: {
      label: "Erucique",
      icon: "Wheat",
      className: "bg-wheat text-wheat-foreground",
    },
    orge: {
      label: "Orge",
      icon: "Wheat",
      className: "bg-wheat text-wheat-foreground",
    },
    colza: {
      label: "Colza",
      icon: "Wheat",
      className: "bg-wheat text-wheat-foreground",
    },
  };

  const pieChartConfig = {
    capduopremium: {
      label: "CAP Duo premium",
    },
    pulseospot: {
      label: "Pulseo spot",
    },
    pulseospotfourrager: {
      label: "Pulseo spot fourrager",
    },
    echangealiment: {
      label: "Echange aliment",
    },
    deliveries: {
      label: "Visitors",
    },
    chrome: {
      label: "Label de CHROME",
      color: "hsl(var(--chart-1))",
    },
  };

  const pieChartData = [
    { contract: "capduopremium", deliveries: 130.5, fill: "#00677E" },
    {
      contract: "pulseospot",
      deliveries: 65.25,
      fill: "#95C413",
    },
    {
      contract: "pulseospotfourrager",
      deliveries: 43.5,
      fill: "#14AFD1",
    },
    {
      contract: "echangealiment",
      deliveries: 21.75,
      fill: "#003743",
    },
  ];

  return (
    <>
      <ScrollArea className="shadow-sm whitespace-nowrap">
        <div className="bg-white py-4 px-7 border-0 border-b flex gap-2 w-full">
          <CustomToggle onSelectItem={handleSelectYear} items={years} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="flex flex-col gap-14 p-4 sm:p-7">
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
              <PopoverContent className="w-screen sm:w-80 sm:mr-7 mt-2">
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
          <div className="flex justify-between items-center mb-3">
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
          <Card>
            <CardContent className="p-4 md:p-6">
              <Label className="font-bold">Cumul des livraisons (T)</Label>
              <RadioGroup
                defaultValue="option1"
                orientation="horizontal"
                className="flex relative top-[21px]"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label size={"small"} htmlFor="option1">
                    Dépôt
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label size={"small"} htmlFor="option2">
                    Ferme
                  </Label>
                </div>
              </RadioGroup>
              <CustomChart conf={chartConfig} data={chartData} />
            </CardContent>
          </Card>
          <div className="flex text-xs items-center gap-1 py-4 text-gray-500">
            <div className="bg-success-500 w-1.5 h-1.5 rounded-full"></div>
            Données actualisées le 07 août 2024 à 16h48{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Icon size={"small"} iconName="CircleHelp"></Icon>
                </TooltipTrigger>
                <TooltipContent>
                  <p>TODO </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
          <div className="grid md:grid-cols-2 gap-6 pt-3 h-fit">
            <Card>
              <CardContent className="p-4 md:p-6">
                <Label className="font-bold">
                  Répartition de la contractualisation
                </Label>
                <RadioGroup
                  defaultValue="option0"
                  orientation="horizontal"
                  className="flex relative top-[21px]"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option0" id="option0" />
                    <Label size={"small"} htmlFor="option10">
                      Tous
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option10" id="option10" />
                    <Label size={"small"} htmlFor="option10">
                      Dépôt
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option20" id="option20" />
                    <Label size={"small"} htmlFor="option20">
                      Ferme
                    </Label>
                  </div>
                </RadioGroup>
                <CustomPieChart
                  conf={pieChartConfig}
                  data={pieChartData}
                  dataKey="deliveries"
                  nameKey="contract"
                  emptyTitle="Pas de contrat pour la récolte sélectionnée"
                  emptySubtitle="Sélectionnez une autre période pour avoir une vue des contrats"
                  unit="T"
                ></CustomPieChart>
              </CardContent>
            </Card>
            <Card className="min-h-56 h-full">
              <div className="flex items-center justify-center h-full w-full text-gray-300">
                <Icon
                  iconName="Hourglass"
                  className="hover:rotate-180 transition ease-in-out duration-500"
                ></Icon>
              </div>
            </Card>
          </div>
          <div className="flex text-xs items-center gap-1 py-4 text-gray-500">
            <div className="bg-success-500 w-1.5 h-1.5 rounded-full"></div>
            Données actualisées le 07 août 2024 à 16h48{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Icon size={"small"} iconName="CircleHelp"></Icon>
                </TooltipTrigger>
                <TooltipContent>
                  <p>TODO </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
