import TransactionActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Transactions/Components/TransactionActive';
import type { NextPage } from 'next';

const TransactionAct: NextPage = (props) => (
	<div>
		<TransactionActive {...props} />
	</div>
);

export default TransactionAct;
