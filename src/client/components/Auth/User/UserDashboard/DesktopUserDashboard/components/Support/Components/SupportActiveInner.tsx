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
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";

const SupportActiveInner = () => {
  const data = useMemo(() => SupportTicketData, []);

  const columns: any = SupportActiveColumn();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderCarouselItems = () => {
    return (
      <Carousel.Item className="md:hidden">
        <table className="w-[60rem] ">
          <tbody>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th className=" text-center " key={header.id}>
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Carousel.Item>
    );
  };
  return (
    <SupportComp
      isOpenTicket
      supportContent={
        <div className="mt-3 relative ">
        <CustomCarousel renderCarouselItems={renderCarouselItems}/>
         <div className="hidden md:flex"><table className="w-full">
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
          </table></div> 
        </div>
      }
    />
  );
};

export default SupportActiveInner;
