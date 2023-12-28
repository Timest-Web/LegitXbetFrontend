import TableComp from "../../Constants/TableComp";
import LayoutDashboard from "../../Constants/LayoutDashboard";
import BalanceCard from "../../Constants/BalanceCard";
import { useMemo } from "react";
import mData from "../../Constants/MOCK_DATA (4).json";

const WithdrawalActive = () => {
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
          <BalanceCard buttonState={true} buttonText="Withdraw" />
          <TableComp
            tableTitle="Transactions  history"
            searchField={true}
            filterField={true}
            data={data}
            columns={columns}
          />
        </div>
      }
    />
  );
};

export default WithdrawalActive;
