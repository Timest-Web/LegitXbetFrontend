import React from 'react';
import Image from 'next/image';
import Logo from '../../../../assets/logo1.png';
import { Button } from '../../Button';

const TopHeader = () => {
	return (
		<div className='flex items-center justify-between px-3 h-12 w-full bg-black'>
			<Image
				src={Logo}
				alt='Logo alt'
                        className='h-5 w-28'
			/>
			<div className='flex text-white text-xs space-x-3'>
				<Button
					text='Log In'
					link=''
					className='border border-white px-3 py-[3px] rounded-md'
					onClick={Function}
                        />
                        <Button
					text='Register'
					link=''
					className='border border-white px-3 py-[3px] rounded-md'
					onClick={Function}
				/>
			</div>
		</div>
	);
};

export default TopHeader;
