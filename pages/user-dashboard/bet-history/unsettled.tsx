import BetHistory from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistory";
import BetHistoryUnsettled from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistoryUnsettled";
import LayoutDashboard from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/LayoutDashboard";
import MobileBetHistoryInactive from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileBetHistoryInactive";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const BetUnsettled: NextPage = (props) => (
  <div>
    <Head>
      <title>Bet History</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={
        <LayoutDashboard content={<BetHistoryUnsettled {...props} />} />
      }
      mobileViewDisplay={<MobileBetHistoryInactive {...props} />}
    />
  </div>
);

export default BetUnsettled;
