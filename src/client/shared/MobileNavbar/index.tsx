import React from 'react';
import { MOBILE_NAVBAR_DATA } from './constant/data';
import { useLink } from '../Hooks/useLink';
import useBet from '../Context/BetContext/useBet';

const MobileNavbar = () => {
	const { link, handleClick } = useLink('Home');
	const { bet } = useBet();
	
	return (
		<div className='w-full fixed bottom-0 right-0 left-0'>
			<div className='flex items-center justify-between px-5 pt-1 border bg-white'>
				{MOBILE_NAVBAR_DATA.map((value, index) => (
					<div
						onClick={() => handleClick(value.title)}
						className={`flex flex-col items-center justify-center -space-y-1 ${
							link === value.title
								? 'text-black'
								: 'text-gray-400'
						}`}
						key={index}>
						<div className='relative'>
							{value.title === 'Betslips' && (
								<div className='absolute flex items-center justify-center right-0 top-0 bg-gray-800 text-white text-[8px] font-bold text-center  h-4 w-4 rounded-full'>
									<p>{bet.length}</p>
								</div>
							)}
							<value.icon
								height='30'
								width='30'
							/>
						</div>
						<p className='text-[10px]'>{value.title}</p>
						{link === value.title ? (
							<p>•</p>
						) : (
							<p className='text-white'>•</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default MobileNavbar;
