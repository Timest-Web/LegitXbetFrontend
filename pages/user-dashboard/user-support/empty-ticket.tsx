import EmptySupportTicket from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Support/Components/EmptySupportTicket";
import MobileSupportEmpty from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileSupport/MobileSupportEmpty";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const EmptyTicket: NextPage = (props) => (

    <DeviceDisplay
      desktopViewDisplay={<EmptySupportTicket {...props} />}
      mobileViewDisplay={<MobileSupportEmpty {...props} />}
    />

);

export default EmptyTicket;
