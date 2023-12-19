import React, { SetStateAction, useState } from 'react';
import Lock from '@/src/client/shared/Svg/Lock';
import { Button } from '@/src/client/shared/Button';
import { formValidation } from './FormValidation';
import { ToastContainer } from 'react-toastify';
import { Password, PhoneNumber, ResponseHint } from '../Input';

type FormProps = {
	phoneNo: string;
	password: string;
	authType: string;
	handleSubmit: Function;
	setPhoneNo: React.Dispatch<SetStateAction<string>>;
	setPassword: React.Dispatch<SetStateAction<string>>;
};

const Form = ({
	phoneNo,
	password,
	setPhoneNo,
	setPassword,
	handleSubmit,
}: FormProps) => {
	const [errors, setErrors] = useState<{
		phoneNo?: string;
		password?: string;
	}>({});

	const handleFormSubmit = () => {
		const values = { phoneNo, password };
		const validationErrors = formValidation({ values });

		if (Object.keys(validationErrors).length === 0) {
			setErrors({});
			console.log('Form is valid. Submitting...');
		} else {
			setErrors(validationErrors);
			console.log(errors);
			console.log('Form is invalid. Please correct the errors.');
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

			<div className='flex items-center justify-center space-x-2 mt-4'>
				<Lock />
				<p className='text-gray-400 text-[11px]'>
					Secure password has numbers and character sets
				</p>
			</div>

			<Button
				text='Continue'
				link='#'
				className='text-white py-2 px-6 w-[155px] rounded-md bg-black mt-8 text-xs'
				onClick={handleFormSubmit}
			/>
		</form>
	);
};

export default Form;
