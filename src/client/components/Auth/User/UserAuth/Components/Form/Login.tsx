import React, { SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import SecureText from '../SecureText';
import { ToastContainer } from 'react-toastify';
import { signInValidation } from './FormValidation';
import { useMutation } from '@tanstack/react-query';
import { Password, PhoneNumber, ResponseHint } from '../Input';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import AuthButton from '../AuthButton';
import { signIn } from '@/src/helper/apis/services/auth/login.api';
import { useFormattedPhoneNo } from '@/src/client/shared/Hooks/useFormattedPhoneNo';

const Login = ({
	setIsForgetPassword,
}: {
	setIsForgetPassword: React.Dispatch<SetStateAction<boolean>>;
}) => {
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
	const { formattedPhoneNo } = useFormattedPhoneNo({ phoneNo });

	const handleSubmit = () => {
		const data = { phoneNumber: formattedPhoneNo, password };
		if (Object.keys(validationErrors).length === 0) {
			mutateAsync(data).then((res: any) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						push('/user_dashboard');
					},
				});

				localStorage.setItem(
					'access',
					JSON.stringify({ accessToken: res?.accessToken })
				);
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
					placeHolder='e.g 08x xxxx xxxx'
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
			<SecureText setIsForgetPassword={setIsForgetPassword} />
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
