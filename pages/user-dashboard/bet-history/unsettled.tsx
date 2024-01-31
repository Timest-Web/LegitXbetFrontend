import BetHistory from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistory';
import BetHistoryUnsettled from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistoryUnsettled';
import LayoutDashboard from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/LayoutDashboard';
import MobileBetHistoryInactive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileBetHistory/MobileBetHistoryInactive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const BetUnsettled: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<LayoutDashboard content={<BetHistoryUnsettled {...props} />}/>}
      mobileViewDisplay={<MobileBetHistoryInactive {...props} />}
    />
);

export default BetUnsettled;
