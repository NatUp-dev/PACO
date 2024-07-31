"use client";
import CollecteHeader from "@/app/activites/suivi-de-collectes/components/collecte-header";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CollecteHeader type="grains" />
      {children}
    </div>
  );
}
