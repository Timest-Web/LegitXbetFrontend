import React, { useState } from 'react';
import Otp from '../Otp';
import SignUpSignIn from '../SignUpSignIn';

const DesktopModalView = ({selectedButton}:{selectedButton: string}) => {
	const [isFormSubmit, setIsFormSubmit] = useState(false);

	return !isFormSubmit ? (
		<SignUpSignIn setIsFormSubmit={setIsFormSubmit} selectedButton={selectedButton} />
	) : (
		<Otp />
	);
};

export default DesktopModalView;
