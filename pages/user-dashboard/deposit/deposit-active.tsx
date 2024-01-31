import DepositActiveContent from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Deposit/Components/DepositActive/DepositActiveContent';
import MobileDepositActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileDeposit/MobileDepositActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const DepositActives: NextPage = (props) => (
	
    <DeviceDisplay
      desktopViewDisplay={<DepositActiveContent {...props} />}
      mobileViewDisplay={<MobileDepositActive {...props} />}
    />
  
);

export default DepositActives;
