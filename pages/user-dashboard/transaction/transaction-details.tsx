import Transaction from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Transactions/Components/Transaction';
import LayoutDashboard from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/shared/LayoutDashboard';
import MobileTransaction from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileTransactions/MobileTransaction';
import TransactionDetails from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Transactions/Components/TransactionDetails';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const TransactionsDetail: NextPage = (props) => (
    <DeviceDisplay
      desktopViewDisplay={<LayoutDashboard content={<TransactionDetails {...props} />}/> }
      mobileViewDisplay={<TransactionDetails {...props} />}
    />
);

export default TransactionsDetail;
