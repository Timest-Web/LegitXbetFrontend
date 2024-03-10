export type UserProviderProps = {
	children: React.ReactNode;
};

export type UserProps = {
    id: number,
    name: string,
    email: string,
    amount: number,
    phoneNumber: string,
    verificationCode: string,
    bankDetail: null,
}

export type UserContextType = {
  user: UserProps;
  handleUserLogout: () => void;
  refreshUserData: () => void;
};
