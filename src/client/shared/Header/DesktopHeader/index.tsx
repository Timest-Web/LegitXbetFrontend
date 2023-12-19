import React from 'react';
import CategoryBetMenu from './CategoryBetMenu';
import SportBetMenu from './SportBetMenu';

const DesktopHeader = () => {
	return (
		<div className='w-full fixed z-50 top-0'>
			<CategoryBetMenu />
			<SportBetMenu />
		</div>
	);
};

export default DesktopHeader;
