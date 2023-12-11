import React from 'react';
import Lock from '@/src/client/shared/Svg/Lock';
import { Button } from '@/src/client/shared/Button';
import ModalContainer from '../Components/ModalContainer';
import AuthOtpCodeInput from '../Components/AuthCode';
import Link from 'next/link';

const Otp = () => {
	const handleSubmit = () => {
		console.log('Send otp');	
	}

	return (
		<ModalContainer>
			<p className='text-gray-600 cursor-default'>{`We've have sent you a 6-digit code +2349000000000`}</p>
			<div className='flex items-center justify-start space-x-2 mt-6 w-full cursor-default'>
				<Lock />
				<p className='font-bold'>Otp Verification</p>
			</div>

			<div className='flex flex-col items-center justify-center mt-4'>
				<AuthOtpCodeInput />
				<p className='text-sm text-gray-400 mt-6 cursor-default'>
					Enter 4 digit OTP secured pin sent to your number
				</p>
				<div className='flex items-center justify-between text-gray-400 text-sm space-x-4 mt-6 w-full'>
					<p className='font-bold text-black cursor-default'>4:00</p>
					<p className='text-gray-400 cursor-default'>
						{` I didn't get 4 digit code `}
						<Link
							href='#'
							className='text-black font-bold underline text-sm'>
							{' '}
							Resend Otp
						</Link>
					</p>
				</div>

				<Button
					text='Continue'
					link='#'
					className='text-white py-2 px-6 w-[155px] rounded-md bg-black mt-20 text-sm'
					onClick={handleSubmit}
				/>
			</div>
		</ModalContainer>
	);
};

export default Otp;
