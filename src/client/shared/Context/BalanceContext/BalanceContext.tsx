import React, { createContext, useState } from "react";

type BalanceContextType = {
  balance: number;
  setBalance: any;
};

type BalanceProviderProps = {
  children: React.JSX.Element;
};

export const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

const BalanceProvider: React.FC<BalanceProviderProps> = ({ children }) => {
  const [balance, setBalance] = useState(0);

  return (
    <BalanceContext.Provider value={{ balance, setBalance }}>
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
