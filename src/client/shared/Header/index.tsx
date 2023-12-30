import React from 'react';
import DeviceDisplay from '../Utils/DeviceDisplay';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

const Header = () => {
	return (
		<DeviceDisplay
			mobileViewDisplay={<MobileHeader />}
			desktopViewDisplay={<DesktopHeader />}
		/>
	);
};
export default Header;
