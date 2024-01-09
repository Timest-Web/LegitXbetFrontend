import Withdrawal from "@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/Withdrawal";
import type { NextPage } from "next";
import DeviceDisplay from "@/src/client/shared/Utils/DeviceDisplay";
import MobileWithdrawal from "@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileWithdrawal/MobileWithdrawal";
import Layout from "@/src/client/components/Layout";

const Withdrawals: NextPage = (props) => (
  <Layout>
    <DeviceDisplay
      mobileViewDisplay={<MobileWithdrawal {...props} />}
      desktopViewDisplay={<Withdrawal {...props} />}
    />
  </Layout>
);

export default Withdrawals;
