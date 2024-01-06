import UpdatePassword from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/UpdatePassword';
import type { NextPage } from 'next';

const ProfilePassword: NextPage = (props) => (
	<div>
		<UpdatePassword {...props} />
	</div>
);

export default ProfilePassword;
