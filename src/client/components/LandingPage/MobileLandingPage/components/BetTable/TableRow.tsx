import React from 'react';
import Time from '@/src/client/shared/Svg/Time';
import Ranking from '@/src/client/shared/Svg/Ranking';
import { truncateText } from '@/src/client/shared/Utils/TruncateText';
import ScoreView from '../../../DesktopLandingPage/MainSection/CenterSection/components/ScoreView';
import { MoreOdds } from '../../../DesktopLandingPage/MainSection/CenterSection/components/MoreOdds';
import { OddsButtons } from '../../../DesktopLandingPage/MainSection/CenterSection/components/OddsButtons';

type Props = {
      index?: number;
	id: number;
	time: string;
	teamOne: string;
	teamTwo: string;
	winType: number;
	drawType: number;
	loseType: number;
	isLiveTable?: boolean;
};

type TableRowProps = Props & { 
	oddArray: Props[];
};

const TableRow = ({
      index,
	id,
	time,
	teamOne,
	teamTwo,
	winType,
	drawType,
	loseType,
	isLiveTable,
	oddArray,
}: TableRowProps) => {
	const truncatedTeamOne = truncateText(teamOne, 10);
      const truncatedTeamTwo = truncateText(teamTwo, 10);
	return (
		<div
			className={`bg-darkAsh w-full ${
				oddArray.length - 1 === index ? 'rounded-b-xl' : ''
			}`}>
			<div className='flex flex-row w-full h-11'>
				<div className='flex items-center justify-center w-20 h-11 text-[10px] space-x-1 border-r border-r-gray-800'>
					<Time />
					<p className='text-gray-400 '>{time}</p>
				</div>

				<div className='flex items-center justify-between space-x-6  overflow-x-scroll border-t border-t-gray-800 w-screen text-gray-200 px-4 text-xs'>
					<div className='flex items-center space-x-4 justify-start text-[10px]'>
						<p>v</p>
						<div className='w-16'>
							<p>{truncatedTeamOne}</p>
							<p>{truncatedTeamTwo}</p>
						</div>
					</div>

					<div className='w-8'>
						<Ranking />
					</div>
					<div className='flex space-x-6'>
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
