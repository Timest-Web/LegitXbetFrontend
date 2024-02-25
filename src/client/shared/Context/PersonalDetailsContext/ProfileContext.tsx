import useGetUserProfile from "@/src/helper/apis/services/auth/get-user-profile.api";
import React, { createContext, useContext, useEffect, useState } from "react";

interface TotalPersonalDetails {
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  bvn: string;
}

type ProfileContextProps = {
  totalPersonalDetails: TotalPersonalDetails;
  setTotalPersonalDetails: React.Dispatch<React.SetStateAction<TotalPersonalDetails>>; // Add setter function
};

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};

type ProfileProviderProps = {
  children: React.ReactNode;
};

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const { data: userDetails, isLoading, error } = useGetUserProfile();
  // console.log(userDetails.bvn, userDetails.name);
  const fullName = userDetails?.name || "";
  const [firstName, lastName] = fullName.split(" ");

  const [totalPersonalDetails, setTotalPersonalDetails] = useState<TotalPersonalDetails>({
    firstName: firstName || "",
    lastName: lastName || "",
    dob: userDetails?.dob || "",
    address: userDetails?.address || "",
    bvn: userDetails?.bvn || "",
  });



  useEffect(() => {
    if (userDetails) {
      setTotalPersonalDetails({
        firstName: firstName,
        lastName: lastName,
        dob: userDetails.dob,
        address: userDetails.address,
        bvn: userDetails.bvn,
      });
    }
  }, [userDetails, setTotalPersonalDetails]);

  return (
    <ProfileContext.Provider value={{ totalPersonalDetails, setTotalPersonalDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};
