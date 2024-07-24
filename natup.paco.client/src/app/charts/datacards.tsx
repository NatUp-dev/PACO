import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import DataCard from "@/components/ui/datacard";
export default function DataCards() {
  return (
    <Card className="bg-neutral-100">
      <CardHeader>
        <CardTitle>Data Cards</CardTitle>
        <CardDescription>Data Cards</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
          <DataCard title="Loading" data={0} icon="Wheat" loading />
        </div>
      </CardContent>
    </Card>
  );
}
