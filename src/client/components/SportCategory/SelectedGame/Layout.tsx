import React from 'react';
import Footer from '@/src/client/shared/Footer';
import Header from '@/src/client/shared/Header';
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';
import LeftSection from '../../LandingPage/DesktopLandingPage/MainSection/LeftSection';
import RightSection from '../../LandingPage/DesktopLandingPage/MainSection/RightSection';


const Layout = ({ children }: { children: React.JSX.Element }) => {
	const { isMobile } = useDeviceType();
	return (
		<div>
			<Header />
			<div className='pt-[120px] bg-gray-200'>
				{!isMobile && (
					<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max '>
						<LeftSection />
						{children}
						<RightSection />
					</div>
				)}
			</div>
			{isMobile && children}
			<Footer />
		</div>
	);
};

export default Layout;
