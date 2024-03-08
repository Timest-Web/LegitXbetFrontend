import { useEffect } from "react";
import { UserProps, UserProviderProps } from "./constant";
import { UserContext } from "./UserContext";
import useGetUserProfile from "@/src/helper/apis/services/auth/get-user-profile.api";


export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  const { data, refetch } = useGetUserProfile();

  useEffect(() => {
    refetch()
  }, [data, refetch])

  const user: UserProps = data ?? {
    id: 0,
    name: "",
    email: "",
    amount: 0,
    phoneNumber: "",
    verificationCode: "",
    bankDetail: null,
    address: "",
    dateOfBirth: "",
    bvn: "",
  };

  const handleUserLogout = () => {
    localStorage.removeItem("access");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, handleUserLogout }}>
      {children}
    </UserContext.Provider>
  );
};


