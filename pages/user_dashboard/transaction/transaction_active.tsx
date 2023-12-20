import TransactionActive from '@/src/client/components/Auth/User/UserDashboard/Transactions/TransactionActive';
import type { NextPage } from 'next';

const TransactionAct: NextPage = (props) => (
	<div>
		<TransactionActive {...props} />
	</div>
);

export default TransactionAct;
