"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  MoreHorizontal,
} from "lucide-react";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/datatable";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "dateApport",
    header: "Date d'apport",
  },
  {
    accessorKey: "numBon",
    //header: "N° de bon",
    header: ({ column }) => {
      var sort = column.getIsSorted();

      return (
        <a
          className="flex items-center hover:text-gray-800 hover:cursor-pointer"
          onClick={() => column.toggleSorting(sort === "asc")}
        >
          N° de bon{" "}
          {sort === "asc" ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : sort === "desc" ? (
            <ChevronDown className="ml-2 h-4 w-4" />
          ) : (
            <ChevronsUpDown className="ml-2 h-4 w-4" />
          )}
        </a>
      );
    },
  },
  {
    accessorKey: "ticket",
    header: "Ticket de pesée",
  },
  { accessorKey: "famille", header: "Famille" },
  { accessorKey: "typeContrat", header: "Type de contrat" },
  { accessorKey: "poidsBrut", header: "Poids brut (T)" },
  { accessorKey: "poidsNormes", header: "Poids aux normes (T)" },
  { accessorKey: "montant", header: "Montant net (HT)" },
];

export type Payment = {
  dateApport: string;
  numBon: number;
  ticket: string;
  famille: string;
  typeContrat: string;
  poidsBrut: number;
  poidsNormes: number;
  montant: number;
};

const data: Payment[] = [
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24579,
    ticket: "1000000",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24580,
    ticket: "1000001",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24581,
    ticket: "1000002",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24582,
    ticket: "1000003",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24583,
    ticket: "1000004",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24584,
    ticket: "1000005",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24585,
    ticket: "1000006",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24586,
    ticket: "1000007",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24587,
    ticket: "1000008",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24579,
    ticket: "1000000",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24580,
    ticket: "1000001",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24581,
    ticket: "1000002",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24582,
    ticket: "1000003",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24583,
    ticket: "1000004",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24584,
    ticket: "1000005",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24585,
    ticket: "1000006",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24586,
    ticket: "1000007",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24587,
    ticket: "1000008",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24579,
    ticket: "1000000",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24580,
    ticket: "1000001",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24581,
    ticket: "1000002",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24582,
    ticket: "1000003",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24583,
    ticket: "1000004",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24584,
    ticket: "1000005",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24585,
    ticket: "1000006",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24586,
    ticket: "1000007",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24583,
    ticket: "1000004",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24584,
    ticket: "1000005",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24585,
    ticket: "1000006",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24586,
    ticket: "1000007",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24587,
    ticket: "1000008",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24588,
    ticket: "1000009",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24589,
    ticket: "1000010",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24590,
    ticket: "1000011",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24591,
    ticket: "1000012",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24592,
    ticket: "1000013",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24593,
    ticket: "1000014",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24594,
    ticket: "1000015",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24595,
    ticket: "1000016",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24596,
    ticket: "1000017",
    famille: "Blé",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24597,
    ticket: "1000018",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24598,
    ticket: "1000019",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24599,
    ticket: "1000020",
    famille: "Orge",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
  {
    dateApport: "Mr. 16 sept. 23",
    numBon: 24600,
    ticket: "1000021",
    famille: "Colza",
    typeContrat: "PULSEO TERME",
    poidsBrut: 17,
    poidsNormes: 17,
    montant: 500,
  },
];

export default function Datatables() {
  return (
    <Card className="bg-gray-100">
      <CardHeader>
        <CardTitle>Data Table</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
