import React, { SetStateAction, useState } from 'react';
import Otp from '../Otp';
import Lock from '@/src/client/shared/Svg/Lock';
import 'react-toastify/dist/ReactToastify.css';
import AuthButton from '../Components/AuthButton';
import ModalContainer from '../Components/ModalContainer';
import apiMessageHelper from '@/src/helper/apiMessageHelper';
import { useMutation } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { PhoneNumber, ResponseHint } from '../Components/Input';
import { resetPassword } from '@/src/helper/apis/services/auth/reset-password.api';
import { forgetPassword } from '@/src/helper/apis/services/auth/forget-password.api';
import { ArrowsLeftCurved } from '@heathmont/moon-icons-tw';
import { forgetPasswordValidation } from '../Components/Form/FormValidation';
import { useFormattedPhoneNo } from '@/src/client/shared/Hooks/useFormattedPhoneNo';


const ForgetPassword = ({
	setIsForgetPassword,
}: {setIsForgetPassword: React.Dispatch<SetStateAction<boolean>>}) => {
      const [phoneNo, setPhoneNo] = useState('');
      const [isTokenSent, setIsTokenSent] = useState(false);
      const [errors, setErrors] = useState<{
            phoneNo?: string;
      }>({});
      const values = { phoneNo: phoneNo };
	const validationErrors = forgetPasswordValidation({ values });
      const { mutateAsync, isPending } = useMutation({mutationFn: forgetPassword,});
	const { formattedPhoneNo } = useFormattedPhoneNo({ phoneNo });
      const handleSubmit = () => {
		if (Object.keys(validationErrors).length === 0) {
			const data = { phoneNumber: formattedPhoneNo };
			mutateAsync(data).then((res) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						setIsTokenSent(true);
					},
				});
			});
			setErrors({});
		} else {
			setErrors(validationErrors);
		}
	};

	return (
		<ModalContainer>
			{!isTokenSent ? (
				<div className='px-8'>
					<ArrowsLeftCurved
						onClick={() => setIsForgetPassword(false)}
						height={25}
						width={25}
						className='-mt-9 -ml-4'
					/>
					<div className='cursor-default text-sm text-center'>
						<p className='font-bold py-2 text-[18px]'>
							Forgot Your Password?
						</p>
						<p className='text-sx text-gray-500'>
							No problem! Just fill out the input field below
						</p>
					</div>
					<div className='flex items-center justify-start space-x-2 mt-6 w-full cursor-default'>
						<Lock />
						<p className='font-bold text-sm'>
							Forget Password Verification
						</p>
					</div>

					<ToastContainer />

					<div className='flex flex-col items-center justify-center mt-4'>
						<div>
							<PhoneNumber
								type='number'
								value={phoneNo}
								setValue={setPhoneNo}
								placeHolder='e.g 08x xxxx xxxx'
								borderHint={
									errors.phoneNo
										? 'border border-red-600'
										: ''
								}
							/>
							{errors.phoneNo && (
								<ResponseHint err={errors.phoneNo} />
							)}
						</div>

						<AuthButton
							isPending={isPending}
							validationErrors={validationErrors}
							handleSubmit={handleSubmit}
							inputVerificationErrorsLength={0}
						/>
					</div>
				</div>
			) : (
				<Otp
					mutationFunction={resetPassword}
					title='Forgot Phone Number?'
					phoneNo={phoneNo}
					fieldsValue={4}
					msgValue='4'
				/>
			)}
		</ModalContainer>
	);
};

export default ForgetPassword;
