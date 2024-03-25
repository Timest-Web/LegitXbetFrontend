import WithdrawalActiveColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/WithdrawalActiveColumn";
import TableComp from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActiveTableComp";
import { useMemo, useState } from "react";
import mData from "@/src/client/components/Auth/User/UserDashboard/constant/MOCK_DATA (4).json";
import AdminTable from "../../shared/AdminTable";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import categories from "../../../constant/CategoryDetails.json";
import ActionColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActionColumn";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import AdminActionColumn from "../../shared/AdminActionColumn";

const SportCategories = () => {
  const [data, setData] = useState(categories);
  const columns: any = [
    {
      header: "Sport",
      accessorKey: "sport_name",
    },
    {
      header: "Leagues",
      accessorKey: "leagues",
    },
    {
      header: "Teams",
      accessorKey: "teams",
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
        columns={columns}
        data={data}
        tableTitle="All Sports"
        searchField={true}
        addField={true}
      />
    </AdminDashboardLayout>
  );
};

export default SportCategories;
