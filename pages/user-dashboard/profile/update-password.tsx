import UpdatePassword from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/UpdatePassword";
import MobileUpdatePassword from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileUpdatePassword";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const ProfilePassword: NextPage = (props) => (
  <div>
    <Head>
      <title>Update Password</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<UpdatePassword {...props} />}
      mobileViewDisplay={<MobileUpdatePassword {...props} />}
    />
  </div>
);

export default ProfilePassword;
