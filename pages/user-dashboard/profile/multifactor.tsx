import MultiFactor from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/MultiFactor";
import MobileMultiFactor from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileMultiFactor";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const MultiAuth: NextPage = (props) => (
  <div>
    <Head>
      <title>Profile - 2FA</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<MultiFactor {...props} />}
      mobileViewDisplay={<MobileMultiFactor {...props} />}
    />
    </div>
);

export default MultiAuth;
