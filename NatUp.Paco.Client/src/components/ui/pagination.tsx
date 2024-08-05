import {
  ChevronRight,
  ChevronLeft,
  ChevronsRight,
  ChevronsLeft,
  MoreHorizontal,
} from "lucide-react";

import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageSize = table.getState().pagination.pageSize;
  const rowCount = table.getRowCount();

  return (
    <div className="flex items-center justify-between p-2 ">
      <div className="flex text-sm text-muted-foreground gap-4">
        <Button
          className=""
          variant={"outline"}
          size={"sm"}
          disabled={rowCount <= pageSize}
          onClick={() => {
            table.setPageSize(
              Number(table.getState().pagination.pageSize + 20)
            );
          }}
        >
          Charger plus
        </Button>

        <div className="self-center">
          Affichage de {pageSize < rowCount ? pageSize : rowCount} sur{" "}
          {rowCount} résultat(s)
        </div>
      </div>
    </div>
  );
}
