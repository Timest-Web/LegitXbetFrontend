// import { useQuery } from "@tanstack/react-query";
// import { getUserProfile } from "@/src/helper/apis/services/auth/get-user-profile.api";
// import React, { createContext, useContext, useEffect, useState } from "react";

// type InfoContextProps = {
//   name: string;
//   id: number;
//   amount: number
// };

// const InfoContext = createContext<InfoContextProps | undefined>(undefined);

// type InfoProviderProps = {
//   children: React.ReactNode;
// };

// export const useInfoContext = () => {
//   return useContext(InfoContext);
// };

// export const InfoProvider: React.FC<InfoProviderProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const storedAccess = localStorage.getItem("access");
//     setIsAuthenticated(!!storedAccess);
//   }, []);

//   const {
//     status,
//     data: userData,
//     error,
//   } = useQuery({
//     queryKey: ["info"],
//     queryFn: getUserProfile,
//     enabled: isAuthenticated, // Only enable the query if the user is authenticated
//   });

//   // Display loading only if user is authenticated and the query is pending
//   if (isAuthenticated && status === "pending") {
//     return <span>Loading</span>;
//   }

//   // Handle error case
//   // if (status === "error") {
//   //   return <span>Error: {error.message}</span>;
//   // }

//   // If user is not authenticated, return children immediately without running the query
//   if (!isAuthenticated) {
//     return children;
//   }

//   // If user is authenticated and query is successful, render children
//   return (
//     <InfoContext.Provider value={userData}>{children}</InfoContext.Provider>
//   );
// };
