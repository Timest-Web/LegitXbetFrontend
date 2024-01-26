import Transaction from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Transactions/Components/Transaction';
import MobileTransaction from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileTransactions/MobileTransaction';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const Transactions: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<Transaction {...props} />}
      mobileViewDisplay={<MobileTransaction {...props} />}
    />
);

export default Transactions;
