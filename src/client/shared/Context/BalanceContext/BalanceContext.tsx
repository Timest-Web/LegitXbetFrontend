import React, { createContext, useEffect, useState } from "react";
import useUser from "../UserContext/useUser";
import { updateBalance, BalancePayload } from "@/src/helper/apis/services/wallet/balance-patch.api";

type BalanceContextType = {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
};

type BalanceProviderProps = {
  children: React.ReactNode;
};

export const BalanceContext = createContext<BalanceContextType | undefined>(
  undefined
);

const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
  const user = useUser();
  const [balance, setBalance] = useState<number>(user.user.amount || 0);

  useEffect(() => {
    if (user.user.amount !== undefined) {
      setBalance(user.user.amount);
    }
  }, [user.user.amount]);

  const updateBalanceOnServer: React.Dispatch<React.SetStateAction<number>> = async (newBalance: number | ((prevBalance: number) => number)) => {
    try {
      const payload: BalancePayload = { id: user.user.id, amount: typeof newBalance === 'function' ? newBalance(balance) : newBalance };
      await updateBalance(payload);
      setBalance(newBalance);
    } catch (error) {
      console.error("Error updating balance on server:", error);
    
    }
  };

  return (
    <BalanceContext.Provider value={{ balance, setBalance: updateBalanceOnServer }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
