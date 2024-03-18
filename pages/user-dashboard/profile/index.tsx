import UserProfile from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components";
import type { NextPage } from "next";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import MobileProfile from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileProfile";
import Layout from "@/src/client/components/Layout";
import Head from "next/head";

const ProfileUpdates: NextPage = (props) => (
  <div>
    <Head>
      <title>Profile</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<UserProfile {...props} />}
      mobileViewDisplay={<MobileProfile {...props} />}
    />
  </div>
);

export default ProfileUpdates;
