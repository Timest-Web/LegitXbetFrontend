import React, { useState } from 'react';
import Image from 'next/image';
import { POPULAR_DATA } from './constant/data';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import MinusSquare from '@/src/client/shared/Svg/MinusSqure';
import AddSquare from '@/src/client/shared/Svg/AddSquare';
import LeagueType from '../../../../../assets/LeagueType.png';
import FifaCup from '../../../../../assets/fifaworldcup.png';
import { MailFlag, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';


const LeftSection = () => {
	const [collapse, setCollapse] = useState(false);
	const { link, handleClick } = useLink('Favourite Leagues');

	const renderLeagueItem = (value: string, index: number) => (
		<div
			key={index}
			onClick={() => handleClick(value)}
			className={`${
				link === value ? 'text-gray-200' : 'text-gray-400'
			} flex items-center justify-between px-4 h-[53px] w-[243px] bg-black rounded-r-xl cursor-pointer`}>
			<MailFlag
				height={25}
				width={25}
			/>
			<p className='font-bold text-sm'>{value}</p>
			<ControlsChevronRightSmall
				height={30}
				width={30}
			/>
		</div>
	);

	return (
		<div className='flex flex-col h-[1000px]'>
			<div className='flex flex-col space-y-[1px]'>
				{POPULAR_DATA.map(renderLeagueItem)}
			</div>

			<div className='flex flex-col mt-7'>
				<div className='flex items-center justify-between px-4 text-gray-800 font-bold'>
					<p>Favorites</p>
					<div className='flex space-x-1'>
						{collapse ? (
							<>
								<AddSquare />
								<p
									onClick={() => setCollapse(!collapse)}
									className='cursor-pointer'>
									Expand
								</p>
							</>
						) : (
							<>
								<MinusSquare />
								<p
									onClick={() => setCollapse(!collapse)}
									className='cursor-pointer'>
									Collapse
								</p>
							</>
						)}
					</div>
				</div>
			</div>

			{!collapse && (
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
			)}
		</div>
	);
};

export default LeftSection;
