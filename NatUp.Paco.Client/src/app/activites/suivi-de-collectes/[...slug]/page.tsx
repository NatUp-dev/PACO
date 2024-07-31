"use client";
import DataCard from "@/components/ui/datacard";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";

// params : le slug contient les éléments de navigation entre les différentes section de la page suivi-de-collectes
// params[0] : le type de collecte (grains, ovins, bovins, légumes)
// params[1] : la section de la page (synthese, livraisons, contrats, paiements, achats, planifications, financements)

export default function Page({ params }: { params: { slug: string[] } }) {
  useEffect(() => {
    if (params.slug.length == 1) {
    }
  }, []);
  return (
    <>
      {/* <p className="p-4">{JSON.stringify(params)}</p> */}

      {/* INDICATEURS */}
      <div className="p-8">
        <Label size={"large"} className="font-bold">
          Indicateurs
        </Label>

        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-screen">
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
            title="Apports contractualisés"
            subtitle="En dépôt"
            data={23}
            type="%"
            icon="File"
            progress
          />
          <DataCard
            title="Prix moyen pondéré blé"
            data={272}
            type="€ / T"
            icon="Wheat"
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
    </>
  );
}
