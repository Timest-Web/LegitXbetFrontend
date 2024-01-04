import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import Layout from "../../../Layout";
import DesktopUserDashboard from "./DesktopUserDashboard";
import MobileUserDeshboard from "./MobileUserDashboard";

const UserDashboard = () => {
	return (
		<Layout>
			<DeviceDisplay
				mobileViewDisplay={<MobileUserDeshboard/>}
				desktopViewDisplay={<DesktopUserDashboard />}
			/>
		</Layout>
	);
};
export default UserDashboard;
