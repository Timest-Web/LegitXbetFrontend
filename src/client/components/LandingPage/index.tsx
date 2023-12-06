import React from 'react';
import Layout from '../Layout';
import LeftSection from './MainSection/LeftSection';
import RightSection from './MainSection/RightSection';
import CenterSecion from './MainSection/CenterSection';

const LandingPage = () => {
	return (
		<Layout>
      <div className='flex items-center justify-center py-2 px-1 space-x-2 bg-gray-100'>
        <LeftSection/>
        <CenterSecion />
        <RightSection/>
      </div>
      
		</Layout>
	);
};

export default LandingPage;
