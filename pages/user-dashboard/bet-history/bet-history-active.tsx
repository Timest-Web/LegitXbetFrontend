import type { NextPage } from "next";
import BetHistoryActive from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistoryActive";
import MobileBetHistoryActive from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileBetHistoryActive";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import Head from "next/head";

const BetHistoryAct: NextPage = (props) => (
  <div>
    <Head>
      <title>Bet History</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<BetHistoryActive {...props} />}
      mobileViewDisplay={<MobileBetHistoryActive {...props} />}
    />
  </div>
);

export default BetHistoryAct;
