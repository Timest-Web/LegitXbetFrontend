import BetHistory from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistory';
import MobileBetHistoryInactive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileBetHistoryInactive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const BetHistories: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<BetHistory {...props} />}
      mobileViewDisplay={<MobileBetHistoryInactive {...props} />}
    />
  </Layout>
);

export default BetHistories;
