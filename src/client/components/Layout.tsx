import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import CenterSection from './LandingPage/DesktopLandingPage/MainSection/CenterSection';
import RightSection from './LandingPage/DesktopLandingPage/MainSection/RightSection';

const Layout = ({ children }: { children: React.JSX.Element }) => {
	return (
		<div>
			<Header />
			<div className='pt-[120px] bg-gray-200'>
				<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max '>
					{children}
					<CenterSection />
					<RightSection />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
