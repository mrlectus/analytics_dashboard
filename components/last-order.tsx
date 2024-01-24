"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { format } from "date-fns";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Orders, TOrders } from "@/data/data";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/utils/utils";
import Link from "next/link";
import clsx from "clsx";
import { SVGIcon7 } from "./icons/icons";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="w-full">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
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
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export const columns: ColumnDef<TOrders>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-1 items-center">
          <Avatar className="w-5 h-5">
            <AvatarImage src={row.original.photo} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{row.original.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <span className="text-black/70">
          {format(row.original.date!, "MMMM dd, yyyy")}
        </span>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      return (
        <span className="text-black font-semibold">
          {formatCurrency(row.original.amount).toString().replace(".0", "")}
        </span>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span
          className={clsx({
            "text-[#ED544E]": row.original.status === "refund",
            "text-[#34CAA5]": row.original.status === "paid",
          })}
        >
          {row.original.status}
        </span>
      );
    },
  },
  {
    id: "action",
    header: "Action",
    cell: () => {
      return (
        <span className="flex gap-2 items-center">
          <SVGIcon7 /> View
        </span>
      );
    },
  },
];

export const LastOrder = () => {
  return (
    <Card className="pt-4 h-fit">
      <CardTitle className="text-md px-6 flex justify-between">
        <span>Last Orders</span>
        <Link href="#" className="text-[#34CAA5]">
          See All
        </Link>
      </CardTitle>
      <CardContent className="w-full">
        <DataTable columns={columns} data={Orders} />
      </CardContent>
    </Card>
  );
};
