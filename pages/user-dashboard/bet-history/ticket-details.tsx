import TicketDetails from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/TicketDetails";
import TicketDetailsOuterComp from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/TicketDetailsOuterComp";
import MobileTicketDetails from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileTicketDetail";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const TicketDetail: NextPage = (props) => (
  <DeviceDisplay
    desktopViewDisplay={<TicketDetailsOuterComp {...props} />}
    mobileViewDisplay={<MobileTicketDetails {...props} />}
  />
);

export default TicketDetail;
