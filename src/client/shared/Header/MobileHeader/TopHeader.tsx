import React from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/logo1.png';
import { Button } from '../../Button';

const TopHeader = () => {
	return (
		<div className='flex items-center justify-between px-4 h-12 w-full bg-black'>
			<Image
				src={Logo}
				alt='Logo alt'
                        className='h-4 w-24'
			/>
			<div className='flex text-white text-xs space-x-2'>
				<Button
					text='Log In'
					link=''
					className='border border-white px-3 py-[2px] rounded-md'
					onClick={Function}
                        />
                        <Button
					text='Register'
					link=''
					className='border border-white px-3 py-[2px] rounded-md'
					onClick={Function}
				/>
			</div>
		</div>
	);
};

export default TopHeader;
