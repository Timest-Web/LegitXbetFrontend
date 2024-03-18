import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import depositData from "../../../constant/DepositLog.json";

const ApprovedWithdrawal = () => {
  const data: any = depositData;
  const filteredData = data.filter((withdraw: any) => withdraw.status === "Success");
  const formattedData = filteredData.map((withdraw: any, index: number) => ({
    ...withdraw,
    status: withdraw.status === "Success"? "Approved": ""
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
      <AdminTable data={formattedData} columns={columns} tableTitle="Approved Withdrawal" />
    </AdminDashboardLayout>
  );
};

export default ApprovedWithdrawal;
