import ProfileKyc from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/ProfileKyc";
import MobileKycComp from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileKycComp";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const ProfileKycComp: NextPage = (props) => (
  <Layout>
    <DeviceDisplay
      desktopViewDisplay={<ProfileKyc {...props} />}
      mobileViewDisplay={<MobileKycComp />}
    />
  </Layout>
);

export default ProfileKycComp;
