import { Row } from "@tanstack/react-table";
import AdminActionColumn from "../../shared/AdminActionColumn";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import { TableProps } from "react-table";
import { useState } from "react";

const PaymentGateway = () => {
  const [data, setData] = useState([
    {
      gateway: "Paystack",
      supported_currency: "NGN",
      enabled_currency: "NGN",
      status: "Enabled",
    },
    {
      gateway: "Flutterwave",
      supported_currency: "NGN",
      enabled_currency: "NGN",
      status: "Disabled",
    },
  ]);

  const columns: any = [
    {
      header: "Gateway",
      accessorKey: "gateway",
    },
    {
      header: "Supported Currency",
      accessorKey: "supported_currency",
    },
    {
      header: "Enabled Currency",
      accessorKey: "enabled_currency",
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
      <AdminTable data={data} columns={columns} tableTitle="Payment Gateway" />
    </AdminDashboardLayout>
  );
};

export default PaymentGateway;
