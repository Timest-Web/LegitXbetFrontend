import type { NextPage } from 'next';
import BetHistoryActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistoryActive';
import MobileBetHistoryActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileBetHistoryActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';

const BetHistoryAct: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<BetHistoryActive {...props} />}
      mobileViewDisplay={<MobileBetHistoryActive {...props} />}
    />
  </Layout>
);

export default BetHistoryAct;
