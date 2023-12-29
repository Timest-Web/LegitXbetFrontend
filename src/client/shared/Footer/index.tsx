import React from 'react';
import DeviceDisplay from '../Utils/DeviceDisplay';
import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

const Footer = () => {
	return (
		<DeviceDisplay
			mobileViewDisplay={<MobileFooter />}
			desktopViewDisplay={<DesktopFooter />}
		/>
	);
};
export default Footer;
