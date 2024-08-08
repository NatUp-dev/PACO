import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Icon from "@/components/ui/icon";
import DataList from "@/components/ui/datalist";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const items = [
  {
    label: "Août 2023",
    value: 93918.96,
    type: "€",
    badge: (
      <Badge icon="Clock3" className="bg-blue-50 text-blue-600">
        À venir
      </Badge>
    ),
  },
  {
    label: "Juillet 2023",
    value: 93918.96,
    type: "€",
    badge: (
      <Badge icon="Check" className="bg-success-50 text-success-600">
        Effectué
      </Badge>
    ),
  },
  {
    label: "Juin 2023",
    value: 93918.96,
    type: "€",
    badge: (
      <Badge icon="Check" className="bg-success-50 text-success-600">
        Effectué
      </Badge>
    ),
  },
  {
    label: "Mai 2023",
    value: 93918.96,
    type: "€",
    badge: (
      <Badge icon="Check" className="bg-success-50 text-success-600">
        Effectué
      </Badge>
    ),
  },
  {
    label: "Avril 2023",
    value: 93918.96,
    type: "€",
    badge: (
      <Badge icon="Check" className="bg-success-50 text-success-600">
        Effectué
      </Badge>
    ),
  },
];

export default function Datalists() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="p-2">
            <Label>Pas de données</Label>

            <DataList
              title="Récapitulatif des paiements (€ TTC)"
              nodatatitle="Pas de paiements pour la récolte sélectionnée"
              nodatasubtitle="Sélectionnez une autre période pour avoir une vue des paiements"
            />
          </div>
          <div className="p-2">
            <Label>Chargement</Label>
            <DataList
              loading
              title="Récapitulatif des paiements (€ TTC)"
              nodatatitle="Pas de paiements pour la récolte sélectionnée"
            />
          </div>
          <div className="p-2">
            <Label>Exemple</Label>
            <DataList
              data={items}
              title="Récapitulatif des paiements (€ TTC)"
              nodatatitle="Pas de paiements pour la récolte sélectionnée"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
