import React from 'react';
import TopHeader from './CategoryBetHeader';
import CategoryBetHeader from './TopHeader';

const MobileHeader = () => {
	return (
		<div className='bg-black'>
			<CategoryBetHeader />
			<TopHeader />
		</div>
	);
};

export default MobileHeader;
