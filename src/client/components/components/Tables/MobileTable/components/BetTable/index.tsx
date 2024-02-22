import React, { ReactElement, SetStateAction, useEffect, useState } from 'react';
import TableRow from './TableRow';
import ViewMore from '../../../../MainSection/components/ViewMore';
import RightArrow from '@/src/client/shared/Svg/RightArrow';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import {SPORTS_TYPES} from '../../../../MainSection/CenterSection/constant/data';
import { CustomCarousel } from '@/src/client/shared/Carousel';
import { getNextThreeDates } from '@/src/client/shared/Utils/GetSportsDate';


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
	  
	const filteredSports = SPORTS_TYPES.filter(sport => sportsType?.includes(sport.title));
	
	return (
		<div>
			<div id={href}>
				<ViewMore
					icon={icon}
					collapse={collapse}
					isLiveTable={isLiveTable}
					contentTitle={contentTitle}
					setCollapse={setCollapse}
				/>
			</div>

			<div className='w-full mt-2 h-max'>
				<div className='w-full bg-darkAsh'>
					<div className='flex p-2 border-b border-b-lightAsh space-x-2'>
						<div className='flex items-center justify-center space-x-1 text-white text-[12px]'>
							<p className='text-gray-400'>All Matches</p>
							<RightArrow />
						</div>
                    	<div className='flex items-center space-x-6'>
							{nextThreeDates.map((value, index) => (
								<p 
									key={index} 
									onClick={() => {dateHandleClick(value)}} 
									className={`${
										dateClick === value ? 'font-bold text-gray-200' : 'text-gray-400'} text-[10px] cursor-pointer`}>
										{value}
								</p>
							))}
					    </div>
					</div>

					<div className='flex items-center h-10 justify-start w-full px-2 bg-darkAsh text-sm'>
						<CustomCarousel
							className='flex items-start justify-start w-full'
							renderCarouselItems={() => 
								filteredSports.map((value, index) => (
									<div
										key={index}
										onClick={() => sportHandleClick(value.title)}
										className={`${
											value.title === sportClick
												? 'text-gold bg-gray-700'
												: 'text-gray-400'
										} flex items-center justify-center text-center font-bold hover:bg-gray-700 hover:text-gold cursor-pointer pr-3 pl-1 rounded-lg`}>
										<value.icon
											height={25}
											width={25}
										/>
										{value.title}
									</div>
								))
							}
						/>
					</div>


					<div className='flex items-center justify-start text-xs px-1 border-y border-y-lightAsh bg-darkAsh w-full h-8'>
						<CustomCarousel
							className='flex items-start justify-start w-full'
							renderCarouselItems={() =>
								leagues?.map((value, index) => (
									<div
									    key={index}
										onClick={() => {leagueHandleClick(value); setSelectedLeague(value)}}
										className={`${
											value === leagueClick
												? 'text-gold bg-gray-700 font-bold'
												: 'text-gray-500'
										} flex items-center justify-center text-center text-xs hover:bg-gray-700 hover:text-gold cursor-pointer rounded-lg py-1 px-3`}>
										{value}
									</div>
								)
							)}
						/>
					</div>


					<div className='flex items-center justify-start text-xs px-1 border-y border-y-lightAsh bg-darkAsh w-full h-8'>
						<CustomCarousel
							className='flex items-start justify-start w-full'
							renderCarouselItems={() =>
								odds?.map((value, index) => (
									<div
									key={index}
									onClick={() => handleClick(value)}
									className={`${
										value === link
											? 'text-gray-200 font-bold'
											: 'text-gray-700'
									} p-2 cursor-pointer hover:text-gray-200`}>
										{value}
								</div>
								)
							)}
						/>
					</div>

 
					{!collapse && (
						<div className='bg-darkAsh'>
							<div className='border-b border-lightAsh'>
								{Array.isArray(sportData) && sportData.length > 0 && sportData[0]?.availableMatch.map((value: any, index: number) => (
									<TableRow
										key={index}
										{...value}
										index={index}
										oddArray={sportData[0]?.availableMatch}
										isLiveTable={isLiveTable}
									/>
								))}

							</div>
                            {Array.isArray(sportData) && sportData.length > 0 && sportData[0]?.availableMatch.length > 3 && 
								<div className='h-12 w-full py-2 px-3'>
									<button className='w-full h-8 rounded-lg bg-gray-700 text-white text-xs'>
										View All
									</button>
								</div>
						    }
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BetTable;
