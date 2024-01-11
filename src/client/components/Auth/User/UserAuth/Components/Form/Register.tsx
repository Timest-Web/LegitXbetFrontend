import React, { SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import SecureText from '../SecureText';
import Loader from '@/src/client/shared/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { Button } from '@/src/client/shared/Button';
import { signUpValidation } from './FormValidation';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '@/src/helper/api/auth';
import { InputField, Password, PhoneNumber, ResponseHint } from '../Input';
import useCreateSearchQuery from '@/src/client/shared/Hooks/useCreateParams';
import apiMessageHelper from '@/src/helper/apiMessageHelper';

type FormProps = {
	fullname: string;
	email: string;
	phoneNo: string;
	password: string;
	authType: string;
	setEmail: React.Dispatch<SetStateAction<string>>;
	setFullname: React.Dispatch<SetStateAction<string>>;
	setPhoneNo: React.Dispatch<SetStateAction<string>>;
	setPassword: React.Dispatch<SetStateAction<string>>;
	setIsFormSubmit: React.Dispatch<SetStateAction<boolean>>;
};

const Register = ({
	fullname,
	email,
	phoneNo,
	password,
	setFullname,
	setEmail,
	setPhoneNo,
	setPassword,
}: FormProps) => {
	const router = useRouter();
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
		const data = { name: fullname, email, phoneNumber: formattedPhoneNo, password };

		if (Object.keys(validationErrors).length === 0) {
			mutateAsync(data).then((res) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
				});
			});
			setErrors({});
		} else {
			setErrors(validationErrors)
		}
	};

	return (
		<form
			action='submit'
			className='flex flex-col items-center justify-center space-y-3 px-8'>
			<ToastContainer />

			<div className='flex space-x-3'>
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
						placeHolder='abugodwinaj@gmail.com'
						borderHint={errors.email ? 'border border-red-600' : ''}
					/>
					{errors.email && <ResponseHint err={errors.email} />}
				</div>
			</div>

			<div className='flex space-x-3'>
				<div>
					<PhoneNumber
						type='number'
						label='Mobile Number'
						value={phoneNo}
						setValue={setPhoneNo}
						placeHolder='e.g 0818 2175 9384'
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

			<Button
				text={
					isPending ? (
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
				} text-white py-2 px-6 w-[135px] rounded-md mt-8 text-xs`}
				onClick={handleSubmit}
			/>
		</form>
	);
};

export default Register;
