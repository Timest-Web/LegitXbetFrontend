import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import betData from "../../../constant/BetUpdateData.json";
import AdminTable from "../../shared/AdminTable";
const WonBets = () => {
  const data: any = betData;
  const columns: any = [
    {
      header: "Bet Number",
      accessorKey: "bet_number",
    },
    {
      header: "Customer ID",
      accessorKey: "customer_id",
    },
    {
      header: "Bet Type",
      accessorKey: "bet_type",
    },
    {
      header: "Stake",
      accessorKey: "stake_amount",
    },
    {
      header: "Return",
      accessorKey: "return",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Won Bets" searchField={true}/>
    </AdminDashboardLayout>
  );
};

export default WonBets;
