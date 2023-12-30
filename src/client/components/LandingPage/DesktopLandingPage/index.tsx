import React from 'react';
import LeftSection from './MainSection/LeftSection';
import CenterSection from './MainSection/CenterSection';
import RightSection from './MainSection/RightSection';
import Footer from '@/src/client/shared/Footer';

const DesktopLandingPage = () => {
	return (
		<div className='pt-[120px] bg-gray-200'>
			<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max '>
				<LeftSection />
				<CenterSection />
				<RightSection />
			</div>
			<Footer />
		</div>
	);
};

export default DesktopLandingPage;
