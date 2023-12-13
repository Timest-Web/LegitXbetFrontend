import React from 'react';
import Lock from '@/src/client/shared/Svg/Lock';
import { Button } from '@/src/client/shared/Button';
import AuthOtpCodeInput from '../Components/AuthCode';
import ModalContainer from '../Components/ModalContainer';
import useCountdown from '@/src/client/shared/Hooks/useCountDown';

const Otp = () => {
	const { countdown, startCountdown } = useCountdown({
		initialSeconds: 240,
		initialActive: true,
	});

	const handleSubmit = () => {
		console.log('Send otp');
	};

	const resendOtp = () => {
		startCountdown();
	};

	const formatTime = () => {
		const minutes = Math.floor(countdown / 60);
		const seconds = countdown % 60;
		return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
			2,
			'0'
		)}`;
	};

	return (
		<ModalContainer>
			<div className='px-8'>
				<p className='text-gray-600 cursor-default text-sm text-center'>{`We've have sent you a 6-digit code +2349000000000`}</p>
				<div className='flex items-center justify-start space-x-2 mt-6 w-full cursor-default'>
					<Lock />
					<p className='font-bold text-sm'>Otp Verification</p>
				</div>

				<div className='flex flex-col items-center justify-center mt-4'>
					<AuthOtpCodeInput />
					<p className='text-xs text-gray-400 mt-6 cursor-default'>
						Enter 6 digit{' '}
						<span className='font-bold text-black'>OTP </span>{' '}
						secured pin sent to your number
					</p>
					<div className='flex items-center justify-between text-gray-400 text-xs space-x-4 mt-6 w-full'>
						<p className='font-bold text-black cursor-default'>
							{formatTime()}
						</p>
						<p className='text-gray-400 cursor-default'>
							{` I didn't get 6 digit code `}
							<button
								className='text-black font-bold underline text-xs'
								onClick={countdown > 0 ? undefined : resendOtp}>
								{' '}
								Resend Otp
							</button>
						</p>
					</div>

					<Button
						text='Continue'
						link='#'
						className='text-white py-2 px-6 w-[155px] rounded-md bg-black mt-20 text-sm'
						onClick={handleSubmit}
					/>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Otp;
