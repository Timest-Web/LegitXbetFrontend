import { useContext } from 'react';
import { UserContext } from './UserContext';
import { UserContextType } from './constant';

const useUser = (): UserContextType => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export default useUser;
