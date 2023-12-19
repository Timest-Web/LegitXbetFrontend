import React from 'react';
import SingleBet from '../BetTypes/SingleBet';
import MultipleBet from '../BetTypes/MultipleBet';
import SystemBet from '../BetTypes/SystemBet';
import useBet from '@/src/client/shared/Context/BetContext/useBet';

const RenderBetSlipType = ({
	betSlipTypeLink,
}: {
	betSlipTypeLink: string;
	}) => {
	switch (betSlipTypeLink) {
		case 'Single':
			return <SingleBet />;
		case 'Multiple':
			return <MultipleBet />;
		default:
			return <SystemBet />;
	}
};

export default RenderBetSlipType;
