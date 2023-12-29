import type { NextPage } from 'next';
import MultiFactor from '@/src/client/components/Auth/User/UserDashboard/UserProfile/Components/MultiFactor';

const MultiAuth: NextPage = (props) => (
	<div>
		<MultiFactor {...props} />
	</div>
);

export default MultiAuth;
