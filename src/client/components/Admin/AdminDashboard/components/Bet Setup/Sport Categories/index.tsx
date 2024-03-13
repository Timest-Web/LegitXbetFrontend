import WithdrawalActiveColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/WithdrawalActiveColumn";
import TableComp from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActiveTableComp";
import { useMemo } from "react";
import mData from "@/src/client/components/Auth/User/UserDashboard/constant/MOCK_DATA (4).json";
import AdminTable from "../../shared/AdminTable";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import categories from "../../../constant/CategoryDetails.json";
import ActionColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActionColumn";
import { TableProps } from "react-table";
import { Row } from "@tanstack/react-table";
import AdminActionColumn from "../../shared/AdminActionColumn";

const SportCategories = () => {
  const data: any = categories;
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
    },
    {
      header:"Action",
      cell: ({ row }: { row: Row<TableProps> }) => (
        <AdminActionColumn row={row} />
      ),
    }
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable columns={columns} data={data} tableTitle="All Sports" />
    </AdminDashboardLayout>
  );
};

export default SportCategories;
