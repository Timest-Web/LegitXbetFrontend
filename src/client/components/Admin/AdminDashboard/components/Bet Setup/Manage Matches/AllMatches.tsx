import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import matchdata from "../../../constant/MatchesData.json";

const AllMatches = () => {
  const data: any = matchdata;
  const columns: any = [
    {
      header: "Title",
      accessorKey: "title",
    },
    {
      header: "League",
      accessorKey: "league",
    },
    {
      header: "Category",
      accessorKey: "category",
    },
    {
      header: "Game Starts From",
      accessorKey: "game_starts_from",
    },
    {
      header: "Bet Starts From",
      accessorKey: "bet_starts_from",
    },
    {
      header: "Bet Ends At",
      accessorKey: "bet_ends_at",
    },
    {
      header: "Markets",
      accessorKey: "markets",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];

  return (
    <AdminDashboardLayout>
      <AdminTable
        data={data}
        columns={columns}
        tableTitle="All Leagues"
        addField={true}
      />
    </AdminDashboardLayout>
  );
};

export default AllMatches;
