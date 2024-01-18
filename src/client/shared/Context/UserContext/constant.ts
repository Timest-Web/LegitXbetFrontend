export type UserProviderProps = {
	children: React.ReactNode;
};

export type UserContextType = {
	userId: string;
	handleUserLogout: () => void;
};
