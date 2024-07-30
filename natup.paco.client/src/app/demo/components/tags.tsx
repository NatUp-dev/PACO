import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Label } from "@/components/ui/label";

export default function Cards() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tags d&apos;états</CardTitle>
        <CardDescription>All tags avalaible</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>États des virements</Label>

              <Badge icon="X" className="bg-red-100 text-red-600">
                Refusé
              </Badge>
              <Badge icon="Clock3" className="bg-blue-50 text-blue-600">
                En cours
              </Badge>
              <Badge icon="Clock3" className="bg-blue-50 text-blue-600">
                À venir
              </Badge>
              <Badge
                icon="CircleCheckBig"
                className="bg-success-50 text-success-600"
              >
                Effectué
              </Badge>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>États des commandes</Label>

              <Badge icon="Clock3" className="bg-blue-50 text-blue-600">
                En cours
              </Badge>
              <Badge icon="Clock3" className="bg-warning-100 text-warning-600">
                Partiellement livrée
              </Badge>
              <Badge
                icon="CircleCheckBig"
                className="bg-success-50 text-success-600"
              >
                Livrée
              </Badge>
              <Badge icon="Undo2" className="bg-gray-200 text-gray-600">
                Annulée
              </Badge>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>États des livraisons</Label>

              <Badge icon="Check" className="bg-success-50 text-success-600">
                Enlèvement passé
              </Badge>
              <Badge icon="Clock3" className="bg-blue-50 text-blue-600">
                Enlèvement à venir
              </Badge>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>Collecte grains</Label>

              <Badge variant="wheat" icon="Wheat">
                Blé
              </Badge>

              <Badge variant="wheat" icon="Wheat">
                Blé planifiable
              </Badge>

              <Badge variant="wheat" icon="Wheat">
                Orge
              </Badge>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>Collecte bovins</Label>

              <Badge variant="cow" icon="Cow">
                Boucherie
              </Badge>
              <Badge variant="wheat" icon="Cow">
                Elevage
              </Badge>
              <Badge variant="sheep" icon="Sheep">
                Ovin
              </Badge>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>Collecte légumes</Label>

              <Badge variant="potato" icon="Potato">
                Pomme de terre
              </Badge>
              <Badge variant="carrot" icon="Carrot">
                Carotte
              </Badge>
              <Badge variant="beet" icon="Beet">
                Betterave
              </Badge>
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <Label size={"large"}>Commandes / appro </Label>

              <Badge icon="Engrais" className="bg-gray-200 text-gray-600">
                Engrais
              </Badge>

              <Badge icon="Engrais" className="bg-gray-200 text-gray-600">
                Engrais en réservation
              </Badge>

              <Badge icon="Granules" variant="cow">
                Production animale
              </Badge>

              <Badge icon="Ficelle" variant="wheat">
                Equipement
              </Badge>

              <Badge icon="Toolsgarden" className="bg-green-50 text-green-600">
                Loisirs verts
              </Badge>

              <Badge icon="Wallet" className="bg-blue-50 text-blue-600">
                Protection des plantes
              </Badge>

              <Badge icon="Plant" className="bg-green-50 text-green-700">
                Semences et plants
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
