import Notifications from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Overview/Components/Notifications";
import MobileNotification from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileOverview/MobileNotification";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const Notification: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<Notifications {...props} />}
      mobileViewDisplay={<MobileNotification />}
    />
);

export default Notification;
