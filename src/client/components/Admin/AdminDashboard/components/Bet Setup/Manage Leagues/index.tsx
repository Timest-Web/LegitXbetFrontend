import { TableProps } from "@/src/client/components/components/Tables/constant/data";
import AdminActionColumn from "../../shared/AdminActionColumn";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import { Row } from "@tanstack/react-table";

const ManageLeagues = () => {
  const data: any = [
    {
      league_name: "English Premier League",
      category: "Football",
      status: "Enabled",
    },
    {
      league_name: "La Liga",
      category: "Football",
      status: "Enabled",
    },
    {
      league_name: "Serie A",
      category: "Football",
      status: "Disabled",
    },
    {
      league_name: "NBA",
      category: "Basketball",
      status: "Disabled",
    },
    {
      league_name: "NHL",
      category: " American football",
      status: "Disabled",
    },
  ];
  const columns: any = [
    {
      header: "League ",
      accessorKey: "league_name",
    },
    {
      header: "Category",
      accessorKey: "category",
    },

    {
      header: "Action",
      // cell: ({ row }: { row: Row<TableProps> }) => (
      //    <AdminActionColumn  row={row} />
      // ),
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Leagues" />
    </AdminDashboardLayout>
  );
};

export default ManageLeagues;
