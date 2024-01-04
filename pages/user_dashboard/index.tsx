import UserDashboard from '@/src/client/components/Auth/User/UserDashboard';
import type { NextPage } from 'next';

const UserDashboards: NextPage = (props) => (
	<div>
		<UserDashboard {...props} />
	</div>
);

export default UserDashboards;
