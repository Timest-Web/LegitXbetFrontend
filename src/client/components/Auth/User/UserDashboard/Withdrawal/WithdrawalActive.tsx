import TableComp from "../../Reusables/TableComp";
import LayoutDashboard from "../../Reusables/LayoutDashboard";
import BalanceCard from "../../Reusables/BalanceCard";
import { useMemo } from "react";
import mData from "../../Reusables/MOCK_DATA (4).json";


const WithdrawalActive= () => {
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
            tableTitle="Transactions history"
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
