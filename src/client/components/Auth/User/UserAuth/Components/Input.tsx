import { Hint } from '@heathmont/moon-core-tw';
import { ControlsEye, ControlsEyeCrossed } from '@heathmont/moon-icons-tw';
import React, { SetStateAction, useState } from 'react';

type InputProps = {
	type: string;
	label: string;
	value: string;
	borderHint: string;
	placeHolder: string;
	setValue: React.Dispatch<SetStateAction<string>>;
};

export const PhoneNumber = ({
	label,
	type,
	value,
	setValue,
	borderHint,
	placeHolder,
}: InputProps) => {
	return (
		<div className='flex flex-col space-y-1'>
			<p className='font-bold pl-6 text-sm'>{label}</p>
			<input
				type={type}
				value={value}
				placeholder={placeHolder}
				onChange={(e) => setValue(e.target.value)}
				className={`${borderHint} bg-gray-100 py-2 px-3 rounded-lg w-80 borderless-input text-sm`}
			/>
		</div>
	);
};

export const ResponseHint = ({ err }: { err: string }) => {
	return (
		<Hint
			error
			className='flex items-start justify-start text-red-600 font-semibold w-80 text-[9px] space-x-1 px-5'>
			<p className='text-md'>*</p>
			<p>{err}</p>
		</Hint>
	);
};

export const Password = ({
	label,
	type,
	value,
	setValue,
	borderHint,
	placeHolder,
}: InputProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const handleToggleVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className='flex flex-col space-y-1'>
			<p className='font-bold pl-6 text-sm'>{label}</p>

			<div className={`${borderHint} flex items-center justify-between bg-gray-100 w-80 rounded-lg`}>
				<input
					value={value}
					placeholder={placeHolder}
					type={showPassword ? 'text' : type}
					onChange={(e) => setValue(e.target.value)}
					className='py-2 px-3 borderless-input text-sm w-full bg-gray-100 rounded-lg'
				/>

				<button
					type='button'
					onClick={handleToggleVisibility}>
					{!showPassword ? (
						<ControlsEyeCrossed
							height={23}
                                          width={23}
                                          color='black'
							className='m-1 text-black'
						/>
					) : (
						<ControlsEye
							height={23}
							width={23}
							color='black'
							className='m-1 text-black'
						/>
					)}
				</button>
			</div>
		</div>
	);
};
