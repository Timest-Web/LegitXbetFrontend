import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/logo1.png';
import Headphone from '../Svg/Headphone';
import { useLink } from '../Hooks/useLink';
import { OtherCrown } from '@heathmont/moon-icons-tw';
import { LINK_CATEGORY_TYPES, LINK_GAME_TYPES } from './constant';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { Button } from '../Button';

const Header = () => {
	const { link, handleClick } = useLink('Sports');
	const { link: gameLink, handleClick: gameHandleClick } = useLink('Football');
	return (
		<div className='w-full transform -translate-x -translate-y'>
			<div className='flex items-center justify-between h-20 bg-black px-6'>
				<div className='flex items-center space-x-24 '>
					<Image
						src={Logo}
						alt='logo alt'
						className='h-[22px] w-[123px] cursor-pointer'
					/>

					<div className='flex space-x-12 h-20'>
						{LINK_CATEGORY_TYPES.map((value, index) => (
							<div
								key={index}
								className='flex flex-col items-center  m-auto h-20'>
								<div
									className={`${
										link === value
											? 'text-white pt-4 font-bold'
											: 'text-gray-400'
									} cursor-pointer h-20 flex flex-col items-end justify-center`}>
									{value !== 'Jackpot' ? (
										<p onClick={() => handleClick(value)}>
											{value}
										</p>
									) : (
										<div
											className='flex items-center justify-center transition transform duration-300'
											onClick={() => handleClick(value)}>
											<OtherCrown
												height={28}
												width={28}
											/>
											<p className='pt-1'>{value}</p>
										</div>
									)}
								</div>
								{link === value ? (
									<ControlsChevronDown
										fill='black'
										color='black'
										className='-mb-5 text-center'
										height={40}
										width={40}
									/>
								) : (
									''
								)}
							</div>
						))}
					</div>
				</div>

				<div className='flex items-center space-x-10'>
					<div className='flex space-x-2'>
						<Headphone />
						<p className='text-white font-bold'>Supports</p>
					</div>

					<div className='flex space-x-2'>
						<Button
							text='Log In'
							link='#'
							className='text-white p-2 text-sm rounded-md border font-bold'
						/>
						<Button
							text='Register'
							link='#'
							className='text-white p-2 text-sm rounded-md border font-bold'
						/>
					</div>
				</div>
			</div>

			<div className='flex items-center justify-center bg-gold h-10 w-full space-x-12'>
				{LINK_GAME_TYPES.map((value, index) => (
					<div
						key={index}
						className={`${
							gameLink === value ? 'text-black font-bold' : 'text-gray-600'
						} cursor-pointer h-20 flex flex-col items-end justify-center`}>
						<p onClick={() => gameHandleClick(value)}>{value}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Header;
