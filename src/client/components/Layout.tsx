import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import CenterSection from './LandingPage/DesktopLandingPage/MainSection/CenterSection';
import RightSection from './LandingPage/DesktopLandingPage/MainSection/RightSection';
import useDeviceType from '../shared/Hooks/useDeviceType';

const Layout = ({ children }: { children: React.ReactNode }) => {
	const { isMobile } = useDeviceType();
	return (
		<div>
			<Header />
			<div className='pt-[120px] bg-gray-200'>
				{!isMobile && (
					<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max '>
						<div className='space-y-5'>
						{children}
						</div>
						<CenterSection />
						<RightSection />
					</div>
				)}
			</div>
			{isMobile &&  children}
			<Footer />
		</div>
	);
};

export default Layout;
