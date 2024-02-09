import React from 'react';
import CategoryBetMenu from './CategoryBetMenu/CategoryBetMenu';
import SportBetMenu from './SportBetMenu';
import useUrlPathChecker from '../../Hooks/useUrlPathChecker';
import { getUserProfile } from '@/src/helper/apis/services/auth/get-user-profile.api';
import useUser from '../../Context/UserContext/useUser';


const DesktopHeader = () => {
	const isUrlPathIncluded = useUrlPathChecker({ urlPath: 'user-dashboard' });
	// const {mutate} = getUserProfile()

	// console.log(responseData)


	return (
		<div className='w-full fixed z-50 top-0'>
			<CategoryBetMenu />
			{!isUrlPathIncluded && <SportBetMenu />}
		</div>
	);
};

export default DesktopHeader;
