import React, { useState } from 'react';
import Image from 'next/image';
import { POPULAR_DATA } from './constant/data';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import LeagueType from '../../../../../../assets/LeagueType.png';
import FifaCup from '../../../../../../assets/fifaworldcup.png';
import RenderLeagueItem from '@/src/client/components/components/RenderLeagueItem';

const LeftSection = () => {
	const { link, handleClick } = useLink('Live Matches');
	return (
		<div className='flex flex-col'>
			<div className='flex flex-col space-y-[1px]'>
				{POPULAR_DATA.map((value, index) => (
					<RenderLeagueItem
						key={index}
						link={link}
						value={value}
						handleClick={handleClick}
					/>
				))}
			</div>

			<div className='mt-7 px-4'>
				<p className='font-bold text-black text-sm'>Favorites</p>
			</div>

			<div className='flex flex-col items-center justify-center space-y-2 mt-4 transition duration-700 ease-in-out'>
				<Image
					src={LeagueType}
					alt='leaguetype'
				/>
				<Image
					src={FifaCup}
					alt='fificup alt'
				/>
			</div>
		</div>
	);
};

export default LeftSection;
