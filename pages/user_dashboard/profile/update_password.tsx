import UpdatePassword from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/UserProfile/Components/UpdatePassword';
import type { NextPage } from 'next';

const ProfilePassword: NextPage = (props) => (
	<div>
		<UpdatePassword {...props} />
	</div>
);

export default ProfilePassword;
