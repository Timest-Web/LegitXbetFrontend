import EmptySupportTicket from '@/src/client/components/Auth/User/UserDashboard/Support/EmptySupportTicket';
import type { NextPage } from 'next';

const EmptyTicket: NextPage = (props) => (
	<div>
		<EmptySupportTicket {...props} />
	</div>
);

export default EmptyTicket;
