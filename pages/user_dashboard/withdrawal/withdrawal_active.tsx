import WithdrawalActive from '@/src/client/components/Auth/User/UserDashboard/Withdrawal/WithdrawalActive';
import type { NextPage } from 'next';

const WithdrawalActives: NextPage = (props) => (
	<div>
		<WithdrawalActive {...props} />
	</div>
);

export default WithdrawalActives;
