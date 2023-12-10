import React, { useState } from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import AuthDescription from './AuthDescription';
import Form from './Form';

const buttons = [
	{ label: 'Register Account', key: 'register' },
	{ label: 'Log in', key: 'login' },
];

const DesktopModalView = () => {
      const { link, handleClick } = useLink('Register Account');
      const [phoneNo, setPhoneNo] = useState('');
      const [password, setPassword] = useState('');


	const handleSubmit = () => {
		console.log('handle click');
	};

	return (
		<div className='flex flex-col items-center justify-center py-16 px-20'>
			<div className='flex'>
				{buttons.map(({ label, key }) => (
					<div
						key={key}
						className={`flex items-center justify-between py-2 px-5 ${
							key === 'login'
								? 'border-l border-l-black  border-t border-t-black'
								: 'border-b border-b-black'
						}`}>
						<button
							onClick={() => handleClick(label)}
							className={`${
								link === label
									? 'bg-black text-white'
									: 'bg-white text-black'
							} flex  py-2 w-[155px] px-6 items-center justify-center m-auto rounded-md text-sm cursor-pointer`}>
							<p className='text-center'>{label}</p>
						</button>
					</div>
				))}
			</div>

                  <AuthDescription link={link} />

                  <Form
                        phoneNo={phoneNo}
                        password={password}
                        setPhoneNo={setPhoneNo}
                        setPassword={setPassword}
                        handleSubmit={handleSubmit}
                  />
		</div>
	);
};

export default DesktopModalView;
