import SupportComp from "./SupportComp";
import LayoutDashboard from "../../shared/LayoutDashboard";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import SupportTicketData from "../Constants/SupportTicketData";



const SupportActive = () => {
  const data = useMemo(() => SupportTicketData, []);

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

            </div>
          }
        />
      }
    />
  );
};

export default SupportActive;
