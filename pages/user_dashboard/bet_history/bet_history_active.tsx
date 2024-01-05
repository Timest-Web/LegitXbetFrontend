import type { NextPage } from 'next';
import BetHistoryActive from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/BetHistory/Components/BetHistoryActive';

const BetHistoryAct: NextPage = (props) => (
	<div>
		<BetHistoryActive {...props} />
	</div>
);

export default BetHistoryAct;
