"use client";
import React, { useEffect } from "react";

// params : le slug contient les éléments de navigation entre les différentes section de la page suivi-de-collectes
// params[0] : le type de collecte (grains, ovins, bovins, légumes)
// params[1] : la section de la page (synthese, livraisons, contrats, paiements, achats, planifications, financements)

export default function Page({ params }: { params: { slug: string[] } }) {
  useEffect(() => {
    if (params.slug.length == 1) {
    }
  }, []);
  return <p className="p-5">{JSON.stringify(params)}</p>;
}
