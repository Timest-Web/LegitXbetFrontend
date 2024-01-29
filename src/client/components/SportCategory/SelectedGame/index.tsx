import React from 'react';
import Image from 'next/image';
import Layout from './Layout';
import Time from '@/src/client/shared/Svg/Time';
import ManULogo from './../constant/assets/man-u.png';
import ChelseaLogo from './../constant/assets/cheasea.png';
import { useLink } from '@/src/client/shared/Hooks/useLink';

const SelectedGame = () => {
	const { link, handleClick } = useLink('All');
	const values = [
		'All',
		'Main',
		'Goals',
		'Half',
		'Bookings',
		'Corners',
		'Specials',
		'1 Min. Markets',
		'Players',
	];
	return (
		<Layout>
			<div className='h-44 w-full rounded-xl bg-white p-12 space-y-5'>
				<div className='flex items-start justify-between'>
					<div className='space-y-5'>
						<p className='text-black font-bold text-xl'>
							Game Odds
						</p>
						<div className='flex items-center justify-start text-[10px] space-x-1 start-0'>
							<Time color='black' />
							<p>00:24</p>
						</div>
					</div>
					<div className='flex items-center space-x-4'>
						<div className='flex items-center space-x-2'>
							<Image
								src={ManULogo}
								alt='club logo'
							/>
							<p>Man u</p>
						</div>
						<p>-</p>
						<div className='flex items-center space-x-2'>
							<Image
								src={ChelseaLogo}
								alt='club logo'
							/>
							<p>Man u</p>
						</div>
					</div>
				</div>

				<hr />

				<div className='flex flex-wrap text-xs space-x-10'>
					{values.map((value, index) => (
						<p
							key={index}
							className={`${
								link === value
									? 'text-black font-bold'
									: 'text-gray-500'
							} cursor-pointer`}
							onClick={() => handleClick(value)}>
							{value}
						</p>
					))}
				</div>

				<div className=''>
					<div className='py-2 px-4 justify-between'>
						<p>1 x 2</p>
						<div className='flex items-center jus'>

						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default SelectedGame;
