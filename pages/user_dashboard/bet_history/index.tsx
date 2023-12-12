import BetHistory from '@/src/client/components/Auth/User/UserDashboard/BetHistory/BetHistory';
import type { NextPage } from 'next';

const BetHistories: NextPage = (props) => (
	<div>
		<BetHistory {...props} />
	</div>
);

export default BetHistories;
