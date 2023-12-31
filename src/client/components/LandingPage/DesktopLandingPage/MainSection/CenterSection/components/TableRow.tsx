import React from 'react';
import Time from '@/src/client/shared/Svg/Time';
import Ranking from '@/src/client/shared/Svg/Ranking';
import { OddsButtons } from './OddsButtons';
import { MoreOdds } from './MoreOdds';
import ScoreView from './ScoreView';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';

const TableRow = ({
	id,
	time,
	teamOne,
	teamTwo,
	winType,
	drawType,
	loseType,
	isLiveTable,
}: {
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType: number;
	drawType: number;
	loseType: number;
	isLiveTable?: boolean;
}) => {
	const truncatedTeamOne = truncateText(teamOne, 10);
	const truncatedTeamTwo = truncateText(teamTwo, 10);
	return (
		<div className='bg-darkAsh w-full rounded-b-xl'>
			<div className='flex flex-row w-full'>
				<div className='flex items-center justify-center border-r border-r-gray-800 w-20 h-12 text-[10px] space-x-1'>
					<Time />
					<p className='text-gray-400 '>{time}</p>
				</div>
				<div className='flex items-center justify-between border-b border-b-gray-800 w-full text-gray-200 px-4 text-xs'>
					<div className='flex items-center justify-between space-x-4 text-[10px] w-40'>
						<p>{truncatedTeamOne}</p>
						<p>v</p>
						<p>{truncatedTeamTwo}</p>
					</div>
					<Ranking />
					<div className='flex space-x-4'>
						{isLiveTable === true && (
							<ScoreView
								teamOneScore={2}
								teamTwoScore={0}
							/>
						)}
						<OddsButtons
							draw={drawType}
							win={winType}
							lose={loseType}
							id={id}
						/>
					</div>
					<MoreOdds />
				</div>
			</div>
		</div>
	);
};

export default TableRow;
