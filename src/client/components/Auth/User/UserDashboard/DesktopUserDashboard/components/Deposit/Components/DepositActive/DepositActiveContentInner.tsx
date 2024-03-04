import { useMemo } from "react";
import mData from "../../../../../constant/MOCK_DATA (4).json";
import DepositContainer from "../DepositModal/DepositContainer";
import DepositColumn from "../DepositColumn";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";
import BalanceCard from "../../../../shared/BalanceCard";
import TableComp from "../../../../shared/ActiveTableComp";
import TransactionDetailsCard from "../../../../shared/TransactionDetailsCard";
import { useQuery } from "@tanstack/react-query";
import { getDeposit } from "@/src/helper/apis/services/transaction-list/get-deposit.api";

const DepositActiveContentInner = () => {
  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      console.log("Date Parsing Failed:", dateString);
      return dateString;
    }

    const options = { year: "numeric", month: "short", day: "2-digit" };
    const formattedDate = date.toLocaleDateString(
      "en-US",
      options as Intl.DateTimeFormatOptions
    );
    console.log("Formatted Date:", formattedDate);
    return formattedDate;
  };

  const query = useQuery({ queryKey: ["deposit"], queryFn: getDeposit });
  const data = query.data || [];
  const columns: any = DepositColumn();

  const formattedData = data.map((deposit: any, index: number) => ({
    ...deposit,
    serialNumber: index + 1,
    createdAt: formatDate(deposit.createdAt),
    amount: deposit.amount.toLocaleString(),
  }));

  console.log(formattedData);

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
        {formattedData.map((deposit: any, index: any) => (
          <TransactionDetailsCard
            key={index}
            amount={deposit.amount}
            date={deposit.createdAt}
            status={deposit.status}
            channel={deposit.merchant}
            reference_id={deposit.reference}
          />
        ))}
      </div>
    </div>
  );
};

export default DepositActiveContentInner;
