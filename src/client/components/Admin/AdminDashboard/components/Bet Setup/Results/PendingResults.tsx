import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import resultData from "../../../constant/ResultData.json";
const PendingResults = () => {
  const data: any = resultData;
  const columns: any = [
    {
      header: "Market",
      accessorKey: "market",
    },
    {
      header: "Match",
      accessorKey: "match",
    },
    {
      header: "Bet End",
      accessorKey: "bet_end_time",
    },
    {
      header: "Bet Placed",
      accessorKey: "bet_placed",
    },
    {
      header: "Bet Amount",
      accessorKey: "bet_amount",
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Pending Results" />
    </AdminDashboardLayout>
  );
};

export default PendingResults;
