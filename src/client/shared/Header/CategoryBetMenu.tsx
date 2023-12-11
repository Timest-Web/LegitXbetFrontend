import React from 'react';
import Image from 'next/image';
import Logo from '../../../assets/logo1.png';
import Headphone from '../Svg/Headphone';
import { Button } from '../Button';
import { useLink } from '../Hooks/useLink';
import { OtherCrown } from '@heathmont/moon-icons-tw';
import { useVisibilityControl } from '../Hooks/useVisibilityControl';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { LINK_CATEGORY_TYPES, LINK_GAME_TYPES } from './constant';
import DesktopModal from '../Modal/DesktopModal';
import DesktopModalView from '../../components/Auth/User/UserAuth/Components/DesktopModalView';
import Link from 'next/link';

const CategoryBetMenu = () => {
	const { link, handleClick } = useLink('Sports');
	const {
		isOpen,
		setIsOpen,
		handleClick: onHandleClick,
	} = useVisibilityControl();

	return (
		<div className='flex items-center justify-center w-full  bg-black'>
			<div className='flex items-center justify-between w-[1512px] h-20 px-6'>
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
											? 'text-gray-200 pt-4 font-bold'
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
					<Link href="#" className='flex space-x-2'>
						<Headphone />
						<p className='text-gray-200 font-bold'>Supports</p>
					</Link>

					<div className='flex space-x-2'>
						<Button
							text='Log In'
							onClick={() => {
								onHandleClick();
							}}
							link='#'
							className='text-gray-200 p-2 text-sm rounded-md border border-gray-200 font-bold'
						/>

						<Button
							text='Register'
							onClick={onHandleClick}
							link='#'
							className='text-gray-200 p-2 text-sm rounded-md border border-gray-200 font-bold'
						/>
					</div>
				</div>
			</div>

			{isOpen && (
				<DesktopModal
					className=''
					openModal={isOpen}
					setOpenModal={setIsOpen}
					modalContent={<DesktopModalView />}
				/>
			)}
		</div>
	);
};

export default CategoryBetMenu;
