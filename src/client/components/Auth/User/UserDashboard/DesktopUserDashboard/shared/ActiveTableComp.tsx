import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  Row,
} from "@tanstack/react-table";
import { useState } from "react";
import ArrowLeft from "@/src/client/shared/Svg/ArrowLeft";
import ArrowRight from "@/src/client/shared/Svg/ArrowRight";
import { Dropdown, MenuItem } from "@heathmont/moon-core-tw";
import { Carousel } from "@heathmont/moon-core-tw";
import { CustomCarousel } from "@/src/client/shared/Carousel";
import FilterComponent from "./FilterComponent";

interface TableProps {
  tableTitle: string;
  searchField: boolean;
  filterField: boolean;
  data: any[];
  columns: any[];
  betStatus?: React.JSX.Element;
}

const TableComp: React.FC<TableProps> = ({
  tableTitle,
  searchField,
  filterField,
  data,
  columns,
  betStatus,
}) => {
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  const renderCarouselItems = () => {
    return (
      <Carousel.Item className="md:hidden">
        <table className="w-[50rem] ">
          <tbody>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className=" border-b-2 border-50 border-solid text-center"
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
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className=" text-center h-9" key={cell.id}>
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
    <div className="md:mt-6 w-full pb-20 md:pb-0 ">
      <div className="flex flex-col md:flex-row md:justify-between md:px-8">
        <section>
          <div className="hidden md:block font-bold mt-2">{tableTitle}</div>
         <div className="mt-6" >{betStatus}</div> 
        </section>
        <section className="flex justify-evenly">
          {searchField && (
            <div className="relative">
              <input
                className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem] rounded-[35px] pl-12 bg-[#ECEEF1]"
                type="text"
                value={filtering}
                placeholder="Search"
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>
          )}
          {filterField && <FilterComponent />}
        </section>
      </div>

      <div className="bg-white box-border w-full md:h-[34rem] h-[28rem] rounded-[20px] text-sm md:text-base p-4 md:p-8 mt-4 relative">
        <CustomCarousel renderCarouselItems={renderCarouselItems} />
        <div className="hidden md:flex">
          <table className="w-full">
            <tbody>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className="border-b-2 border-50 border-solid "
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
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td className=" text-center h-9 md:h-11" key={cell.id}>
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

        <div className="flex w-[95%] absolute bottom-5 left-5 justify-between  ">
          <section>{`${
            table.getRowModel().rows.length
          } of ${table.getPageCount()} `}</section>
          <div className="flex space-x-2 pr-12 ">
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
      </div>
    </div>
  );
};

export default TableComp;
