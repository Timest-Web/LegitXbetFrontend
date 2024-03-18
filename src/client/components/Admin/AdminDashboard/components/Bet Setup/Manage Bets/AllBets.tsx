import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import betData from "../../../constant/BetUpdateData.json";
import AdminTable from "../../shared/AdminTable";
const AllBets = () => {
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
      <AdminTable data={data} columns={columns} tableTitle="All Bets" searchField={true}/>
    </AdminDashboardLayout>
  );
};

export default AllBets;
