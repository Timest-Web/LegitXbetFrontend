import React, { useState, ReactElement } from 'react';
import TableRow from './TableRow';
import ViewMore from '../../components/ViewMore';
import DropDown from '@/src/client/shared/Dropdown';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import { BETDATES, LINK_GAME_TYPES, ODDS_VALUE, SPORTS_TYPES } from '../constant/data';


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

const BetTable = ({
	icon,
	contentTitle,
	isLiveTable,
}: {
	icon?: ReactElement;
	contentTitle: string;
	isLiveTable: boolean;
}) => {
	const [collapse, setCollapse] = useState(false);
	const { link, handleClick } = useLink('3 Way & O/U');
	const { link: sportTypeLink, handleClick: sportTypeHandleClick } = useLink('Football');

	return (
		<>
			<div className='mt-5'>
				<ViewMore
					icon={icon}
					contentTitle={contentTitle}
					collapse={collapse}
					setCollapse={setCollapse}
				/>
			</div>

			<div className='w-full  rounded-xl mt-2'>
				<div className='flex items-center justify-between h-10 rounded-t-lg bg-lightAsh  w-full py-3 px-5'>
					<div className='flex items-center space-x-8'>
						{BETDATES.map((value, index) => (
							<DateItem
								key={index}
								value={value}
								isToday={value === 'Today'}
							/>
						))}
					</div>
					{collapse && (
						<p className='text-gray-300 text-[10px]'>
							Expand to view game odds
						</p>
					)}
				</div>

				<div className='flex items-center space-x-2 border-t border-t-gray-800  w-full py-2 px-4 bg-lightAsh text-sm'>
					{SPORTS_TYPES.map((value, index) => (
						<div
							key={index}
							onClick={() => sportTypeHandleClick(value.title)}
							className={`${
								value.title === sportTypeLink
									? 'text-gold bg-gray-700'
									: 'text-gray-500'
							} flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}>
							<value.icon
								height={25}
								width={25}
							/>
							{value.title}
						</div>
					))}
				</div>

				<div className='bg-darkAsh w-full rounded-b-lg'>
					<div className={`flex items-center space-x-4 text-xs  px-3 ${
							!collapse && 'border-b border-b-gray-800'
						} h-10`}>
						{LINK_GAME_TYPES.map((value, index) => (
							<div
								key={index}
								onClick={() => handleClick(value.name)}
								className={`${
									value.name === link
										? 'text-gray-200'
										: 'text-gray-600'
								} p-2 cursor-pointer hover:text-gray-200`}>
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

					{!collapse && (
						<>
							{ODDS_VALUE.map((value, index) => (
								<TableRow
									key={index}
									{...value}
									isLiveTable={isLiveTable}
								/>
							))}
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default BetTable;
