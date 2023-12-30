import TableComp from "../../shared/TableComp";
import LayoutDashboard from "../../shared/LayoutDashboard";
import BalanceCard from "../../shared/BalanceCard";
import { useMemo, useState } from "react";
import mData from "../../constant/MOCK_DATA (4).json";
import WithdrawPop from "./WithdrawPop";
import DesktopModal from "@/src/client/shared/Modal/DesktopModal";

const WithdrawalActive = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const data = useMemo(() => mData, []);

  const columns: any = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Reference Id",
      accessorKey: "reference_id",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Channel",
      accessorKey: "channel",
    },
  ];

  return (
    <LayoutDashboard
      content={
        <div>
          <BalanceCard
            buttonState={true}
            buttonText="Withdraw"
            balanceButtonAction={handleOpenModal}
          />
          <TableComp
            tableTitle="Transactions  history"
            searchField={true}
            filterField={true}
            data={data}
            columns={columns}
          />
          <DesktopModal
            openModal={isModalOpen}
            setOpenModal={setIsModalOpen}
            className="custom-modal-class"
            modalContent={<WithdrawPop />}
          />
        </div>
      }
    />
  );
};

export default WithdrawalActive;
