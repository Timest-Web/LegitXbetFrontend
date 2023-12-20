import BonusActive from '@/src/client/components/Auth/User/UserDashboard/Bonus/BonusActive';
import type { NextPage } from 'next';

const BonusAct: NextPage = (props) => (
	<div>
		<BonusActive {...props} />
	</div>
);

export default BonusAct;
