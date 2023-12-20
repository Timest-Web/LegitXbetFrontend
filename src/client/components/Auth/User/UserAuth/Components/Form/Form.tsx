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
import { Password, PhoneNumber, ResponseHint } from '../Input';
import { handleFormSubmit } from '@/src/client/shared/Utils/FormUtils';

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

	const handleSubmit = () => {
		handleFormSubmit({
			authType,
			phoneNo,
			password,
			setPhoneNo,
			setPassword,
			setIsFormSubmit,
			setErrors,
			signUpMutation,
			signInMutation,
			router,
			validationErrors,
		});
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
				onClick={handleSubmit}
			/>
		</form>
	);
};

export default Form;
