import React, { createContext, useContext, useState } from "react";

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
  const [totalPersonalDetails, setTotalPersonalDetails] = useState<TotalPersonalDetails>({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    bvn: "",
  });

  return (
    <ProfileContext.Provider value={{ totalPersonalDetails, setTotalPersonalDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};
