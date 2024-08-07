"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomToggle from "@/components/ui/customToggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";

export default function Toggles() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleSelectYear = (item: string | null) => {
    setSelectedYear(item);
  };

  const years = [
    { value: "2023", label: "Année 2023" },
    { value: "2024", label: "Année 2024" },
    { value: "2025", label: "Année 2025" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Toggles</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="shadow-sm">
          <CustomToggle onSelectItem={handleSelectYear} items={years} />
        </ScrollArea>
        <div className="p-8">
          Valeur sélectionnée : {selectedYear ? selectedYear : "Aucune"}
        </div>
      </CardContent>
    </Card>
  );
}
