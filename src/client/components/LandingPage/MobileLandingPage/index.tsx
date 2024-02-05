import React from 'react';
import LeagueType from './components/LeagueType';
import MobileNavbar from '@/src/client/shared/MobileNavbar';
import LandScaleImageCarousel from '@/src/client/shared/Carousel/LandScaleImageCarousel';
import Layout from '../../Layout';
import BetTableSection from './components/BetTableSection';


const MobileLandingPage = () => {
	return (
		<Layout 
		  mobileComponents={
			<div className='h-max w-full -mt-[120px]'>
			    <LandScaleImageCarousel
					height='h-[134.36px]'
					width='w-full'
                />
                <LeagueType />
				<BetTableSection />
				<MobileNavbar/>
			</div>
		  }
		/>
	);
};

export default MobileLandingPage;
