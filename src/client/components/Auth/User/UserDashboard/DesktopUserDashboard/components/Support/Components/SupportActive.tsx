import SupportComp from "./SupportComp";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import SupportTicketData from "../Constants/SupportTicketData";
import SupportActiveColumn from "./SupportActiveColumn";
import LayoutDashboard from "../../../shared/LayoutDashboard";



const SupportActive = () => {
  const data = useMemo(() => SupportTicketData, []);

  const columns: any = SupportActiveColumn()
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
