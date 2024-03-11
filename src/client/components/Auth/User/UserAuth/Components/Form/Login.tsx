import React, { SetStateAction, useState } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorToast } from "@/src/client/shared/ToastBar";
import { useMutation } from "@tanstack/react-query";
import SecureText from '../SecureText';
import AuthButton from '../AuthButton';
import apiMessageHelper from "@/src/helper/apiMessageHelper";
import { signIn } from '@/src/helper/apis/services/auth/login.api';
import { signInValidation } from "./FormValidation";
import { useFormattedPhoneNo } from '@/src/client/shared/Hooks/useFormattedPhoneNo';
import { Password, PhoneNumber, ResponseHint } from "../Input";
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';


const Login = ({
	setIsForgetPassword,
}: {
	setIsForgetPassword: React.Dispatch<SetStateAction<boolean>>;
}) => {
	const [password, setPassword] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [errors, setErrors] = useState<{
		phoneNo?: string;
		password?: string;
	}>({});
	const { isMobile } = useDeviceType()
	const values = { phoneNo, password };
	const validationErrors = signInValidation({ values });
	const { mutateAsync, isPending } = useMutation({ mutationFn: signIn });
	const { formattedPhoneNo } = useFormattedPhoneNo({ phoneNo });
	const handleSubmit = () => {
		const data = { phoneNumber: formattedPhoneNo, password };
		if (Object.keys(validationErrors).length === 0) {
			mutateAsync(data).then((res: any) => {
				apiMessageHelper({
					message: res?.message,
					statusCode: res?.statusCode,
					onSuccessCallback: () => {
						window.location.href = '/';
					},
					onFailureCallback() {
						isMobile && ErrorToast({text: res.message})
					},
				});

				localStorage.setItem(
					'access',
					JSON.stringify({ accessToken: res?.accessToken })
				);
			});
			setErrors({});
		} else {
			setErrors(validationErrors);
		}
	};


	return (
    <form
      action="submit"
      className="flex flex-col items-center justify-center space-y-3"
    >
      {isMobile && <ToastContainer />}
      <div>
        <PhoneNumber
          type="number"
          label="Mobile Number"
          value={phoneNo}
          setValue={setPhoneNo}
          placeHolder="e.g 08x xxxx xxxx"
          borderHint={errors.phoneNo ? "border border-red-600" : ""}
        />
        {errors.phoneNo && <ResponseHint err={errors.phoneNo} />}
      </div>
      <div>
        <Password
          type="password"
          label="Password"
          value={password}
          setValue={setPassword}
          placeHolder=""
          borderHint={errors.password ? "border border-red-600" : ""}
        />
        {errors.password && <ResponseHint err={errors.password} />}
      </div>
      <SecureText setIsForgetPassword={setIsForgetPassword} />
      <AuthButton
        isPending={isPending}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
        inputVerificationErrorsLength={0}
      />
    </form>
  );
};

export default Login;
