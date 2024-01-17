import Deposit from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/Deposit";
import DepositFlutterwave from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/DepositChannels/DepositFlutterwave";
import MobileFlutterwave from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobileFlutterwave";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const DepositforFlutterwave: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<DepositFlutterwave {...props} />}
      mobileViewDisplay={<MobileFlutterwave {...props} />}
    />
  </Layout>
);

export default DepositforFlutterwave;
