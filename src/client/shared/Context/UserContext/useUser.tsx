import { useContext } from 'react';
import { UserContext } from './UserContext';
import { UserContextType } from './constant';

const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

export default useUser;
