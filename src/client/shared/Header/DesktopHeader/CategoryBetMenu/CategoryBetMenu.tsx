import React, { useEffect } from 'react';
import Image from 'next/image';
import DesktopModal from '../../../Modal';
import Logo from '../../../../../assets/logo1.png';
import Headphone from '../../../Svg/Headphone';
import UserSection from './UserSection';
import SupportContent from '../../SupportContent';
import { Button } from '../../../Button';
import { useLink } from '../../../Hooks/useLink';
import { useQuery } from '@tanstack/react-query';
import { OtherCrown } from '@heathmont/moon-icons-tw';
import { getUserProfile } from '@/src/helper/apis/services/auth/get-user-profile.api';
import { useVisibilityControl } from '../../../Hooks/useVisibilityControl';
import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import { LINK_CATEGORY_TYPES } from '../../constant';
import CustomerCareDrawer from '../../../Modal/components/DesktopCustomerCare';
import useUrlPathChecker from '../../../Hooks/useUrlPathChecker';
import AuthContent from '../../../../components/Auth/User/UserAuth/Components/AuthContent';
import { useGetUser } from '../../../Hooks/useGetUser';

const CategoryBetMenu = () => {
	const { user } = useGetUser('access');
	const { link, handleClick } = useLink('Sports');
	const { link: click, handleClick: selectedHandle } = useLink('login');
	const isUrlPathIncluded = useUrlPathChecker({ urlPath: 'user_dashboard' });
	const {
		isOpen,
		setIsOpen,
		handleClick: onHandleClick,
	} = useVisibilityControl();
	const {
		isOpen: openModal,
		setIsOpen: setIsOpenModal,
		handleClick: onHandleSupportClick,
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
											? `text-gray-200 ${
													!isUrlPathIncluded &&
													'pt-[12px]'
											  }`
											: 'text-gray-400'
									} cursor-pointer h-20 flex flex-col items-end justify-center text-sm font-bold hover:text-gray-200`}>
									{value !== 'Jackpot' ? (
										<p onClick={() => handleClick(value)}>
											{value}
										</p>
									) : (
										<div
											className='flex items-center justify-center text-sm transition transform duration-300'
											onClick={() => handleClick(value)}>
											<OtherCrown
												height={28}
												width={28}
											/>
											<p className='pt-1'>{value}</p>
										</div>
									)}
								</div>
								{!isUrlPathIncluded && (
									<>
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
									</>
								)}
							</div>
						))}
					</div>
				</div>

				{!user?.accessToken && (
					<div className='flex items-center space-x-10'>
						<button
							onClick={onHandleSupportClick}
							className='flex space-x-2 text-sm'>
							<Headphone />
							<p className='text-gray-200 font-bold pt-1'>
								Supports
							</p>
						</button>

						<div className='flex space-x-2'>
							<Button
								text='Log In'
								onClick={() => {
									onHandleClick();
									selectedHandle('login');
								}}
								link='#'
								className='text-gray-200 p-2 text-sm rounded-md border border-gray-200 font-bold'
							/>

							<Button
								text='Register'
								onClick={() => {
									onHandleClick();
									selectedHandle('register');
								}}
								link='#'
								className='text-gray-200 p-2 text-sm rounded-md border border-gray-200 font-bold'
							/>
						</div>
					</div>
				)}
				{user?.accessToken && <UserSection />}
			</div>

			{openModal && (
				<CustomerCareDrawer
					className=''
					openModal={openModal}
					setOpenModal={setIsOpenModal}
					modalContent={<SupportContent />}
				/>
			)}
			{isOpen && (
				<DesktopModal
					className=''
					openModal={isOpen}
					setOpenModal={setIsOpen}
					modalContent={<AuthContent selectedButton={click} />}
				/>
			)}
		</div>
	);
};

export default CategoryBetMenu;
