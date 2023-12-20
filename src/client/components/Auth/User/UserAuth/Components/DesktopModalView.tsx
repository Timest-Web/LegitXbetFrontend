import React, { useState } from 'react';
import Otp from '../Otp';
import SignUpSignIn from '../SignUpSignIn';

const DesktopModalView = () => {
	const [isFormSubmit, setIsFormSubmit] = useState(false);

	return !isFormSubmit ? (
		<SignUpSignIn setIsFormSubmit={setIsFormSubmit} />
	) : (
		<Otp />
	);
};

export default DesktopModalView;
