import { TableProps } from "@/src/client/components/components/Tables/constant/data";
import AdminActionColumn from "../../shared/AdminActionColumn";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import { Row } from "@tanstack/react-table";
import { useState } from "react";

const ManageLeagues = () => {
  const [data, setData] = useState([
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
  ]);
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
      header: "Status",
      accessorKey: "status",
      cell: ({ row }: { row: any }) => (
        <div
          className={`w-1 text-xs ${
            row.original.status === "Enabled"
              ? " text-green-500 "
              : "text-red-500  "
          }`}
        >
          {row.original.status}
        </div>
      ),
    },

    {
      header: "Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <AdminActionColumn
          row={row}
          setStatus={(status: string) => {
            const updatedData = [...data];
            updatedData[row.index].status = status;
            setData(updatedData);
          }}
        />
      ),
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable
        data={data}
        columns={columns}
        tableTitle="Leagues"
        searchField={true}
        addField={true}
      />
    </AdminDashboardLayout>
  );
};

export default ManageLeagues;
