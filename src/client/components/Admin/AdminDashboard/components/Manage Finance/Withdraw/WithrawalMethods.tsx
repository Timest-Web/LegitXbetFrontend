import { TableProps } from "react-table";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import AdminActionColumn from "../../shared/AdminActionColumn";
import { Row } from "@tanstack/react-table";

const WithdrawalMethods = () => {
  const data: any = [
    {
      method: "Bank Transfer",
      limit: "10,000,000 NGN",
      status: "Enabled",
    },
  ];

  const columns: any = [
    {
      header: "Method",
      accessorKey: "method",
    },
    {
      header: "Withdrawal Limit",
      accessorKey: "limit",
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
        <div>
          <AdminActionColumn
            row={row}
            setStatus={(status: string) => {
              const updatedData = [...data];
              updatedData[row.index].status = status;
            }}
          />
        </div>
      ),
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable
        data={data}
        columns={columns}
        tableTitle="Withdrawal Method"
      />
    </AdminDashboardLayout>
  );
};

export default WithdrawalMethods;
