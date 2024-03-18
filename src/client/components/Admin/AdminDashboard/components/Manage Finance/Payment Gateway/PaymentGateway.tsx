import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";

const PaymentGateway = () => {
  const data: any = [
    {
      gateway: "Paystack",
      supported_currency: "NGN",
      enabled_currency: "NGN",
      status: "Active",
    },
    {
        gateway: "Flutterwave",
        supported_currency: "NGN",
        enabled_currency: "NGN",
        status: "Inactive",
      },
  ];

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
    },
  ];

  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Payment Gateway" />
    </AdminDashboardLayout>
  );
};

export default PaymentGateway;
