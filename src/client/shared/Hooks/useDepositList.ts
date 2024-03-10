import { getDeposit } from "@/src/helper/apis/services/transaction-list/get-deposit.api";
import { useQuery } from "@tanstack/react-query";


const useDepositListQuery = () => {
  return useQuery({ queryKey: ["deposit"], queryFn: getDeposit });
};

export default useDepositListQuery;
