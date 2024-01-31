import React, { useState, ReactElement } from 'react';
import TableRow from './TableRow';
import ViewMore from '../../components/ViewMore';
import DropDown from '@/src/client/shared/Dropdown';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import {
	BETDATES,
	LINK_ODDS_TYPES,
	ODDS_VALUE,
	SPORTS_TYPES,
} from '../constant/data';
// import { LEAGUES_TYPES } from '../../../../constant/data';
import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import { getNextThreeDates } from '@/src/client/shared/Utils/GetSportsDate';

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

const DateItem: React.FC<DateItemProps> = ({ value, isToday }) => {
	function formatDate(inputDate: any) {
		const currentDate = new Date();
		const inputDateObject = new Date(inputDate);
	
		if (
			inputDateObject.getDate() === currentDate.getDate() &&
			inputDateObject.getMonth() === currentDate.getMonth() &&
			inputDateObject.getFullYear() === currentDate.getFullYear()
		) {
			return "Today";
		} else {
			const day = inputDateObject.getDate();
			const monthNames = [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun",
				"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
			];
			const month = monthNames[inputDateObject.getMonth()];
			return `${day} ${month}`;
		}
	}
	
	
	return (
		<div
			className={`${
				isToday ? 'text-gray-200' : 'text-gray-400'
			} text-[10px] cursor-pointer`}>
			{value === 'All Matches' ? <TopMatches /> : <p>{value}</p>}
		</div>
	)

};


const BetTable = ({
	odds,
	icon,
	leagues,
	contentTitle,
	isLiveTable,
	sportData,
	sportsType,
}: {
	odds: string[],
	leagues: string[],
	sportData: any,
	sportsType: any,
	icon?: ReactElement;
	contentTitle: string;
	isLiveTable: boolean;
}) => {
    const nextThreeDates = getNextThreeDates();
	const [collapse, setCollapse] = useState(false);
	const { link, handleClick } = useLink('3 Way & O/U');
	const { link: sportTypeLink, handleClick: sportTypeHandleClick } = useLink('Football');
	const { link: oddsTypeLink, handleClick: oddsTypeHandleClick } = useLink('International Africa Cup of Nations');


	// console.log(sportData);
	// let extractedArray = [];
	// extractedArray = sportData.map((item: any) => ({
	// 		leagues: item.leagues,
	// 		price: item.odds,
	// 		medicationSize: item.sportType,
	// 		manufacturerName: item.sportsLeagues,
	// 	})).reverse();

	// console.log(extractedArray);
	// console.log(odds);
	// console.log(sportsType);
	const filteredSports = SPORTS_TYPES.filter(sport => sportsType.includes(sport.title));
	

	return (
		<>
			<div className='mt-5'>
				<ViewMore
					icon={icon}
					collapse={collapse}
					isLiveTable={isLiveTable}
					contentTitle={contentTitle}
					setCollapse={setCollapse}
				/>
			</div>

			<div className='w-full rounded-xl mt-2'>
				<div className='flex items-center justify-between h-10 rounded-t-lg bg-lightAsh w-full py-3 px-5'>
					<div className='flex space-x-2'>
						<div className='flex items-center justify-center space-x-1 text-white text-[12px]'>
							<p className='text-gray-400'>All Matches</p>
							<RightArrow />
						</div>
                    	<div className='flex items-center space-x-8'>
							{nextThreeDates.map((value, index) => (
								<DateItem
									key={index}
									value={value}
									isToday={value === 'Today'}
								/>
							))}
					    </div>
					</div>

					{collapse && (
						<p className='text-white text-[10px]'>
							Expand to view game odds
						</p>
					)}
				</div>

				<div className='flex items-center space-x-2 border-t border-t-gray-800 py-2 px-4 bg-lightAsh text-sm'>
					{filteredSports.map((value, index) => (
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

				<Carousel>
					<Carousel.LeftArrow className='ml-4 w-5 bg-gold h-full'>
						<ControlsChevronLeftSmall />
					</Carousel.LeftArrow>
					<Carousel.Reel
						className={`flex items-center justify-start w-full border-t border-t-gray-800 bg-lightAsh text-sm px-4 py-2`}>
						{leagues.map((title, index) => (
							<Carousel.Item key={index}>
								<div
									onClick={() => oddsTypeHandleClick(title)}
									className={`${
										title === oddsTypeLink
											? 'text-gold bg-gray-700'
											: 'text-gray-500'
									} flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}>
									{title}
								</div>
							</Carousel.Item>
						))}
					</Carousel.Reel>
					<Carousel.RightArrow className='mr-4 w-5 bg-gold opacity-25 h-full'>
						<ControlsChevronRightSmall />
					</Carousel.RightArrow>
				</Carousel>

				<div className='bg-darkAsh w-full rounded-b-lg'>
					<div
						className={`flex items-center space-x-4 text-xs  px-3 ${
							!collapse && 'border-b border-b-gray-800'
						} h-10`}>
						{odds.map((value:string, index: number) => (
							<div
								key={index}
								onClick={() => handleClick(value)}
								className={`${
									value === link
										? 'text-gray-200'
										: 'text-gray-600'
								} p-2 cursor-pointer hover:text-gray-200`}>
									{value}
								{/* {value.data
									? value.data && (
											<DropDown
												title={value.name}
												arrayTitle={value.data}
												hoverBgColor='hover:bg-lightAsh'
											/>
									  )
									: value.name} */}
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
