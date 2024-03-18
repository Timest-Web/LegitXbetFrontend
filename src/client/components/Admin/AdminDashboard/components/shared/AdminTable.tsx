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
  interface TableProps {
    tableTitle: string;
    searchField?: boolean;
    filterField?: boolean;
    data: any[];
    columns: any[];
    betStatus?: React.JSX.Element;
  }
  
  const AdminTable: React.FC<TableProps> = ({
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
  
    return (
      <div className="md:mt-6 w-full md:pb-12 ">
        <div className="flex flex-col md:flex-row md:justify-between md:px-8">
          <section>
            <div className="hidden md:block font-bold mt-2">{tableTitle}</div>
          </section>
          <section className="flex space-x-3">
            {searchField && (
              <div className="relative">
                <input
                  className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] border-[#292D32] border w-[12rem] md:w-[14.0625rem] h-[2.5625rem] pl-12 bg-[#ECEEF1]"
                  type="text"
                  value={filtering}
                  placeholder="Search"
                  onChange={(e) => setFiltering(e.target.value)}
                />
              </div>
            )}
          </section>
        </div>
  
        <div className=" box-border bg-white mx-auto w-[98%] md:h-[34rem] h-[28rem] text-sm md:p-0 mt-4 relative">
          <div className=" ">
            <table className="w-full p-3">
              <tbody className="p-4">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        className="border-b-2 border-50 border-solid bg-black text-white p-2 "
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
                  <tr className="bg-white" key={row.id}>
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
  
  export default AdminTable;
  