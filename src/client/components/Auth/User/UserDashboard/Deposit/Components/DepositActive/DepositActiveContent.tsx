import TableComp from "../../../shared/TableComp";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import BalanceCard from "../../../shared/BalanceCard";
import { useMemo, useState } from "react";
import mData from "../../../constant/MOCK_DATA (4).json";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import DepositContainer from "../DepositModal/DepositContainer";
import DepositColumn from "../../Constants/DepositColumn";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";

const DepositActiveContent = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => mData, []);

  const columns: any = DepositColumn();

  return (
    <LayoutDashboard
      content={
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
          <DesktopModal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<DepositContainer />}
          />
        </div>
      }
    />
  );
};

export default DepositActiveContent;
