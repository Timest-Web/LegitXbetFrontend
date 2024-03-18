import Deposit from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/Deposit";
import MobileDepositInactive from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobileDepositInactive";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";
import Head from "next/head";

const Deposits: NextPage = (props) => (
  <div>
    <Head>
      <title>Deposit</title>
    </Head>
    <DeviceDisplay
      desktopViewDisplay={<Deposit {...props} />}
      mobileViewDisplay={<MobileDepositInactive {...props} />}
    />
  </div>
);

export default Deposits;
