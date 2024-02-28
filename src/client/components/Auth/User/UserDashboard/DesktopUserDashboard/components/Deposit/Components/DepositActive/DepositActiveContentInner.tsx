import { useMemo } from "react";
import mData from "../../../../../constant/MOCK_DATA (4).json";
import DepositContainer from "../DepositModal/DepositContainer";
import DepositColumn from "../DepositColumn";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";
import BalanceCard from "../../../../shared/BalanceCard";
import TableComp from "../../../../shared/ActiveTableComp";
import TransactionDetailsCard from "../../../../shared/TransactionDetailsCard";

const DepositActiveContentInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => mData, []);

  const columns: any = DepositColumn();

  return (
    <div>
      <div className="hidden md:block">
        <TableComp
          tableTitle="Deposit history"
          searchField={true}
          filterField={true}
          data={data}
          columns={columns}
        />
      </div>
      <div className="md:hidden">
        {data.map((deposit, index) => (
          <TransactionDetailsCard
            key={index}
            amount={deposit.amount}
            date={deposit.date}
            status={deposit.status}
            channel={deposit.channel}
            reference_id={deposit.reference_id}
          />
        ))}
      </div>
    </div>
  );
};

export default DepositActiveContentInner;
