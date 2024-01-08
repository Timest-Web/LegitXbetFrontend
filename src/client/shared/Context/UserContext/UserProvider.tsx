import { useEffect, useState } from "react";
import { UserProviderProps } from "./constant";
import { UserContext } from "./UserContext";

export const UserProvider: React.FC<UserProviderProps> = ({
	children,
}: UserProviderProps) => {
	const [userId, setUserId] = useState<string>('');

	useEffect(() => {
		const userFromLocalStorage = JSON.parse(
			localStorage.getItem('user') || '{}'
		);
		const userIdFromLocalStorage = userFromLocalStorage?.id || '';
		setUserId(userIdFromLocalStorage);
	}, []);

	const handleUserLogout = () => {
		localStorage.removeItem('user');
	}

	return (
		<UserContext.Provider value={{ userId, handleUserLogout }}>
			{children}
		</UserContext.Provider>
	);
};
