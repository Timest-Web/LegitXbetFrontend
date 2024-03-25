import AdminDashboardLayout from "../../../shared/AdminDashboardLayout";
import AdminTable from "../../../shared/AdminTable";
import bettorData from "../../../../constant/BettorsDetail.json";
import AdminAllBetAction from "../../../shared/AdminAllBetAction";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";

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
      header: "Balance",
      accessorKey: "balance",
    },     {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <AdminAllBetAction row={row} />
      ),
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="All Bettors" searchField={true}/>
    </AdminDashboardLayout>
  );
};

export default AllBettors;
