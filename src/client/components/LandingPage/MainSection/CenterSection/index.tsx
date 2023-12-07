import React from 'react';
import Image from 'next/image';
import LandScale from '../../../../../assets/Landscale1.png';
import Star from '@/src/client/shared/Svg/Star';
import MinusSqure from '@/src/client/shared/Svg/MinusSqure';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import DropDown from '@/src/client/shared/Dropdown';
import { LINK_GAME_TYPES } from './constant/data';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import TableRow from './components/TableRow';

type DateItemProps = {
	value: string;
	isToday: boolean;
};

const TopMatches = () => (
	<div className='flex items-center justify-center space-x-1'>
		<p>All Matches</p>
		<RightArrow />
	</div>
);

const DateItem: React.FC<DateItemProps> = ({ value, isToday }) => (
	<div
		className={`${
			isToday ? 'text-gray-200' : 'text-gray-400'
		} text-xs cursor-default`}>
		{value === 'All Matches' ? <TopMatches /> : <p>{value}</p>}
	</div>
);

const CenterSection = () => {
	const { link, handleClick } = useLink('3 Way & O/U');
	const betDates = ['All Matches', 'Today', '29 Nov', '30 Nov', '1 Dec'];

	return (
		<div className='top-0 h-[1000px]'>
			<div className='pt-1'>
				<Image
					src={LandScale}
					alt='landsacle'
					className='w-[952px] h-[323px]'
				/>
			</div>

			<div className='mt-5'>
				<div className='flex items-center justify-between font-bold px-4'>
					<div className='flex items-center justify-center space-x-1'>
						<Star />
						<p className='cursor-pointer'>Top Matches</p>
					</div>
					<div className='flex items-center justify-center space-x-1'>
						<MinusSqure />
						<p className='cursor-pointer'>Collapse</p>
					</div>
				</div>
			</div>

			<div className='w-full  rounded-xl mt-2'>
				<div className='flex h-10 rounded-t-lg bg-lightAsh space-x-8 w-full py-3 px-5'>
					{betDates.map((value, index) => (
						<DateItem
							key={index}
							value={value}
							isToday={value === 'Today'}
						/>
					))}
				</div>

				<div className='bg-darkAsh w-full rounded-b-lg'>
					<div className='flex items-center space-x-6 text-xs  px-3 border-b border-b-gray-800 h-10'>
						{LINK_GAME_TYPES.map((value, index) => (
							<div
								key={index}
								onClick={() => handleClick(value.name)}
								className={`${
									value.name === link
										? 'text-gray-200'
										: 'text-gray-600'
								} p-2 cursor-pointer`}>
								{value.data
									? value.data && (
											<DropDown
												title={value.name}
												arrayTitle={value.data}
												hoverBgColor='hover:bg-lightAsh'
											/>
									  )
									: value.name}
							</div>
						))}
					</div>

					<TableRow />
					<TableRow />
					<TableRow />
				</div>
			</div>
		</div>
	);
};

export default CenterSection;
