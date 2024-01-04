import BetHistoryActive from '@/src/client/components/Auth/User/UserDashboard/BetHistory/Components/BetHistoryActive';
import type { NextPage } from 'next';

const BetHistoryAct: NextPage = (props) => (
	<div>
		<BetHistoryActive {...props} />
	</div>
);

export default BetHistoryAct;
