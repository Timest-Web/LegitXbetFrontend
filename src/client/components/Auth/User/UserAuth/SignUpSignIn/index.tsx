import { useLink } from '@/src/client/shared/Hooks/useLink';
import React, { SetStateAction } from 'react';
import AuthDescription from '../Components/AuthDescription';
import ModalContainer from '../Components/ModalContainer';
import Login from '../Components/Form/Login';
import Register from '../Components/Form/Register';

const buttons = [
	{ label: 'Register Account', key: 'register' },
	{ label: 'Log in', key: 'login' },
];

const SignUpSignIn = ({
	setInputPhoneNo,
	setIsFormSubmit,
	selectedButton,
}: {
	setIsFormSubmit: React.Dispatch<SetStateAction<boolean>>;
	setInputPhoneNo: React.Dispatch<SetStateAction<string>>;
	selectedButton: string;
}) => {
	const { link, handleClick } = useLink(selectedButton);

	return (
		<ModalContainer>
			<div className='flex'>
				{buttons.map(({ label, key }) => (
					<div
						key={key}
						className={`flex items-center justify-between`}>
						<button
							onClick={() => handleClick(key)}
							className={`${
								link === key
									? 'bg-black text-white'
									: 'bg-white text-black'
							} flex  py-2 w-[135px] items-center font-bold justify-center m-auto rounded-md text-xs cursor-pointer`}>
							<p className='text-center'>{label}</p>
						</button>
					</div>
				))}
			</div>

			<AuthDescription link={link} />
			{link === 'login' && <Login />}
			{link === 'register' && (
				<Register
					setIsFormSubmit={setIsFormSubmit}
					setInputPhoneNo={setInputPhoneNo}
				/>
			)}
		</ModalContainer>
	);
};

export default SignUpSignIn;

// ${
// 	key === 'login'
// 		? 'border-l border-l-black  border-t border-t-black'
// 		: 'border-b border-b-black'
// }
