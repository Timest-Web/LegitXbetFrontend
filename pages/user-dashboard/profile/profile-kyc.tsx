import ProfileKyc from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/ProfileKyc";
import MobileKycComp from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileKycComp";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const ProfileKycComp: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<ProfileKyc {...props} />}
      mobileViewDisplay={<MobileKycComp />}
    />
);

export default ProfileKycComp;
