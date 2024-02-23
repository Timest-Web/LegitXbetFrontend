import React, { createContext, useEffect, useState } from "react";
import { updateBalance } from "@/src/helper/apis/services/wallet/balance-patch.api";
import { useMutation } from "@tanstack/react-query";
import useUser from "../UserContext/useUser";

type BalanceContextType = {
  balance: number;
  setBalance: any;
};

type BalanceProviderProps = {
  children: React.JSX.Element;
};

export const BalanceContext = createContext<BalanceContextType | undefined>(
  undefined
);

const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
  const user = useUser();
  const userBalance = user.user.amount
  const [balance, setBalance] = useState(userBalance);
  console.log("This is the balance coming fom server:", balance, "I mean", user.user.amount)

  // const { mutate: balanceUpdate } = useMutation({
  //   mutationFn: updateBalance,
  //   onSuccess: () => {
  //     console.log("Balance updated successfully");
  //   }
  // });

  // useEffect(() => {
  //   if (user) {
  //     console.log(user.user.id)
      
  //     balanceUpdate({ amount: balance, id: user.user.id }); 
  //   }
  // }, [balance,updateBalance, user]);



  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
