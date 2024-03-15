import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import depositData from "../../../constant/DepositLog.json";

const PendingWithdrawal = () => {
  const data: any = depositData;
  const filteredData = data.filter((withdraw: any) => withdraw.status === "Pending");
  const formattedData = filteredData.map((withdraw: any, index: number) => ({
    ...withdraw,
    status: withdraw.status === "Pending"? "Pending": ""
  }));
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
      <AdminTable data={formattedData} columns={columns} tableTitle="Pending Withdrawal" />
    </AdminDashboardLayout>
  );
};

export default PendingWithdrawal;
