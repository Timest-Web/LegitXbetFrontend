import React from 'react';
import LeagueType from './components/LeagueType';
import BetTableSection from './components/BetTableSection';
import MobileNavbar from '@/src/client/shared/MobileNavbar';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import Footer from '@/src/client/shared/Footer';


const MobileLandingPage = () => {
	return (
		<div className='h-max w-full'>
			<LandScaleImageCarousel
				height='h-[134.36px]'
				width='w-full'
                  />
                  <LeagueType />
			<BetTableSection />
			<Footer/>
			<MobileNavbar/>
		</div>
	);
};

export default MobileLandingPage;
