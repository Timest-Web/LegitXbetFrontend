import AdminDashboardLayout from "../../shared/AdminDashboardLayout";
import AdminTable from "../../shared/AdminTable";

const WithdrawalMethods = () => {
    const data: any = [{
        method: "Bank Transfer",
        limit: "10,000,000 NGN",
        status: "Enabled"
    }]

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
        },
    ]
    return ( <AdminDashboardLayout><AdminTable data={data} columns={columns} tableTitle="Withdrawal Method"/></AdminDashboardLayout> );
}
 
export default WithdrawalMethods;