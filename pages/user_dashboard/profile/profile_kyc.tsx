import type { NextPage } from 'next';
import ProfileKyc from '@/src/client/components/Auth/User/UserDashboard/UserProfile/ProfileKyc';

const ProfileKycComp: NextPage = (props) => (
	<div>
		<ProfileKyc {...props} />
	</div>
);

export default ProfileKycComp;
