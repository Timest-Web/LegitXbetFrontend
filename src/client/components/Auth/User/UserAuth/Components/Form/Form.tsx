import React, { SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import SecureText from '../SecureText';
import Loader from '@/src/client/shared/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { Button } from '@/src/client/shared/Button';
import { formValidation } from './FormValidation';
import { useMutation } from '@tanstack/react-query';
import { signIn, signUp } from '@/src/helper/api/auth';
import { ErrorToast } from '@/src/client/shared/ToastBar';
import { Password, PhoneNumber, ResponseHint } from '../Input';

type FormProps = {
	phoneNo: string;
	password: string;
	authType: string;
	setPhoneNo: React.Dispatch<SetStateAction<string>>;
	setPassword: React.Dispatch<SetStateAction<string>>;
	setIsFormSubmit: React.Dispatch<SetStateAction<boolean>>;
};

const Form = ({
	authType,
	phoneNo,
	password,
	setPhoneNo,
	setPassword,
	setIsFormSubmit,
}: FormProps) => {
	const router = useRouter();
	const [errors, setErrors] = useState<{
		phoneNo?: string;
		password?: string;
	}>({});

	const values = { phoneNo, password };
	const validationErrors = formValidation({ values });
	const signUpMutation = useMutation({ mutationFn: signUp });
	const signInMutation = useMutation({ mutationFn: signIn });

	const handleFormSubmit = async () => {
		if (Object.keys(validationErrors).length === 0) {
			const formattedPhoneNo = phoneNo.startsWith('0')
				? `+234${phoneNo.slice(1)}`
				: `+234${phoneNo}`;
			const valueEnter = { phoneNumber: formattedPhoneNo, password };
			console.log(valueEnter);
			setErrors({});
			if (authType === 'Register Account') {
				const payload = await signUpMutation.mutateAsync(valueEnter);
				if (payload.message.toLowerCase().includes('exist')) {
					ErrorToast(payload?.message);
				} else if (payload.message.toLowerCase().includes('successfully')) {
					setIsFormSubmit(true);
				} else {
					ErrorToast('Bad Network');
				}

			} else {
				const payload = await signInMutation.mutateAsync(valueEnter);
				if (payload.message.toLowerCase().includes('invalid')) {
					ErrorToast('Invalid Credential');
				} else if (payload.message.toLowerCase().includes('successful')) {
					router.reload();
				} else {
					ErrorToast('Bad Network');
				}
			}
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
					placeHolder='e.g +234 818 217 59384'
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

			<Button
				text={
					signUpMutation.isPending ? (
						<Loader
							height={16}
							width={16}
						/>
					) : (
						'Continue'
					)
				}
				link='#'
				className={` ${
					Object.keys(validationErrors).length === 0
						? 'bg-black text-white'
						: 'bg-gray-400 text-gray-700 disabled'
				} text-white py-2 px-6 w-[155px] rounded-md mt-8 text-xs`}
				onClick={handleFormSubmit}
			/>
		</form>
	);
};

export default Form;
