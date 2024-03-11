import WithdrawalActiveColumn from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/WithdrawalActiveColumn";
import TableComp from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/ActiveTableComp";
import { useMemo } from "react";
import mData from "@/src/client/components/Auth/User/UserDashboard/constant/MOCK_DATA (4).json"
import AdminTable from "../../shared/AdminTable";
import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
const SportCategories = () => {
  const data: any = [{
  
      "no":"1" ,
      "reference_id": "1234",
      "date": "24/05",
      "status": "enabled",
      "amount": "3000",
      "channel": "NTA"
  
  }]
  const columns: any = [
    {
      header: "No",
      accessorKey: "no",
    },
    {
      header: "Reference ID",
      accessorKey: "reference_id",
    },
    { 
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Channel",
      accessorKey: "channel",
    },
  ];
  return (<AdminDashboardLayout><AdminTable columns={columns} data={data} tableTitle="All Sports"/></AdminDashboardLayout>  );
}
 
export default SportCategories;