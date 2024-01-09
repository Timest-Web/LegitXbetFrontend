import TransactionActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Transactions/Components/TransactionActive';
import MobileTransactionActive from '@/src/client/components/Auth/User/UserDashboard/MobileUserDashboard/components/MobileTransactions/MobileTransactionActive';
import Layout from '@/src/client/components/Layout';
import DeviceDisplay from '@/src/client/shared/Utils/DeviceDisplay';
import type { NextPage } from 'next';

const TransactionAct: NextPage = (props) => (
	<Layout>
    <DeviceDisplay
      desktopViewDisplay={<TransactionActive {...props} />}
      mobileViewDisplay={<MobileTransactionActive {...props} />}
    />
  </Layout>
);

export default TransactionAct;
