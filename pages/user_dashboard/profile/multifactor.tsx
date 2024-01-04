import MultiFactor from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/UserProfile/Components/MultiFactor';
import type { NextPage } from 'next';

const MultiAuth: NextPage = (props) => (
	<div>
		<MultiFactor {...props} />
	</div>
);

export default MultiAuth;
