import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  Row
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
                className="border-[#292D32] border w-[225px] h-[41px] rounded-[35px] p-3 mt-1 bg-[#ECEEF1]"
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
              <div className="absolute top-3 left-4 flex space-x-2">
                <SearchIcon />
                <h4 className=" opacity-50 ">Search</h4>
              </div>
            </div>
          )}
          {filterField && (
            <div className="relative mt-[-2px]">
              <input
                className="border-[#292D32] border w-[135px] h-[35px] bg-[#ECEEF1] p-2 mt-2"
                type="text"
                value={filtering}
                onChange={(e) => setFiltering(e.target.value)}
              />
              <div className="absolute top-[0.8rem] right-4 flex space-x-2">
                <FilterSearch />
                <h2>Filter By</h2>
                <ArrowDownIcon />
              </div>
            </div>
          )}
        </section>
      </div>

      <div className="bg-white w-[980px] h-[544px] rounded-[20px] p-8 mt-4 relative">
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
    </div>
  );
};

export default TableComp;
