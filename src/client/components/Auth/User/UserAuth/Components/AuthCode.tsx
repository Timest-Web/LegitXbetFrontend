import React, { useRef, ChangeEvent, KeyboardEvent, useState } from 'react';

const AuthOtpCodeInput: React.FC = () => {
	const [otpValues, setOtpValues] = useState('');
	const inputRefs = Array(6)
		.fill(null)
		.map(() => useRef<HTMLInputElement | null>(null));
	const handleInputChange = (index: number, value: string) => {
		const newOtpValues = otpValues.slice(0, index) + value + otpValues.slice(index + 1);
		setOtpValues(newOtpValues);

		if (value && index < inputRefs.length - 1) {
			inputRefs[index + 1]?.current?.focus();
		}
	};

	const handleKeyDown = (
		index: number,
		event: KeyboardEvent<HTMLInputElement>
	) => {
		if (
			event.key === 'Backspace' &&
			index > 0 &&
			!event?.currentTarget?.value
		) {
			inputRefs[index - 1]?.current?.focus();
		}
	};

	const handlePaste = (
		event: React.ClipboardEvent<HTMLInputElement>,
		index: number
	) => {
		event.preventDefault();
		const pastedData = event.clipboardData
			.getData('text')
			.slice(0, inputRefs.length);

		pastedData.split('').forEach((char, i) => {
			const currentRef = inputRefs[index + i]?.current;
			if (currentRef) {
				currentRef.value = char;
				handleInputChange(index + i, char);
			}
		});
	};

	return (
		<div className='flex space-x-4'>
			{inputRefs.map((ref, index) => (
				<input
					key={index}
					type='text'
					maxLength={1}
					className='h-12 w-12 text-3xl text-center border border-gray-300 rounded px-2 focus:outline-none focus:border-gray-500 bg-gray-200'
					ref={ref}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						handleInputChange(index, e.target.value)
					}
					onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
						handleKeyDown(index, e)
					}
					onPaste={(e: React.ClipboardEvent<HTMLInputElement>) =>
						handlePaste(e, index)
					}
				/>
			))}
		</div>
	);
};

export default AuthOtpCodeInput;
