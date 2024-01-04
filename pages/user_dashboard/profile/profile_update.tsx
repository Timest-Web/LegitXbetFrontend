import UserProfile from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/UserProfile';
import type { NextPage } from 'next';

const ProfileUpdates: NextPage = (props) => (
	<div>
		<UserProfile {...props} />
	</div>
);

export default ProfileUpdates;
