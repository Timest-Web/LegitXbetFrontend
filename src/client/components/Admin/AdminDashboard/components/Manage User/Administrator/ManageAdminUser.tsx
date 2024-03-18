import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";

const ManageAdmminUser = () => {
  const data: any = [
    {
      no: 1,
      name: "Alabanza Pablo",
      email: "alabanza@yahoo.com",
      role: "Admin",
    },
    {
      no: 2,
      name: "Ola Ola",
      email: "ola@yahoo.com",
      role: "Suport",
    },
  ];

  const columns: any = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "E-mail",
      accessorKey: "email",
    },
    {
      header: "Roles",
      accessorKey: "role",
    },
  ];

  return (
    <AdminDashboardLayout>
      <AdminTable data={data} columns={columns} tableTitle="Manage Users" />
    </AdminDashboardLayout>
  );
};

export default ManageAdmminUser;
