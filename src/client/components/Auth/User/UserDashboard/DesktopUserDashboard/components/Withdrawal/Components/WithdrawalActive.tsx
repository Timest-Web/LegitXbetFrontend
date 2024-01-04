
import { useMemo } from "react";
import mData from "../../../constant/MOCK_DATA (4).json";
import WithdrawPop from "./WithdrawPop";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";
import WithdrawalActiveColumn from "../Constants/WithdrawalActiveColumn";
import LayoutDashboard from "../../../shared/LayoutDashboard";
import BalanceCard from "../../../shared/BalanceCard";
import TableComp from "../../../shared/ActiveTableComp";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal/DesktopModal";

const WithdrawalActive = () => {
  const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
  const data = useMemo(() => mData, []);
  const columns: any = WithdrawalActiveColumn()

  return (
    <LayoutDashboard
      content={
        <div>
          <BalanceCard
            buttonState={true}
            buttonText="Withdraw"
            balanceButtonAction={handleClick}
          />
          <TableComp
            tableTitle="Transactions  history"
            searchField={true}
            filterField={true}
            data={data}
            columns={columns}
          />
          <DesktopModal
            openModal={isOpen}
            setOpenModal={setIsOpen}
            className="custom-modal-class"
            modalContent={<WithdrawPop />}
          />
        </div>
      }
    />
  );
};

export default WithdrawalActive;
