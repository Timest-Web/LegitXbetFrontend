import { useRouter } from "next/router";
import bettorDetail from "../../../../constant/BettorsDetail.json";
import BettorLayout from "./BettorLayout";
import AdminTable from "../../../shared/AdminTable";
import depositData from "../../../../constant/DepositLog.json";

const PaymentLog = () => {
  const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  const data: any = depositData;
  const columns: any = [
    {
      header: "S/N",
      accessorKey: "serial_number",
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
    <div>
      {bettor ? (
        <BettorLayout
          content={
            <AdminTable
              tableTitle="Payment Log"
              data={data}
              columns={columns}
            />
          }
        />
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default PaymentLog;
