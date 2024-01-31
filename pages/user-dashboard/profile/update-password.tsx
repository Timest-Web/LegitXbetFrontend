import UpdatePassword from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/UpdatePassword";
import MobileUpdatePassword from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileUpdatePassword";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const ProfilePassword: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<UpdatePassword {...props} />}
      mobileViewDisplay={<MobileUpdatePassword {...props} />}
    />
);

export default ProfilePassword;
