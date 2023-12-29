import type { NextPage } from 'next';
import UserProfile from '@/src/client/components/Auth/User/UserDashboard/UserProfile/Components/UserProfile';

const ProfileUpdates: NextPage = (props) => (
	<div>
		<UserProfile {...props} />
	</div>
);

export default ProfileUpdates;
