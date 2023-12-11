import React, { useState } from 'react';
import Otp from '../Otp';
import SignUpSignIn from '../SignUpSignIn';

const DesktopModalView = () => {
	const [submitForm, setSubmitForm] = useState(false);

	return !submitForm ? (
		<SignUpSignIn setSubmitForm={setSubmitForm} />
	) : (
		<Otp />
	);
};

export default DesktopModalView;
