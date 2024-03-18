import DepositActiveContent from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/DepositActive/DepositActiveContent';
import MobileDepositActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobileDepositActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';
import Head from 'next/head';

const DepositActives: NextPage = (props) => (
  <div>
  <Head>
    <title>Deposit History</title>
  </Head>
    <DeviceDisplay
      desktopViewDisplay={<DepositActiveContent {...props} />}
      mobileViewDisplay={<MobileDepositActive {...props} />}
    />
  </div>
);

export default DepositActives;
