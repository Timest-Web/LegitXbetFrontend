import AdminDashboardLayout from "../../../shared/AdminDashboardLayout";
import AdminTable from "../../../shared/AdminTable";
import bettorData from "../../../../constant/BettorsDetail.json";

const AllBettors = () => {
  const data: any = bettorData;
  const columns: any = [
    {
      header: "Bettor",
      accessorKey: "bettor",
    },
    {
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Phone Number",
      accessorKey: "phone_number",
    },
    {
      header: "Country",
      accessorKey: "country",
    },
    {
      header: "Joined At",
      accessorKey: "joined_at",
    },
    {
      header: "Balance",
      accessorKey: "balance",
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="All Bettors" searchField={true}/>
    </AdminDashboardLayout>
  );
};

export default AllBettors;
