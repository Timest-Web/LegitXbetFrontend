import Deposit from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/Deposit';
import MobileDepositInactive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobileDepositInactive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const Deposits: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<Deposit {...props} />}
      mobileViewDisplay={<MobileDepositInactive{...props} />}
    />

);

export default Deposits;
