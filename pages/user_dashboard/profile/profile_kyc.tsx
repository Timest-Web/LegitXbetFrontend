import ProfileKyc from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/UserProfile/Components/ProfileKyc';
import type { NextPage } from 'next';

const ProfileKycComp: NextPage = (props) => (
	<div>
		<ProfileKyc {...props} />
	</div>
);

export default ProfileKycComp;
