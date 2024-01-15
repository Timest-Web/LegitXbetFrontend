import React, { useState } from 'react';
import Otp from '../Otp';
import SignUpSignIn from '../SignUpSignIn';

const DesktopModalView = ({selectedButton}:{selectedButton: string}) => {
	const [isFormSubmit, setIsFormSubmit] = useState(false);
	const [inputPhoneNo, setInputPhoneNo] = useState('');
	return !isFormSubmit ? (
		<SignUpSignIn
			setIsFormSubmit={setIsFormSubmit}
			setInputPhoneNo={setInputPhoneNo}
			selectedButton={selectedButton}
		/>
	) : (
			<Otp phoneNo={inputPhoneNo} />
	);
};

export default DesktopModalView;
