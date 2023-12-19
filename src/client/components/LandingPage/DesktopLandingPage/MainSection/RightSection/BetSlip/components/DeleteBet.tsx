import React from 'react';
import TagCross from '@/src/client/shared/Svg/TagCross';
import useBet from '@/src/client/shared/Context/BetContext/useBet';

const DeleteBet = () => {
	const {handleDeleteAll} = useBet();
	return (
		<div className='flex items-center justify-between font-bold text-black w-full'>
			<p className='cursor-default text-xs'>No.</p>

			<div onClick={handleDeleteAll} className='flex items-center space-x-2 cursor-pointer text-xs'>
				<p className='underline'>Delete</p>
				<TagCross />
			</div>
		</div>
	);
};

export default DeleteBet;
