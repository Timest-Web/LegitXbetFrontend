import React, { SetStateAction, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AuthButton from '../AuthButton';
import SecureText from '../SecureText';
import { ToastContainer } from 'react-toastify';
import { signUpValidation } from './FormValidation';
import { useMutation } from '@tanstack/react-query';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import { InputField, Password, PhoneNumber, ResponseHint } from '../Input';
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';
import { signUp } from '@/src/helper/apis/services/auth/register.api';

type FormProps = {
	setInputPhoneNo: React.Dispatch<SetStateAction<string>>;
	setIsFormSubmit: React.Dispatch<SetStateAction<boolean>>;
};

const Register = ({ setInputPhoneNo, setIsFormSubmit }: FormProps) => {
	const [email, setEmail] = useState('');
	const { isMobile } = useDeviceType();
	const [fullname, setFullname] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState<{
		fullname?: string;
		email?: string;
		phoneNo?: string;
		password?: string;
	}>({});
	const values = { fullname, email, phoneNo, password };
	const validationErrors = signUpValidation({ values });
	const { mutateAsync, isPending } = useMutation({ mutationFn: signUp });

	const handleSubmit = () => {
		const formattedPhoneNo = phoneNo.startsWith('0')
			? `+234${phoneNo.slice(1)}`
			: `+234${phoneNo}`;
		const data = {
			name: fullname,
			email,
			phoneNumber: formattedPhoneNo,
			password,
		};

		if (Object.keys(validationErrors).length === 0) {
			mutateAsync(data).then((res: any) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						setIsFormSubmit(true);
						setInputPhoneNo(phoneNo);
					},
				});
			});
			setErrors({});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<form
			action='submit'
			className={`flex flex-col items-center justify-center px-8 ${
				isMobile ? 'space-y-2' : 'space-y-3'
			}`}>
			<ToastContainer />

			<div
				className={`flex ${
					isMobile ? 'flex-col space-y-2' : 'space-x-3'
				}`}>
				<div>
					<InputField
						type='text'
						label='Full Name'
						value={fullname}
						setValue={setFullname}
						placeHolder='Abu Godwin'
						borderHint={
							errors.fullname ? 'border border-red-600' : ''
						}
					/>
					{errors.fullname && <ResponseHint err={errors.fullname} />}
				</div>

				<div>
					<InputField
						type='email'
						label='Email'
						value={email}
						setValue={setEmail}
						placeHolder='youremail@gmail.com'
						borderHint={errors.email ? 'border border-red-600' : ''}
					/>
					{errors.email && <ResponseHint err={errors.email} />}
				</div>
			</div>

			<div
				className={`flex ${
					isMobile ? 'flex-col space-y-2' : 'space-x-3'
				}`}>
				<div>
					<PhoneNumber
						type='number'
						label='Mobile Number'
						value={phoneNo}
						setValue={setPhoneNo}
						placeHolder='e.g 80x xxxx xxxx'
						borderHint={
							errors.phoneNo ? 'border border-red-600' : ''
						}
					/>
					{errors.phoneNo && <ResponseHint err={errors.phoneNo} />}
				</div>

				<div>
					<Password
						type='password'
						label='Password'
						value={password}
						setValue={setPassword}
						placeHolder=''
						borderHint={
							errors.password ? 'border border-red-600' : ''
						}
					/>
					{errors.password && <ResponseHint err={errors.password} />}
				</div>
			</div>

			<SecureText />
			<AuthButton
				isPending={isPending}
				validationErrors={validationErrors}
				handleSubmit={handleSubmit}
				inputVerificationErrorsLength={0}
			/>
		</form>
	);
};

export default Register;
