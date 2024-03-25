import { TableProps } from "react-table";
import AdminAllBetAction from "../../shared/AdminAllBetAction";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";
import { Row } from "@tanstack/react-table";
import { MdDeleteOutline, MdMail, MdOutlineMoreHoriz } from "react-icons/md";
import { FaEye, FaUserTimes } from "react-icons/fa";
import { useState } from "react";
import ActionColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActionColumn";
import { Checkbox } from "@heathmont/moon-core-tw";
import AddUser from "./AddUser";
import Link from "next/link";
import { useRouter } from "next/router";
import adminDetails from "../../../constant/AdminDetail.json";

const ManageAdmminUser = () => {
  const [viewMore, setViewMore] = useState(false);

  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  const router = useRouter();
  const { id } = router.query;

  const admin = adminDetails.find((admin) => admin.id === Number(id));
  const data = adminDetails;
  const columns: any = [
    // {
    //   header: " ",
    //   cell: ({ row }: { row: Row<TableProps> }) => <Checkbox className="border border-solid border-black rounded-sm text-krillin-60" />,
    // },
    {
      header: "No",
      accessorKey: "id",
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
    {
      header: "Action",
      cell: ({ row }: { row: Row<any> }) => (
        <ActionColumn
          row={row}
          popUpElement={
            <div className=" relative ">
              <div className=" absolute left-[-0.8rem] top-6 flex flex-col p-2 w-28 bg-black rounded-md space-y-4">
                <Link
                  href={{
                    pathname: "/admin/manage-users/admin-details",
                    query: { id: row.original.id },
                  }}
                  className="flex space-x-2 cursor-pointer"
                >
                  <FaEye className=" text-base text-white " />
                  <p className="text-[0.7rem] text-white cursor-pointer">
                    View Profile
                  </p>
                </Link>
                <div className="flex space-x-2 cursor-pointer">
                  <FaUserTimes className="text-md text-white cursor-pointer" />
                  <p className="text-[0.7rem] text-white">Suspend</p>
                </div>
                <div className="flex space-x-2 cursor-pointer">
                  <MdMail className="text-md text-white cursor-pointer" />
                  <p className="text-[0.7rem] text-white">Send Mail</p>
                </div>
              </div>
            </div>
          }
        />
      ),
    },
  ];

  return (
    <AdminDashboardLayout>
      <AdminTable
        data={data}
        columns={columns}
        tableTitle="Manage Users"
        addField={true}
        modalComp={<AddUser />}
      />
    </AdminDashboardLayout>
  );
};

export default ManageAdmminUser;
