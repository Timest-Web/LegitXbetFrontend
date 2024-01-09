import React from 'react';
import Image from 'next/image';
import BetCup from '../../../../../../assets/betCup.png';
import FifaWordCup2 from '../../../../../../assets/fifaworldcup2.png';
import BetSlip from '@/src/client/shared/BetSlip';

const RightSection = () => {
	return (
		<div className='flex flex-col space-y-1'>
			<BetSlip />
			<div className='flex flex-col items-center justify-center space-y-1'>
				<Image
					src={BetCup}
					alt='BetCup'
				/>
				<Image
					src={FifaWordCup2}
					alt='fifaworld'
				/>
			</div>
		</div>
	);
};

export default RightSection;
