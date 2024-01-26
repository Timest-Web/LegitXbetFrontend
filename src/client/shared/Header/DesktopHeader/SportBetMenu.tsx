import React from 'react';
import Link from 'next/link';
import { useLink } from '../../Hooks/useLink';
import { LINK_GAME_TYPES } from '../constant';
import { useRouter } from 'next/router';

const SportBetMenu = () => {
	const router = useRouter();
	const { link, handleClick } = useLink('Home');
	
	return (
		<div className='flex items-center justify-center bg-gold h-10 w-full space-x-12'>
			{LINK_GAME_TYPES.map((value, index) => (
				<Link
					href={`${
						value === 'Home'
							? '/'
							: `/sports/${value
									.toLowerCase()
									.replace(/ /g, '-')}`
					}`}
					key={index}
					className={`${
						link ===
						router.pathname
							? 'text-black'
							: 'text-gray-600'
					} cursor-pointer h-20 flex flex-col items-end justify-center text-sm hover:text-black font-bold`}>
					<p onClick={() => handleClick(value)}>{value}</p>
				</Link>
			))}
		</div>
	);
};

export default SportBetMenu;
