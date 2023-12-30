import Receipt from '@/src/client/shared/Svg/Receipt';
import React from 'react'

const NoSelectionYet = () => {
  return (
		<div className='flex items-center justify-center w-full m-auto'>
			<div className='flex flex-col items-center justify-center space-y-3 my-24'>
				<Receipt />
				<p className='text-gray-400 text-xs'>No selection yet</p>
			</div>
		</div>
  );
}

export default NoSelectionYet