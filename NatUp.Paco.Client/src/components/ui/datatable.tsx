// // "use client";
import * as React from "react";
import { cn } from "@/lib/utils";
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
import Icon from "./icon";
import { Skeleton } from "./skeleton";

export type CustomData = {
  subTable?: React.JSX.Element;
};

interface DataTableProps<CustomData, TValue> {
  columns: ColumnDef<CustomData, TValue>[] | [];
  data: CustomData[];
  stickyClassName?: string;
  pagination: boolean;
  isSubTable?: boolean;
  loading?: boolean;
}

interface DataTableColumnHeaderProps<CustomData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<CustomData, TValue>;
  title: string;
  align?: "left" | "center" | "right";
}

export function DataTableColumnHeader<CustomData, TValue>({
  column,
  title,
  className,
  align,
}: DataTableColumnHeaderProps<CustomData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  var sort = column.getIsSorted();

  const alignHeader = function (
    align: "left" | "center" | "right" | undefined
  ) {
    switch (align) {
      case "left":
        return "justify-start";
      case "center":
        return "justify-center";
      case "right":
        return "justify-end";
      default:
        return "justify-normal";
    }
  };
  return (
    <div className={cn(className)}>
      <a
        className={cn(
          alignHeader(align),
          "flex items-center hover:text-gray-800 hover:cursor-pointer"
        )}
        onClick={() => column.toggleSorting(sort === "asc")}
      >
        {title}
        {sort === "asc" ? (
          <Icon
            size={"small"}
            className="ml-2 just"
            iconName="ChevronUp"
          ></Icon>
        ) : sort === "desc" ? (
          <Icon size={"small"} className="ml-2" iconName="ChevronDown"></Icon>
        ) : (
          <Icon
            size={"small"}
            className="ml-2"
            iconName="ChevronsUpDown"
          ></Icon>
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
  loading,
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
      {loading ? (
        <div>
          <Skeleton className="w-full h-12 rounded-none" />
          {[...Array(6)].map((x, i) => (
            <div
              key={i + "_0"}
              className="grid grid-cols-4 lg:grid-cols-8 gap-8 py-6 border-b"
            >
              <Skeleton className={cn("h-4 w-full ")} />
              <Skeleton className={cn("h-4 w-full ")} />
              <Skeleton className={cn("h-4 w-full ")} />
              <Skeleton className={cn("h-4 w-full ")} />
              <Skeleton className={cn("h-4 w-full hidden lg:block")} />
              <Skeleton className={cn("h-4 w-full hidden lg:block")} />
              <Skeleton className={cn("h-4 w-full hidden lg:block")} />
              <Skeleton className={cn("h-4 w-full hidden lg:block")} />
            </div>
          ))}
        </div>
      ) : (
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
                          stickyClassName
                            ? `sticky ${stickyClassName} z-50`
                            : ""
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
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row, index) => (
                  <>
                    <TableRow
                      key={row.id + index + "_1"}
                      data-state={row.getIsSelected() && "selected"}
                      onClick={() => {
                        row.toggleExpanded();
                      }}
                      className={cn(
                        isSubTable ? "" : "hover:bg-muted/50 cursor-pointer"
                      )}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell
                          key={cell.id + "_" + index}
                          className={cn(
                            isSubTable && index === 0 ? "pt-0 " : ""
                          )}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>

                    {row.getIsExpanded() && (
                      <TableCell colSpan={columns.length + 1} className="p-0">
                        {row.getValue("subTable")}
                      </TableCell>
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
      )}
    </div>
  );
}
