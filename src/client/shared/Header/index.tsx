import React from 'react';
import CategoryBetMenu from './CategoryBetMenu';
import SportBetMenu from './SportBetMenu';

const Header = () => {
	return (
		<div className='w-full'>
			<CategoryBetMenu/>
			<SportBetMenu/>
		</div>
	);
};

export default Header;
