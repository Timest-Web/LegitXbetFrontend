import React, { useState } from 'react';
import Otp from '../Otp';
import SignUpSignIn from '../SignUpSignIn';
import ModalContainer from './ModalContainer';
import ForgetPassword from '../ForgetPassword';
import { forgetPassword } from '@/src/helper/apis/services/auth/forget-password.api';


const AuthContent = ({ selectedButton }: { selectedButton: string }) => {
	const [isForgetPassword, setIsForgetPassword] = useState(false);
	const [isFormSubmit, setIsFormSubmit] = useState(false);
	const [inputPhoneNo, setInputPhoneNo] = useState('');

	return !isFormSubmit ? (
		!isForgetPassword ? (
			<SignUpSignIn
				setIsForgetPassword={setIsForgetPassword}
				setIsFormSubmit={setIsFormSubmit}
				setInputPhoneNo={setInputPhoneNo}
				selectedButton={selectedButton}
			/>
		) : (
			<ForgetPassword
				setIsForgetPassword={setIsForgetPassword}
			/>
		)
	) : (
		<ModalContainer>
			<Otp
				mutationFunction={forgetPassword}
				title='Verify Phone Number'
				phoneNo={inputPhoneNo}
				fieldsValue={6}
				msgValue='6'
			/>
		</ModalContainer>
	);
};

export default AuthContent;
