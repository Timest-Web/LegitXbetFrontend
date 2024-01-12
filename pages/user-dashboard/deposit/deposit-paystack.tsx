import Deposit from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/Deposit";
import DepositPaystack from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/DepositChannels/DepositPaystack";
import Layout from "@/src/client/components/Layout";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import type { NextPage } from "next";

const DepositforPaystack: NextPage = (props) => (
  <Layout>
    <DepositPaystack {...props} />
  </Layout>
);

export default DepositforPaystack;
