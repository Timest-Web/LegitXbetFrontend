import { getBetSlip } from "@/src/helper/apis/services/bookmaking/get-bet-slip-api";
import { useQuery } from "@tanstack/react-query";


const useBetSlipQuery = () => {
  return useQuery({ queryKey: ["betSlip"], queryFn: getBetSlip });
};

export default useBetSlipQuery;
