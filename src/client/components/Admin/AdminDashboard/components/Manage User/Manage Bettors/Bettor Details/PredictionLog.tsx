import { useRouter } from "next/router";
import bettorDetail from "../../../../constant/BettorsDetail.json";
import BettorLayout from "./BettorLayout";
import betData from "../../../../constant/BetUpdateData.json";
import AdminTable from "../../../shared/AdminTable";

const PredictionLog = () => {
  const router = useRouter();
  const { id } = router.query;

  const bettor = bettorDetail.find((bettor) => bettor.id === Number(id));
  const data: any = betData;
  const columns: any = [
    {
      header: "Bet Number",
      accessorKey: "bet_number",
    },
    {
      header: "Bet Type",
      accessorKey: "bet_type",
    },
    {
      header: "Stake",
      accessorKey: "stake_amount",
    },
    {
      header: "Return",
      accessorKey: "return",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
  ];
  return (
    <div>
      {bettor ? (
        <BettorLayout
          content={
            <AdminTable
              tableTitle="Prediction Log"
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

export default PredictionLog;
