import TableComp from "../../shared/ActiveTableComp";
import LayoutDashboard from "../../shared/LayoutDashboard";
import BalanceCard from "../../shared/BalanceCard";
import { useMemo } from "react";
import mData from "../../constant/MOCK_DATA (4).json";
import WithdrawPop from "./WithdrawPop";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";
import { useVisibilityControl } from "@/src/client/shared/Hooks/useVisibilityControl";

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
