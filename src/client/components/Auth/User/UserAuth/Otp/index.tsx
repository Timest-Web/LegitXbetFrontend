import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';
import Lock from '@/src/client/shared/Svg/Lock';
import AuthOtpCodeInput from '../Components/AuthCode';
import AuthButton from '../Components/AuthButton';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import useCountdown from '@/src/client/shared/Hooks/useCountDown';

type ApiResponse = {
	message: string;
	statusCode: number;
};

type MyMutationFunctionType = (data: {
	phoneNumber: string;
	code: string;
	newPassword?: string;
}) => Promise<ApiResponse>;

type OtpProps = {
	title: string;
	phoneNo: string;
	msgValue: string;
	fieldsValue: number;
	mutationFunction: MyMutationFunctionType;
};

const Otp = ({ title, phoneNo, msgValue, fieldsValue, mutationFunction }: OtpProps) => {
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
	const { mutateAsync, isPending } = useMutation({mutationFn: mutationFunction});
	const handleSubmit = () => {
		const data = { phoneNumber: phoneNo, code };
		if (inputOtpValue.length === fieldsValue) {
			mutateAsync(data).then((res) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						push('/user-dashboard');
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
		<div className='px-8'>
			<div className='cursor-default text-sm text-center'>
				<p className='font-bold py-2 text-[18px]'>{title}</p>
				<p className='text-gray-600'>
					{`We've sent ${msgValue}-digit code to ${formattedPhoneNo}`}
				</p>
			</div>
			<div className='flex items-center justify-start space-x-2 mt-6 w-full cursor-default'>
				<Lock />
				<p className='font-bold text-sm'>OTP Verification</p>
			</div>
			<ToastContainer />

			<div className='flex flex-col items-center justify-center mt-4'>
				<AuthOtpCodeInput
					fieldsNumber={fieldsValue}
					setInputOtpValue={setInputOtpValue}
				/>

				<p className='text-xs text-gray-400 mt-6 cursor-default'>
					{`Enter ${msgValue} digit`}
					<span className='font-bold text-black'>OTP </span> secured
					pin sent to your number
				</p>
				<div className='flex items-center justify-between text-gray-400 text-xs space-x-4 mt-6 w-full'>
					<p className='font-bold text-black cursor-default'>
						{formatTime()}
					</p>
					<p className='text-gray-400 cursor-default'>
						{` Didn't get ${msgValue} digit code `}
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
	);
};

export default Otp;
