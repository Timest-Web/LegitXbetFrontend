import React, { useState, ReactElement, useEffect, SetStateAction } from 'react';
import TableRow from './TableRow';
import ViewMore from '../../../MainSection/components/ViewMore';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { Carousel } from '@heathmont/moon-core-tw';
import {SPORTS_TYPES,} from '../../../MainSection/CenterSection/constant/data';
import { getNextThreeDates } from '@/src/client/shared/Utils/GetSportsDate';
import {ControlsChevronLeftSmall,ControlsChevronRightSmall,} from '@heathmont/moon-icons-tw';
import { useRouter } from 'next/router';
import GameTypeSlider from './Carousel';
import MyCarousel from './Carousel';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';

const BetTable = ({
	href,
	odds,
	icon,
	leagues,
	setSelectedDate,
	setSelectedSport,
	setSelectedLeague,
	contentTitle,
	isLiveTable,
	sportData,
	sportsType,
}: {
	href: string,
	odds: string[],
	sportData: any,
	leagues: string[],
	sportsType: any,
	icon?: ReactElement,
	contentTitle: string;
	isLiveTable: boolean;
	setSelectedDate: React.Dispatch<SetStateAction<string>>,
	setSelectedLeague: React.Dispatch<SetStateAction<string>>,
	setSelectedSport: React.Dispatch<SetStateAction<string>>,
}) => {
	const router = useRouter();
	const { pathname } = router; 
    const nextThreeDates = getNextThreeDates();
	const [collapse, setCollapse] = useState(false);
	const { link, handleClick } = useLink(odds[0]);
	const { link: dateClick, handleClick: dateHandleClick } = useLink(nextThreeDates[0])
	const { link: sportClick, handleClick: sportHandleClick } = useLink(sportsType[0]);
	const { link: leagueClick, handleClick: leagueHandleClick } = useLink(leagues[0]);

	
	useEffect(() => {
		setSelectedDate(dateClick);
		setSelectedSport(sportClick);
		setSelectedLeague(leagueClick);
	  }, [
		dateClick, 
		sportClick, 
		leagueClick, 
		setSelectedDate, 
		setSelectedSport, 
		setSelectedLeague
	]);


	const filteredSports = SPORTS_TYPES.filter(sport => sportsType.includes(sport.title));

	return (
		<div className='w-[800]'>
			<div className='mt-5' id={href}>
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
								<p 
									key={index} 
									onClick={() => {dateHandleClick(value); setSelectedDate(value)}} 
									className={`${
										dateClick === value ? 'font-bold text-gray-200' : 'text-gray-400'} text-[10px] cursor-pointer`}>
											{value}
								</p>
							))}
					    </div>
					</div>

					{collapse && (
						<p className='text-white text-[10px]'>
							Expand to view game odds
						</p>
					)}
				</div>

				{pathname === '/' &&
					<div className='flex items-center space-x-2 border-t border-t-gray-800 py-2 px-4 bg-lightAsh text-sm'>
						{filteredSports.map((value, index) => (
							<div
								key={index}
								onClick={() => {sportHandleClick(value.title); setSelectedSport(value.title)}}
								className={`${
									value.title === sportClick
										? 'text-gold bg-gray-700 font-bold'
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
				}

				<div className='w-[760px] py-1 bg-lightAsh border-t border-t-gray-800 px-6'>
				    <MyCarousel
					    customItem={leagues.map((title, index) => (
							<div key={index} className='px-1'>
								<div
									onClick={() => {leagueHandleClick(title); setSelectedLeague(title)}}
									className={`${
										title === leagueClick
											? 'text-gold bg-gray-700 font-bold'
											: 'text-gray-500'
									} flex items-center justify-center w-full text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}>
									{title}
								</div>
							</div>
						))}

					/>
				</div>


				{/* <div className='w-[800px]'>
					<Carousel 
						scrollTo={1}
						step={1}					
						className='w-[800px]'
					>
						<Carousel.LeftArrow className='ml-4 bg-gold w-[24px]'>
							<ControlsChevronLeftSmall height={50} width={50}/>
						</Carousel.LeftArrow>
						<Carousel.Reel className={`flex items-center justify-start w-full border-t border-t-gray-800 bg-lightAsh text-sm px-4 py-2`}>
							{leagues.map((title, index) => (
								<Carousel.Item key={index}>
									<div
										onClick={() => {leagueHandleClick(title); setSelectedLeague(title)}}
										className={`${
											title === leagueClick
												? 'text-gold bg-gray-700 font-bold'
												: 'text-gray-500'
										} flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}>
										{title}
									</div>
								</Carousel.Item>
							))}
						</Carousel.Reel>
						<Carousel.RightArrow className='mr-4 bg-gold w-[24px]'>
							<ControlsChevronRightSmall width={80} height={80}/>
						</Carousel.RightArrow>
					</Carousel>
				</div> */}


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
										? 'text-gray-200 font-bold'
										: 'text-gray-600'
								} p-2 cursor-pointer hover:text-gray-200`}>
									{value}
							</div>
						))}
					</div>
					{!collapse && (
						<>
							{Array.isArray(sportData) && sportData.length > 0 && sportData[0]?.availableMatch.map((value: any, index: number) => (
							<TableRow
								key={index}
								{...value}
								isLiveTable={isLiveTable}
							/>
							))}
						</>
						)}

						{Array.isArray(sportData) && sportData.length > 0 && sportData[0]?.availableMatch.length > 3 && 
							<div className='h-12 w-full py-2 px-3'>
								<button className='w-full h-8 rounded-lg bg-lightAsh text-white text-xs'>
									View All
								</button>
							</div>
						}
				</div>
			</div>
		</div>
	);
};

export default BetTable;
