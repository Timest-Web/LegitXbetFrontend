import { useContext } from 'react';

import { BetContextType } from './constant';
import { BetContext } from './BetContext';

const useBet = (): BetContextType => {
	const context = useContext(BetContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export default useBet;