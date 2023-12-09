import React from 'react';
import { LINK_GAME_TYPES } from './constant';
import { useLink } from '../Hooks/useLink';

const SportBetMenu = () => {
	const { link, handleClick } = useLink('Football');

	return (
		<div className='flex items-center justify-center bg-gold h-10 w-full space-x-12'>
			{LINK_GAME_TYPES.map((value, index) => (
				<div
					key={index}
					className={`${
						link === value
							? 'text-black font-bold'
							: 'text-gray-600'
					} cursor-pointer h-20 flex flex-col items-end justify-center`}>
					<p onClick={() => handleClick(value)}>{value}</p>
				</div>
			))}
		</div>
	);
};

export default SportBetMenu;
