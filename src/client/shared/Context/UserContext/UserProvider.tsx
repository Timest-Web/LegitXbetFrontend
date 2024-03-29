import { UserProps, UserProviderProps } from "./constant";
import { UserContext } from "./UserContext";
import useGetUserProfile from "@/src/helper/apis/services/auth/get-user-profile.api";


export const UserProvider: React.FC<UserProviderProps> = ({
  children,
}: UserProviderProps) => {
  const { data, isLoading, error, refetch } = useGetUserProfile();



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
    referralCode: ""
  };

    const refreshUserData = async () => {
      await refetch();
    };


  const handleUserLogout = () => {
    localStorage.removeItem("access");
    window.location.href = "/";
  };

  return (
    <UserContext.Provider value={{ user, handleUserLogout, refreshUserData }}>
      {children}
    </UserContext.Provider>
  );
};


