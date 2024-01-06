import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import Layout from "../../../Layout";
import DesktopUserDashboard from "./DesktopUserDashboard";
import MobileUserDashboard from "./MobileUserDashboard";

const UserDashboard = () => {
	return (
		<Layout>
			<DeviceDisplay
				mobileViewDisplay={<MobileUserDashboard/>}
				desktopViewDisplay={<DesktopUserDashboard />}
			/>
		</Layout>
	);
};
export default UserDashboard;
