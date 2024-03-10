import { useContext } from 'react';
import { BetContextType } from './constant';
import { BetContext } from './BetContext';

const useBet = (): BetContextType => {
	const context = useContext(BetContext);
	if (!context) {
		throw new Error('useBet must be used within a BetProvider');
	}
	return context;
};

export default useBet;