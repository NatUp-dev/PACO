"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, DataTableColumnHeader } from "@/components/ui/datatable";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

export const columns: ColumnDef<TableData>[] = [
  {
    accessorKey: "categorie",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Catégorie" />
    ),
    cell: ({ row }) => {
      const val = row.getValue("categorie");

      return (
        <Badge variant="cow" icon="Cow">
          Boucherie
        </Badge>
      );
    },
  },
  {
    accessorKey: "dateApport",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date d'apport" />
    ),
  },
  {
    accessorKey: "numBon",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="N° de bon" align="right" />
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("numBon")}</div>
    ),
  },
  {
    accessorKey: "ticket",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Ticket de pesée"
        align="right"
      />
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("ticket")}</div>
    ),
  },
  {
    accessorKey: "famille",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Famille" />
    ),
  },
  {
    accessorKey: "poidsBrut",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Poids brut (T)"
        align="right"
      />
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("poidsBrut")}</div>
    ),
  },
  {
    accessorKey: "poidsNormes",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Poids aux normes (T)"
        align="right"
      />
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("poidsNormes")}</div>
    ),
  },
  {
    accessorKey: "montant",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Montant net (HT)"
        align="right"
      />
    ),
    cell: ({ row }) => (
      <div className="text-right">{row.getValue("montant")}</div>
    ),
  },
  {
    accessorKey: "subTable",
    header: "",
    cell: ({ row }) => {
      return (
        <span>{row.getIsExpanded() ? <ChevronUp /> : <ChevronDown />}</span>
      );
    },
  },
];

// Define columns for the DataTable
const subColumns: ColumnDef<Details>[] = [
  {
    header: "Date Commande",
    accessorKey: "dateCommande",
  },
  {
    header: "Num Commande",
    accessorKey: "numCommande",
  },
  {
    header: "Prix Unitaire",
    accessorKey: "prixUnitaire",
  },
  {
    header: "Etat",
    accessorKey: "etat",
  },
];

export type Details = {
  dateCommande: string;
  numCommande: string;
  prixUnitaire: string;
  etat: "pending" | "delivered" | "partial" | "canceled";
};

export type Payment = {
  categorie: string;
  dateApport: string;
  numBon: number;
  ticket: string;
  famille: string;
  poidsBrut: string;
  poidsNormes: string;
  montant: string;
  details: Details[];
};

interface TableData extends Payment {
  subTable: React.JSX.Element;
}

export default function Datatables() {
  //   const [data, setData] = useState<Payment[]>([]);
  const [tableData, setTableData] = useState<TableData[]>([]);
  const [tableLoading, setTableLoading] = useState<boolean>(true);

  useEffect(() => {
    const fakeData: Payment[] = [];

    for (let index = 0; index < 45; index++) {
      fakeData.push({
        categorie: "animal",
        dateApport: "Mar. 16 sept. 23",
        numBon: 24579 + index,
        ticket: "100000" + index.toString(),
        famille: "Blé",
        poidsBrut: (Math.random() * 17).toLocaleString(),
        poidsNormes: (Math.random() * 17).toLocaleString(),
        montant: (Math.random() * 500).toLocaleString(),
        details: [
          {
            dateCommande: "12 juin 2024",
            numCommande: "CC260697" + index.toString(),
            prixUnitaire: "122,39 €",
            etat: "delivered",
          },
          {
            dateCommande: "12 juin 2024",
            numCommande: "CC260698" + index.toString(),
            prixUnitaire: "122,39 €",
            etat: "pending",
          },
          {
            dateCommande: "12 juin 2024",
            numCommande: "CC260699" + index.toString(),
            prixUnitaire: "122,39 €",
            etat: "canceled",
          },
        ],
      });

      setTimeout(function () {
        setTableLoading(false);
      }, 1000);
    }

    // Mapping Payment data to TableData
    const tableDataWithSubTable = fakeData.map((payment) => ({
      ...payment,
      subTable: (
        <DataTable
          isSubTable
          data={payment.details}
          columns={subColumns}
          pagination={false}
        />
      ),
    }));

    setTableData(tableDataWithSubTable);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Table</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={tableData}
          stickyClassName="top-[6px]"
          pagination
          loading={tableLoading}
        />
      </CardContent>
    </Card>
  );
}
