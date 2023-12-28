import TableComp from "../../../Extras/TableComp";
import LayoutDashboard from "../../../Extras/LayoutDashboard";
import BalanceCard from "../../../Extras/BalanceCard";
import { useMemo } from "react";
import mData from "../../../Extras/MOCK_DATA (4).json";


const DepositActiveContent = () => {
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
          <BalanceCard buttonState={true} buttonText="Deposit" />
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

export default DepositActiveContent;
