import React from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/logo1.png';
import { Button } from '../../Button';
import { useVisibilityControl } from '../../Hooks/useVisibilityControl';
import { useLink } from '../../Hooks/useLink';
import MobileTopDrawer from '../../Drawer/MobileTopDrawer';
import AuthContent from '@/src/client/components/Auth/User/UserAuth/Components/AuthContent';
import Link from 'next/link';

const TopHeader = () => {
	const { isOpen, setIsOpen, handleClick } = useVisibilityControl();
	const { link: click, handleClick: selectedHandle } = useLink('login');

	return (
		<div className='flex items-center justify-between px-4 h-12 w-full bg-black'>
			<Link href='/'>
				<Image
					src={Logo}
					alt='Logo alt'
					className='h-4 w-24'
				/>
			</Link>

			<div className='flex text-white text-xs space-x-2'>
				<Button
					text='Log In'
					link=''
					className='border border-white px-3 py-[2px] rounded-md'
					onClick={() => {
						handleClick();
						selectedHandle('login');
					}}
				/>
				<Button
					text='Register'
					link=''
					className='border border-white px-3 py-[2px] rounded-md'
					onClick={() => {
						handleClick();
						selectedHandle('register');
					}}
				/>
			</div>

			{isOpen && (
				<MobileTopDrawer
					isOpen={isOpen}
					closeDrawer={setIsOpen}
					drawerContent={<AuthContent selectedButton={click} />}
				/>
			)}
		</div>
	);
};

export default TopHeader;
