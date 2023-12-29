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
import SearchIcon from "@/src/client/shared/Svg/SearchIcon";
import FilterSearch from "@/src/client/shared/Svg/FilterSearch";
import ArrowDownIcon from "@/src/client/shared/Svg/ArrowDownIcon";


interface TableProps {
  tableTitle: string;
  searchField: boolean;
  filterField: boolean;
  data: any[];
  columns: any[];

}

const TableComp: React.FC<TableProps> = ({
  tableTitle,
  searchField,
  filterField,
  data,
  columns,
}) => {
  const [filtering, setFiltering] = useState("");

  const days = [
    { day: "All" },
    { day: "Today" },
    { day: "Yesterday" },
    { day: "Past 5 days" },
    { day: "Past 10 days" },
  ];

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

  return (
    <div className="mt-6">
      <div className="flex justify-between px-8">
        <div className=" font-bold mt-2">{tableTitle}</div>
        <section className="flex space-x-2">
          {searchField && (
            <div className="relative">
              <input
                className="border-[#292D32] border w-[14.0625rem] h-[2.5625rem] rounded-[35px] p-3 mt-1 bg-[#ECEEF1]"
                type="text"
                value={filtering}
                placeholder="Search"
                onChange={(e) => setFiltering(e.target.value)}
              />
              <div className="absolute top-3 left-4 flex space-x-2">
                <SearchIcon />
              </div>
            </div>
          )}
          {filterField && (
            <div className="relative">
              <input className=" border-[#292D32] border w-[8.4375rem] h-[2.1875rem] bg-[#ECEEF1] p-2 mt-[0.3rem]" />
              <div className="absolute top-2 right-5 flex space-x-2">
                <h2>Filter By</h2>
                <ArrowDownIcon />
              </div>
            </div>
          )}
        </section>
      </div>

      <div className="bg-white w-[61.25rem] h-[34rem] rounded-[20px] p-8 mt-4 relative">
        <table className="w-full  ">
          <tbody>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className=" border-b-2 border-red-50 border-solid "
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
        <div className="flex absolute bottom-5 left-5 justify-between w-full px-2 ">
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
