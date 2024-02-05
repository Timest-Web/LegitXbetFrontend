import React from 'react';
import CategoryBetMenu from './CategoryBetMenu/CategoryBetMenu';
import SportBetMenu from './SportBetMenu';
import useUrlPathChecker from '../../Hooks/useUrlPathChecker';


const DesktopHeader = () => {
	const isUrlPathIncluded = useUrlPathChecker({ urlPath: 'user-dashboard' });
	
	return (
		<div className='w-full fixed z-50 top-0'>
			<CategoryBetMenu />
			{!isUrlPathIncluded && <SportBetMenu />}
		</div>
	);
};

export default DesktopHeader;
