import Transaction from '@/src/client/components/Auth/User/UserDashboard/Transactions/Components/Transaction';
import type { NextPage } from 'next';

const Transactions: NextPage = (props) => (
	<div>
		<Transaction {...props} />
	</div>
);

export default Transactions;
