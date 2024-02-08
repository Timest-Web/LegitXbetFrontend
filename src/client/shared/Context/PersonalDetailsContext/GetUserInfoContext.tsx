import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/src/helper/apis/services/auth/get-user-profile.api";
import React, { createContext, useContext, useState } from "react";

type InfoContextProps = {
  name: string;
};

const InfoContext = createContext<InfoContextProps | undefined>(undefined);

type InfoProviderProps = {
  children: React.JSX.Element;
};

export const useInfoContext = () => {
  return useContext(InfoContext);
};

export const InfoProvider: React.FC<InfoProviderProps> = ({ children }) => {
  const {
    status,
    data: userData,
    error,
  } = useQuery({
    queryKey: ["info"],
    queryFn: getUserProfile,
  });

  if (status === "pending") {
    return <span>E dey load</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  console.log(userData)

  return (
    <InfoContext.Provider value={userData}>{children}</InfoContext.Provider>
  );
};
