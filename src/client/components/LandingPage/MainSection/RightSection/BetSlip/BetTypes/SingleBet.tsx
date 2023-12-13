import React from 'react';
import PlaceBet from '../components/PlaceBet';
import TagCross from '@/src/client/shared/Svg/TagCross';
import DeleteIcon from '@/src/client/shared/Svg/DeleteIcon';
import DeleteBet from '../components/DeleteBet';

const SingleBet = () => {
	return (
		<div className='flex flex-col items-center justify-center h-full w-ful py-3 px-5'>
			<DeleteBet />
			<div className='flex flex-col space-y-6 w-full pb-16 pt-6'>
				<div className='flex  items-start space-x-7 w-full text-black text-xs'>
					<div className='flex items-start justify-between w-full'>
						<p>1</p>
						<p>Man City</p>
						<p>v</p>
						<div className='flex flex-col space-y-3'>
							<p>Chelsea</p>
							<p className='font-bold text-xs'>
								Draw 2.23
							</p>
						</div>
					</div>
					<DeleteIcon />
				</div>
			</div>
			<PlaceBet />
		</div>
	);
};

export default SingleBet;
