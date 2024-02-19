

import React, { createContext, useEffect, useState } from "react";
import { useInfoContext } from "../PersonalDetailsContext/GetUserInfoContext";
import { updateBalance } from "@/src/helper/apis/services/wallet/balance-patch.api";
import { useMutation } from "@tanstack/react-query";

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
  const info = useInfoContext()!;
  const [balance, setBalance] = useState(info ? info.amount : 0);

  const { mutateAsync: balanceUpdate } = useMutation({
    mutationFn: updateBalance,
    onSuccess: () => {
      console.log("Balance updated successfully");
    }
  });

  useEffect(() => {
    if (info) {
      balanceUpdate({ amount: balance, id: info.id }); // This will trigger the updateBalance function
    }
  }, [balance, balanceUpdate, info]);



  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
