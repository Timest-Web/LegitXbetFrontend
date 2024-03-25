import TicketDetails from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/TicketDetails";
import TicketDetailsOuterComp from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/TicketDetailsOuterComp";
import MobileTicketDetails from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileTicketDetail";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const TicketDetail: NextPage = (props) => (
  <div>
    <Head>
      <title>Bet History</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<TicketDetailsOuterComp {...props} />}
      mobileViewDisplay={<MobileTicketDetails {...props} />}
    />
  </div>
);

export default TicketDetail;
