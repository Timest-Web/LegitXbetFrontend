import React from 'react';
import Layout from '../Layout';
import LeftSection from './MainSection/LeftSection';
import RightSection from './MainSection/RightSection';
import CenterSecion from './MainSection/CenterSection';
import Footer from '../../shared/Footer';

const LandingPage = () => {
	return (
		<Layout>
			<div className=''>
				<div className='flex flex-row items-start justify-center py-2 px-1 space-x-2 h-max bg-gray-200'>
					<LeftSection />
					<CenterSecion />
					<RightSection />
				</div>
				<Footer />
			</div>
		</Layout>
	);
};

export default LandingPage;
