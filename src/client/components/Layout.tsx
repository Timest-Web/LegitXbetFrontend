import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import RightSection from './components/RightSection';
import useDeviceType from '../shared/Hooks/useDeviceType';
import Carousel from './components/Tables/DesktopTable/components/Carousel';

type LayoutProps = { 
	leftSection?: React.ReactNode; 
	centerSection?: React.ReactNode; 
	mobileComponents?: React.ReactNode 
}

const Layout = ({ leftSection, centerSection, mobileComponents }: LayoutProps) => {
	const { isMobile } = useDeviceType();
	return (
		<>
			<Header />
			<div className='flex justify-center pt-[120px] bg-gray-200'>
				{!isMobile && (
					<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max '>
						{leftSection}
						{centerSection}
						<RightSection />
					</div>
				)}
			</div>
			{isMobile && mobileComponents}
			<Footer />
		</>
	);
};

export default Layout;
