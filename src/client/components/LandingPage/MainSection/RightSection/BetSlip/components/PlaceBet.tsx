import { Button } from '@/src/client/shared/Button';
import React from 'react';

const PlaceBet = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full space-y-2'>
			<div className='flex items-center space-x-3 w-full text-sm'>
				<input
					type='text'
					className='h-9 w-36 borderless-input bg-gray-200 rounded-md px-3 text-xs'
					placeholder='Enter stake Amt.'
				/>
				<div className='text-xs'>
					<p className='font-bold text-[11px]'>Potential Win</p>
					<p>
						<span className='font-bold text-xs'>NGN</span> 20,000
					</p>
				</div>
			</div>

			<div className='flex items-center space-x-3 w-full text-sm'>
				<Button
					link='#'
					text='Place Bet'
					onClick={Function}
					className='h-9 w-36 borderless-input bg-black text-white rounded-md px-3 text-xs'
				/>
				<p className='text-gray-400 text-xs'>ID 9004949</p>
			</div>
		</div>
	);
};

export default PlaceBet;
