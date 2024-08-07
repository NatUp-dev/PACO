"use client";

import React, { useEffect } from "react";
import Synthese from "./synthese";

// params : le slug contient les éléments de navigation entre les différentes section de la page suivi-de-collectes
// params[0] : le type de collecte (grains, ovins, bovins, légumes)
// params[1] : la section de la page (synthese, livraisons, contrats, paiements, achats, planifications, financements)

export default function Page({ params }: { params: { slug: string[] } }) {
  useEffect(() => {
    if (params.slug.length == 1) {
    }
  }, []);

  const render = function () {
    switch (params.slug[1]) {
      case "synthese":
        return <Synthese type={params.slug[0]} />;

      default:
        return <p className="p-4">{JSON.stringify(params)}</p>;
    }
  };

  return <>{render()}</>;
}
