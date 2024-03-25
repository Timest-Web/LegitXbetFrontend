import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";

const OpenSupportTicket = () => {
  const data: any = [
    {
      subject: "[Ticket#763052] Can't Deposit",
      submitted_by: "Alabanza Pablo",
      status: "Open",
      priority: "High",
      last_reply: "1 month ago",
    },
    {
        subject: "[Ticket#763052] Issues with Withdrawal",
        submitted_by: "Ola Ola",
        status: "Open",
        priority: "High",
        last_reply: "3 months ago",
      },
  ];

  const columns: any = [
    {
      header: "Subject",
      accessorKey: "subject",
    },
    {
      header: "Submitted By",
      accessorKey: "submitted_by",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Priority",
      accessorKey: "priority",
    },
    {
      header: "Last Reply",
      accessorKey: "last_reply",
    },
  ];
  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Open Tickets" />
    </AdminDashboardLayout>
  );
};

export default OpenSupportTicket;
