import UploadedDocuments from '@/src/client/components/Auth/User/UserDashboard/Overview/Components/UploadedDocuments';
import type { NextPage } from 'next';

const UploadedDocument: NextPage = (props) => (
	<div>
		<UploadedDocuments {...props} />
	</div>
);

export default UploadedDocument;
