// // "use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronUp, ChevronDown, ChevronsUpDown } from "lucide-react";
import {
  ColumnDef,
  SortingState,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getExpandedRowModel,
  Column,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./pagination";

export type CustomData = {
  subTable?: React.JSX.Element;
};

interface DataTableProps<CustomData, TValue> {
  columns: ColumnDef<CustomData, TValue>[] | [];
  data: CustomData[];
  stickyClassName?: string;
  pagination: boolean;
  isSubTable?: boolean;
}

interface DataTableColumnHeaderProps<CustomData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<CustomData, TValue>;
  title: string;
}

export function DataTableColumnHeader<CustomData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<CustomData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  var sort = column.getIsSorted();

  return (
    <div className={cn(className)}>
      <a
        className="flex items-center hover:text-gray-800 hover:cursor-pointer"
        onClick={() => column.toggleSorting(sort === "asc")}
      >
        {title}
        {sort === "asc" ? (
          <ChevronUp className="ml-2 h-4 w-4" />
        ) : sort === "desc" ? (
          <ChevronDown className="ml-2 h-4 w-4" />
        ) : (
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        )}
      </a>
    </div>
  );
}

export function DataTable<CustomData, TValue>({
  columns,
  data,
  stickyClassName,
  pagination,
  isSubTable,
}: DataTableProps<CustomData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [expanded, setExpanded] = React.useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns: [...columns],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getSortedRowModel: getSortedRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      expanded,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
  });
  return (
    <div>
      <div
        className={cn(
          "rounded-md ",
          isSubTable ? "bg-gray-50" : "bg-white border"
        )}
      >
        <Table className="">
          <TableHeader className=" text-gray-600 text-xs">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className={cn(
                        isSubTable ? "bg-gray-50 h-min pt-4" : "bg-gray-200",
                        stickyClassName ? `sticky ${stickyClassName} z-50` : ""
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
                {!isSubTable && (
                  <TableHead
                    className={cn(
                      "bg-gray-200",
                      stickyClassName ? `sticky ${stickyClassName} z-50` : ""
                    )}
                  ></TableHead>
                )}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <>
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    onClick={() => {
                      row.toggleExpanded();
                    }}
                    className="hover:bg-muted/50"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className={cn(isSubTable && index == 0 ? "pt-0 " : "")}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                    {/* {row.getCanExpand() && ( */}
                    {!isSubTable && (
                      <TableCell>
                        {
                          <span>
                            {row.getIsExpanded() ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </span>
                        }
                      </TableCell>
                    )}
                  </TableRow>

                  {row.getIsExpanded() && (
                    <TableRow>
                      <TableCell colSpan={columns.length + 1} className="p-0">
                        {row.original.subTable}
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {pagination && <DataTablePagination table={table} />}
      </div>
    </div>
  );
}
