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
import Modal from "@/src/client/shared/Modal";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
interface TableProps {
  tableTitle: string;
  searchField?: boolean;
  filterField?: boolean;
  addField?: boolean;
  modalComp?: React.JSX.Element;
  data: any[];
  columns: any[];
  betStatus?: React.JSX.Element;
}

const AdminTable: React.FC<TableProps> = ({
  tableTitle,
  searchField,
  modalComp,
  filterField,
  addField,
  data,
  columns,
  betStatus,
}) => {
  const [filtering, setFiltering] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    state: {
      globalFilter: filtering,
      pagination,
    },
    onGlobalFilterChange: setFiltering,
  });
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();

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
                className=" bg-searchIcon bg-no-repeat bg-[center_left_1rem] focus:outline-[0.1rem] md:w-[14.0625rem] h-[2.5625rem] pl-12 bg-[#ECEEF1]"
                type="text"
                value={filtering}
                placeholder="Search"
                onChange={(e) => setFiltering(e.target.value)}
              />
            </div>
          )}
          {addField && (
            <p
              onClick={handleClick}
              className="border border-solid border-black w-28 p-2 rounded-md hover:bg-black hover:text-white hover:cursor-pointer"
            >
              + Add New
            </p>
          )}
        </section>
      </div>

      <div className=" box-border bg-white mx-auto w-[98%] rounded-md  md:p-4 mt-4 relative">
        <div>
          <table className="w-full">
            <tbody>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <td
                      className="py-3 pl-16 font-bold text-sm"
                      key={header.id}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tbody className="">
              {table.getRowModel().rows.map((row) => (
                <tr
                  className="border border-t-1 font-semibold border-x-0 border-b-2 border-solid"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className="pl-16  h-11 text-xs opacity-80"
                      key={cell.id}
                    >
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
        <div className="flex justify-end items-end w-full space-x-2 pr-12 mt-4 ">
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
      {modalComp && (
        <Modal
          modalContent={modalComp}
          openModal={isOpen}
          setOpenModal={setIsOpen}
        />
      )}
    </div>
  );
};

export default AdminTable;
