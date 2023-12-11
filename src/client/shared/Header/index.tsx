import React from 'react';
import CategoryBetMenu from './CategoryBetMenu';
import SportBetMenu from './SportBetMenu';

const Header = () => {
	return (
		<div className='w-full fixed z-50 top-0'>
			<div className=''>
			<CategoryBetMenu/>
			<SportBetMenu/>
			</div>
		</div>
	);
};

export default Header;
