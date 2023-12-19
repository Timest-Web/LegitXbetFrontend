import React from 'react';
import PlaceBet from '../components/PlaceBet';
import DeleteIcon from '@/src/client/shared/Svg/DeleteIcon';
import TagCross from '@/src/client/shared/Svg/TagCross';

const MultipleBet = () => {
	return (
		<div className='flex flex-col items-center justify-center h-full w-ful py-3 px-5'>
			<div className='flex items-center justify-between font-bold text-xs text-black w-full'>
				<p className='cursor-default'>No.</p>

				<div className='flex items-center space-x-2 cursor-pointer text-xs'>
					<p className='underline'>Delete</p>
					<TagCross />
				</div>
			</div>

			<div className='flex flex-col space-y-6 w-full pb-16 pt-6'>
				<div className='flex  items-start space-x-7 w-full text-sm text-black'>
					<div className='flex items-start justify-between w-full text-xs'>
						<p>1</p>
						<p>Man City</p>
						<p>v</p>
						<div className='flex flex-col space-y-3 text-xs'>
							<p>Chelsea</p>
							<p className='text-xs font-bold'>Draw 2.23</p>
						</div>
					</div>
					<DeleteIcon />
				</div>
				<div className='flex  items-start space-x-7 w-full text-sm text-black'>
					<div className='flex items-start justify-between w-full text-xs'>
						<p>2</p>
						<div className='flex flex-col space-y-3 text-xs'>
							<p>Real Madrid</p>
							<p className='text-xs font-bold'>Win 1.14</p>
						</div>
						<p>v</p>
						<p>Arsenal</p>
					</div>
					<DeleteIcon />
				</div>
			</div>

			<PlaceBet />
		</div>
	);
};

export default MultipleBet;
