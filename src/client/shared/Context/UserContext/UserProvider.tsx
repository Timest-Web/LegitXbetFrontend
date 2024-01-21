import { useRouter } from 'next/navigation';
import { UserProviderProps } from './constant';
import { UserContext } from './UserContext';

export const UserProvider: React.FC<UserProviderProps> = ({
	children,
}: UserProviderProps) => {
	const handleUserLogout = () => {
		localStorage.removeItem('access');
		window.location.href = '/';
	};

	return (
		<UserContext.Provider value={{ handleUserLogout }}>
			{children}
		</UserContext.Provider>
	);
};
