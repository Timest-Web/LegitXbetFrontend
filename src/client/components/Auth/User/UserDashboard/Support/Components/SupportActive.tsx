import SupportComp from "./SupportComp";
import LayoutDashboard from "../../Constants/LayoutDashboard";
import TableComp from "../../Constants/TableComp";
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
    username: "Jezzki....",
    email: "johndoe@gmail.com",
    ticket_id: "23JJKLOP",
    priority: "High",
    call_number: "0807672367",
    created: "28/09/2023",
    status: "open",
    actions: ""
  },

];

const SupportActive = () => {
  const data = useMemo(() => mData, []);

  const columns: any = [
    {
      header: "Username",
      accessorKey: "username",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Ticket ID",
      accessorKey: "ticket_id",
    },
    {
      header: "Priority",
      accessorKey: "priority",
    },
    {
      header: "Call Number",
      accessorKey: "call_number",
    },
    {
      header: "Created",
      accessorKey: "created",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Actions",
      accessorKey: "actions",
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
        <SupportComp isOpenTicket
          supportContent={
            <div className="mt-3 relative ">
              <table className="w-full ">
                <tbody>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th className="  " key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </tbody>

                <tbody className="mt-4">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td className=" text-center h-11" key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* <div className="flex space-x-2 justify-end items-end pr-12 absolute top-96 right-1">
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
              </div> */}
            </div>
          }
        />
      }
    />
  );
};

export default SupportActive;
