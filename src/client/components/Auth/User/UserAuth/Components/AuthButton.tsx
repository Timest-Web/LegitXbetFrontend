import { Button } from '@/src/client/shared/Button';
import Loader from '@/src/client/shared/Loader/Loader';
import React from 'react'

type AuthButtonProps = {
	isPending: boolean;
	inputVerificationErrorsLength: number;
	validationErrors: string | {};
	handleSubmit: () => void;
};

const AuthButton = ({
	isPending,
	inputVerificationErrorsLength,
	validationErrors,
	handleSubmit,
}: AuthButtonProps) => {
	return (
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
				Object.keys(validationErrors).length ===
				inputVerificationErrorsLength
					? 'bg-black text-white'
					: 'bg-gray-400 text-gray-700 disabled'
			} text-white py-2 px-6 w-[135px] rounded-md mt-8 text-xs`}
			onClick={handleSubmit}
		/>
	);
};

export default AuthButton;