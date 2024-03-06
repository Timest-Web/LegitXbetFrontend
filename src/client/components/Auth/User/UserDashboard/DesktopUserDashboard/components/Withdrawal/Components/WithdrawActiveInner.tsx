import { useState, useMemo } from "react";
import mData from "../../../../constant/MOCK_DATA (4).json";
import WithdrawPop from "./WithdrawPop";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import WithdrawalActiveColumn from "./WithdrawalActiveColumn";
import BalanceCard from "../../../shared/BalanceCard";
import TableComp from "../../../shared/ActiveTableComp";
import Modal from "@/src/client/shared/Modal";
import ArrowRight from "@/src/client/shared/Svg/ArrowRight";
import ArrowLeft from "@/src/client/shared/Svg/ArrowLeft";

const ITEMS_PER_PAGE = 5; 

const WithdrawalActiveInner = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const data = useMemo(() => mData, []);
  const columns: any = WithdrawalActiveColumn();

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
       <h2 className="font-bold text-lg m-auto">No Withdrawal Yet</h2>
      <div className="hidden ">
       
        <TableComp
          tableTitle="Withdrawal History"
          searchField={true}
          filterField={true}
          data={data}
          columns={columns}
        />
      </div>
      <div className="hidden">
        {currentItems.map((withdrawal, index) => (
          <div className="bg-white rounded-lg space-y-3 p-3 mb-3" key={index}>
            <p className="flex justify-between font-bold">
              Amount <span>{withdrawal.amount}</span>
            </p>
            <p className="flex justify-between font-bold">
              Channel<span>{withdrawal.channel}</span>
            </p>
            <p className="flex justify-between font-bold">
              Date<span>{withdrawal.date}</span>
            </p>
            <p className="flex justify-between font-bold">
              Status<span>{withdrawal.status}</span>
            </p>
            <p className="flex justify-between font-bold">
              Transaction ID<span>{withdrawal.reference_id}</span>
            </p>
          </div>
        ))}
        {/* Pagination */}
        <div className="flex space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeft />
          </button>
          <p>
            {currentPage} / {totalPages}
          </p>
          <button
            className=""
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalActiveInner;
