import React, { createContext, useContext, useState } from 'react';
interface TotalPersonalDetails {
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  bvn: string;
}

type ProfileContextProps = {
  totalPersonalDetails: TotalPersonalDetails;
  handleInputChange: (fieldName: string, value: string) => void;
}
const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export const useProfileContext = () => {
  return useContext(ProfileContext);
};

type ProfileProviderProps = {
  children: React.JSX.Element;
};

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [totalPersonalDetails, setTotalPersonalDetails] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    bvn: '',
  });

  const handleInputChange = (fieldName:string, value:string) => {
    setTotalPersonalDetails((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  const contextValue = {
    totalPersonalDetails,
    handleInputChange,
  };

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};

