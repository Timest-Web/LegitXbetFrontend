import Deposit from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/Deposit";
import DepositPaystack from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/DepositChannels/DepositPaystack";
import MobilePaystack from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobilePaystack";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const DepositforPaystack: NextPage = (props) => (
  <div>
  <Head>
    <title>Deposit</title>
  </Head> <DeviceDisplay
      desktopViewDisplay={<DepositPaystack {...props} />}
      mobileViewDisplay={<MobilePaystack {...props} />}
    />
 </div>
);

export default DepositforPaystack;
