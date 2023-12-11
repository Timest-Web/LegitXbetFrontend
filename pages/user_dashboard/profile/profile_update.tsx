import type { NextPage } from 'next';
import ProfileUpdate from '@/src/client/components/Auth/User/UserDashboard/UserProfile/ProfileUpdate';
import UserProfile from '@/src/client/components/Auth/User/UserDashboard/UserProfile/UserProfile';

const ProfileUpdates: NextPage = (props) => (
	<div>
		<UserProfile {...props} />
	</div>
);

export default ProfileUpdates;
