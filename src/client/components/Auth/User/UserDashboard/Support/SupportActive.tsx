import SupportComp from "./SupportComp";
import LayoutDashboard from "../../Reusables/LayoutDashboard";
import TableComp from "../../Reusables/TableComp";
import { useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getFilteredRowModel,
  } from "@tanstack/react-table";
  import { useState } from "react";
  import ArrowLeft from "@/src/client/shared/Svg/ArrowLeft";
  import ArrowRight from "@/src/client/shared/Svg/ArrowRight";

  

const mData = [
  {
    no: 1,
    reference_id: "337914456",
    date: "11/27/2023",
    status: "success",
    preview: "preview",
  },
  {
    no: 2,
    reference_id: "46787856",
    date: "04/16/2023",
    status: "success",
    preview: "preview",
  },
];

const SupportActive = () => {
  const data = useMemo(() => mData, []);

  const columns: any = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Doc.",
      accessorKey: "reference_id",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Preview",
      accessorKey: "preview",
    },
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <LayoutDashboard
      content={
        <SupportComp
          supportContent={
            <div className="mt-3">
            <table className="w-full  ">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="  "
                      key={header.id}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
              <tbody className="mt-4">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td className=" text-center h-11" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex space-x-2 justify-end items-end pr-12 absolute bottom-5 right-5">
              <button
                disabled={!table.getCanPreviousPage()}
                onClick={() => table.previousPage()}
              >
                <ArrowLeft />
              </button>
              <button
                disabled={!table.getCanNextPage()}
                onClick={() => table.nextPage()}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
          }
        />
      }
    />
  );
};

export default SupportActive;
