import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import depositData from "../../../constant/DepositLog.json";

const WithdrawalLog = () => {
  const data: any = depositData;
  const columns: any = [
    {
      header: "Name",
      accessorKey: "customer_name",
    },
    {
      header: "Gateway",
      accessorKey: "gateway_name",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Transaction ID",
      accessorKey: "transaction_id",
    },
  ];

  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="All Withdrawal" />
    </AdminDashboardLayout>
  );
};

export default WithdrawalLog;
