import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import DesktopUserDashboard from './DesktopUserDashboard';
import MobileUserDeshboard from './MobileUserDashboard';

const UserDashboard = () => {
	return (
		<DeviceDisplay
			mobileViewDisplay={<MobileUserDeshboard />}
			desktopViewDisplay={<DesktopUserDashboard />}
		/>
	);
};
export default UserDashboard;
