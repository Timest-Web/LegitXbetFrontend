import { useMemo } from "react";
import mData from "../../../../../constant/MOCK_DATA (4).json";
import DepositContainer from "../DepositModal/DepositContainer";
import DepositColumn from "../DepositColumn";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import Modal from "@/src/client/shared/Modal";
import BalanceCard from "../../../../shared/BalanceCard";
import TableComp from "../../../../shared/ActiveTableComp";

const DepositActiveContentInner = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => mData, []);

  const columns: any = DepositColumn();

  return (
    <div>
      <BalanceCard
        buttonState={true}
        buttonText="Deposit"
        balanceButtonAction={handleClick}
      />
      <TableComp
        tableTitle="Transactions history"
        searchField={true}
        filterField={true}
        data={data}
        columns={columns}
      />
      <Modal
        openModal={isOpen}
        setOpenModal={setIsOpen}
        className="custom-modal-class"
        modalContent={<DepositContainer />}
      />
    </div>
  );
};

export default DepositActiveContentInner;
