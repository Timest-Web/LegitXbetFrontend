import Lock from '@/src/client/shared/Svg/Lock';
import React, { SetStateAction } from 'react';

const SecureText = ({
	setIsForgetPassword,
}: {
	setIsForgetPassword?: React.Dispatch<SetStateAction<boolean>> | undefined;
}) => {
	return (
		<div className='flex items-center justify-between mt-4 w-full'>
			<div className='flex items-center justify-center space-x-2'>
				<Lock />
				<p className='text-gray-400 text-[11px]'>
					Secure password has numbers <br /> and character sets
				</p>
			</div>
			{setIsForgetPassword && (
				<p
					onClick={() => setIsForgetPassword(true)}
					className='text-[10px] font-bold cursor-pointer'>
					Forget Password?
				</p>
			)}
		</div>
	);
};

export default SecureText;
