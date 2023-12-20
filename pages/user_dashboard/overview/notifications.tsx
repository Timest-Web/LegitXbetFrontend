import Notifications from '@/src/client/components/Auth/User/UserDashboard/Overview/Notifications';
import type { NextPage } from 'next';

const Notification: NextPage = (props) => (
	<div>
		<Notifications {...props} />
	</div>
);

export default Notification;
