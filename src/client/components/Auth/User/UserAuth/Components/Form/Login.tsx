import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import SecureText from '../SecureText';
import { ToastContainer } from 'react-toastify';
import { signInValidation } from './FormValidation';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/src/helper/api/auth';
import { Password, PhoneNumber, ResponseHint } from '../Input';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import AuthButton from '../AuthButton';

const Login = () => {
	const { push } = useRouter();
	const [password, setPassword] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [errors, setErrors] = useState<{
		phoneNo?: string;
		password?: string;
	}>({});

	const values = { phoneNo, password };
	const validationErrors = signInValidation({ values });
	const { mutateAsync, isPending } = useMutation({ mutationFn: signIn });

	const handleSubmit = () => {
		const formattedPhoneNo = phoneNo.startsWith('0')
			? `+234${phoneNo.slice(1)}`
			: `+234${phoneNo}`;
		const data = { phoneNumber: formattedPhoneNo, password };

		if (Object.keys(validationErrors).length === 0) {
			mutateAsync(data).then((res) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						push('/user_dashboard');
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
			className='flex flex-col items-center justify-center space-y-3'>
			<ToastContainer />

			<div>
				<PhoneNumber
					type='number'
					label='Mobile Number'
					value={phoneNo}
					setValue={setPhoneNo}
					placeHolder='e.g 0818 2175 9384'
					borderHint={errors.phoneNo ? 'border border-red-600' : ''}
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
					borderHint={errors.password ? 'border border-red-600' : ''}
				/>
				{errors.password && <ResponseHint err={errors.password} />}
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

export default Login;
