import EmptySupportTicket from '@/src/client/components/Auth/User/UserDashboard/DesktopUserDashboard/components/Support/Components/EmptySupportTicket';
import type { NextPage } from 'next';

const EmptyTicket: NextPage = (props) => (
	<div>
		<EmptySupportTicket {...props} />
	</div>
);

export default EmptyTicket;
