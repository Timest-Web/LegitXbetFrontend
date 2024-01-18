import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Lock from '@/src/client/shared/Svg/Lock';
import AuthOtpCodeInput from '../Components/AuthCode';
import 'react-toastify/dist/ReactToastify.css';
import AuthButton from '../Components/AuthButton';
import { useMutation } from '@tanstack/react-query';
import { otpVerification } from '@/src/helper/api/auth';
import { ToastContainer } from 'react-toastify';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import ModalContainer from '../Components/ModalContainer';
import useCountdown from '@/src/client/shared/Hooks/useCountDown';

const Otp = ({ phoneNo }: { phoneNo: string }) => {
	const { push } = useRouter();
	const [inputOtpValue, setInputOtpValue] = useState('');
	const formattedPhoneNo = phoneNo.startsWith('0')
		? `+234${phoneNo.slice(1)}`
		: `+234${phoneNo}`;
	const { countdown, startCountdown } = useCountdown({
		initialSeconds: 240,
		initialActive: true,
	});
	const code = inputOtpValue;
	const { mutateAsync, isPending } = useMutation({
		mutationFn: otpVerification,
	});
	const handleSubmit = () => {
		const data = { phoneNumber: phoneNo, code };
		if (inputOtpValue.length === 6) {
			console.log('request sent', data);
			mutateAsync(data).then((res) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						push('/user_dashboard');
					},
				});
			});
		}
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
				<div className='cursor-default text-sm text-center'>
					<p className='font-bold py-2 text-[18px]'>
						Verify Mobile Number
					</p>
					<p className='text-gray-600'>
						{`We've sent 6-digit code to ${formattedPhoneNo}`}
					</p>
				</div>
				<div className='flex items-center justify-start space-x-2 mt-6 w-full cursor-default'>
					<Lock />
					<p className='font-bold text-sm'>OTP Verification</p>
				</div>
				<ToastContainer />

				<div className='flex flex-col items-center justify-center mt-4'>
					<AuthOtpCodeInput setInputOtpValue={setInputOtpValue} />

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
							{` Didn't get 6 digit code `}
							<button
								className='text-black font-bold underline text-xs'
								onClick={countdown > 0 ? undefined : resendOtp}>
								{' '}
								Resend OTP
							</button>
						</p>
					</div>

					<AuthButton
						isPending={isPending}
						validationErrors={inputOtpValue}
						handleSubmit={handleSubmit}
						inputVerificationErrorsLength={6}
					/>
				</div>
			</div>
		</ModalContainer>
	);
};

export default Otp;
