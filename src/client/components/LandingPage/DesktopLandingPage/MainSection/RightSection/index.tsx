import React from 'react';
import Image from 'next/image';
import BetSlip from './BetSlip';
import BetCup from '../../../../../../assets/betCup.png';
import FifaWordCup2 from '../../../../../../assets/fifaworldcup2.png';

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
