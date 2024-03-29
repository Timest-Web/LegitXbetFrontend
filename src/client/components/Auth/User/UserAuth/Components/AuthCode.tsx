import React, {
	useRef,
	ChangeEvent,
	KeyboardEvent,
	useState,
	SetStateAction,
} from 'react';


const AuthOtpCodeInput = ({
	fieldsNumber,
	setInputOtpValue,
}: {
	fieldsNumber: number,
	setInputOtpValue: React.Dispatch<SetStateAction<string>>;
}) => {
	const [otpValues, setOtpValues] = useState('');
	const inputRefs = useRef<Array<HTMLInputElement | null>>(
		Array(fieldsNumber)
			.fill(null)
			.map(() => null)
	);

	const handleInputChange = (index: number, value: string) => {
		const newOtpValues = otpValues.slice(0, index) + value + otpValues.slice(index + 1);
		setOtpValues(newOtpValues);
		setInputOtpValue(newOtpValues);

		if (value && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (
		index: number,
		event: KeyboardEvent<HTMLInputElement>
	) => {
		if (
			event.key === 'Backspace' &&
			index > 0 &&
			!event.currentTarget.value
		) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (
		event: React.ClipboardEvent<HTMLInputElement>,
		index: number
	) => {
		event.preventDefault();
		const pastedData = event.clipboardData
			.getData('text')
			.slice(0, inputRefs.current.length);

		pastedData.split('').forEach((char, i) => {
			const currentRef = inputRefs.current[index + i];
			if (currentRef) {
				currentRef.value = char;
				handleInputChange(index + i, char);
			}
		});
	};

	return (
		<div className='flex space-x-4'>
			{inputRefs.current.map((ref, index) => (
				<input
					key={index}
					type='text'
					maxLength={1}
					className='h-9 w-10 text-2xl text-center border border-gray-300 rounded px-2 focus:outline-none focus:border-gray-500 bg-gray-200'
					ref={(el) => (inputRefs.current[index] = el)}
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
