import MultiFactor from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/MultiFactor";
import MobileMultiFactor from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileProfileDashboard/MobileMultiFactor";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const MultiAuth: NextPage = (props) => (

    <DeviceDisplay
      desktopViewDisplay={<MultiFactor {...props} />}
      mobileViewDisplay={<MobileMultiFactor {...props} />}
    />
);

export default MultiAuth;
