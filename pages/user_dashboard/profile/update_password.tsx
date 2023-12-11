import type { NextPage } from 'next';
import UpdatePassword from '@/src/client/components/Auth/User/UserDashboard/UserProfile/UpdatePassword';

const ProfilePassword: NextPage = (props) => (
	<div>
		<UpdatePassword {...props} />
	</div>
);

export default ProfilePassword;
