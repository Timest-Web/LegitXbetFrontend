import React from 'react';
import Time from '@/src/client/shared/Svg/Time';
import Ranking from '@/src/client/shared/Svg/Ranking';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import ScoreView from '../../../DesktopTable/components/ScoreView';
import { MoreOdds } from '../../../DesktopTable/components/MoreOdds';
import { OddsButtons } from '../../../DesktopTable/components/OddsButtons';
import Link from 'next/link';


const TableRow = ({
	id,
	time,
	teamOne,
	teamTwo,
	winType,
	drawType,
	loseType,
	isLiveTable,
	teamOneScore,
	teamTwoScore,
}: {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType: string;
	drawType: string;
	loseType: string;
	teamOneScore: string;
	teamTwoScore: string;
	isLiveTable?: boolean;
}) => {
	const truncatedTeamOne = truncateText(teamOne, 10);
	const truncatedTeamTwo = truncateText(teamTwo, 10);
	const winInt = parseFloat(winType);
	const drawInt = parseFloat(drawType);
	const loseInt = parseFloat(loseType);

	const selectedOddObj = {
		id, 
		time, 
		teamOne, 
		teamTwo, 
		winType: winInt, 
		drawType: drawInt, 
		loseType: loseInt
	}
	
	return (
		<div className={`bg-darkAsh w-full`}>
			<div className='flex flex-row w-full h-11'>
				<div className='flex items-center justify-center w-20 h-11 text-[10px] space-x-1 border-r border-r-lightAsh'>
					<Time color='#E6EAEE' />
					<p className='text-gray-400 '>{time}</p>
				</div>

				<div className='flex items-center justify-between space-x-6  overflow-x-scroll border-t tablerow border-t-lightAsh w-screen text-gray-200 px-4 text-xs'>
					<Link href={`/sports/football/40`} className='flex items-center space-x-4 justify-start text-[10px]'>
						<p>v</p>
						<div className='w-16'>
							<p>{truncatedTeamOne}</p>
							<p>{truncatedTeamTwo}</p>
						</div>
					</Link>

					<div className='w-8'>
						<Ranking />
					</div>
					<div className='flex space-x-6'>
						{isLiveTable === true && (
							<ScoreView
								teamOneScore={teamOneScore}
								teamTwoScore={teamTwoScore}
							/>
						)}
						<OddsButtons
						    selectedOddObj={selectedOddObj}
						/>
					</div>
					<MoreOdds />
				</div>
			</div>
		</div>
	);
};

export default TableRow;
