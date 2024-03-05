import DepositColumn from "../DepositColumn";
import TableComp from "../../../../shared/ActiveTableComp";
import TransactionDetailsCard from "../../../../shared/TransactionDetailsCard";
import { usePagination } from "@/src/client/shared/Hooks/usePagination";
import useDepositListQuery from "@/src/client/shared/Hooks/useDepositList";
import useFormatDate from "@/src/client/shared/Hooks/useFormatDate";
import useCapitalizeFirstLetter from "@/src/client/shared/Hooks/useCapitalizeFirstLetters";

const DepositActiveContentInner = () => {
  const capitalizeFirstLetter = useCapitalizeFirstLetter();
  const formatDate = useFormatDate();
  const { data: depositList = [] } = useDepositListQuery();
  const columns: any = DepositColumn();

  const formattedData = depositList.map((deposit: any, index: number) => ({
    ...deposit,
    serialNumber: index + 1,
    merchant: capitalizeFirstLetter(deposit.merchant),
    status: capitalizeFirstLetter(deposit.status),
    createdAt: formatDate(deposit.createdAt),
    amount: deposit.amount.toLocaleString(),
  }));
  const itemsPerPage = 5;
  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(itemsPerPage, formattedData);

  return (
    <div>
      <div className="hidden md:block">
        <TableComp
          tableTitle="Deposit history"
          searchField={true}
          filterField={true}
          data={formattedData}
          columns={columns}
        />
      </div>
      <div className="md:hidden">
        {currentItems.map((deposit: any, index: any) => (
          <TransactionDetailsCard
            key={index}
            amount={deposit.amount}
            date={deposit.createdAt}
            status={deposit.status}
            channel={deposit.merchant}
            reference_id={deposit.reference}
          />
        ))}
        <div className="mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-black hover:opacity-50 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="bg-black hover:opacity-50 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepositActiveContentInner;
