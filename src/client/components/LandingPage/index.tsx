import React from 'react';
import DeviceDisplay from '../../shared/Utils/DeviceDisplay';
import MobileLandingPage from './MobileLandingPage';
import DesktopLandingPage from './DesktopLandingPage';
import Layout from '../Layout';

const LandingPage = () => {
	return (
		<Layout>
			<DeviceDisplay
				mobileViewDisplay={<MobileLandingPage />}
				desktopViewDisplay={<DesktopLandingPage />}
			/>
		</Layout>
	);
};
export default LandingPage;
