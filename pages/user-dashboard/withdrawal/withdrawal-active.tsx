import WithdrawalActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Withdrawal/Components/WithdrawalActive';
import MobileWithdrawalActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileWithdrawal/MobileWithdrawalActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const WithdrawalActives: NextPage = (props) => (
    <DeviceDisplay
      mobileViewDisplay={<MobileWithdrawalActive {...props} />}
      desktopViewDisplay={<WithdrawalActive {...props} />}
    />
);

export default WithdrawalActives;
