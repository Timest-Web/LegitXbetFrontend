import { Button } from '@/src/client/shared/Button';
import Lock from '@/src/client/shared/Svg/Lock';
import React, { SetStateAction } from 'react';

type FormProps = {
	phoneNo: string;
	password: string;
	setPhoneNo: React.Dispatch<SetStateAction<string>>;
	setPassword: React.Dispatch<SetStateAction<string>>;
	handleSubmit: Function;
};

const Form = ({
	phoneNo,
	password,
	setPhoneNo,
	setPassword,
	handleSubmit,
}: FormProps) => {
	return (
		<form
			action='submit'
			className='flex flex-col items-center justify-center'>
			<div className='flex flex-col space-y-2'>
				<p className='font-bold pl-6'>Mobile Number</p>
				<input
					type='number'
					value={phoneNo}
					onChange={(e) => setPhoneNo(e.target.value)}
					placeholder='e.g +234 818 217 59384'
					className='bg-gray-100 py-4 px-5 rounded-lg w-96 borderless-input text-sm'
				/>
			</div>

			<div className='flex flex-col space-y-2 mt-6'>
				<p className='font-bold pl-6'>Password</p>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					className='bg-gray-100 py-4 px-5 rounded-lg w-96 borderless-input text-sm'
				/>
			</div>

			<div className='flex items-center justify-center space-x-2 mt-4'>
				<Lock />
				<p className='text-gray-400 text-xs'>
					Secure password has numbers and character sets
				</p>
			</div>

			<Button
				text='Continue'
				link='#'
				className='text-white py-2 px-6 w-[155px] rounded-md bg-black mt-8 text-sm'
				onClick={handleSubmit}
			/>
		</form>
	);
};

export default Form;
