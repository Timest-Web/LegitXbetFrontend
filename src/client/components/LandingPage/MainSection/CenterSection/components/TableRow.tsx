import React from 'react';
import Time from '@/src/client/shared/Svg/Time';
import Ranking from '@/src/client/shared/Svg/Ranking';
import { OddsButtons } from './OddsButtons';
import { MoreOdds } from './MoreOdds';

const TableRow = ({ time, teamOne, teamTwo, win, draw, lose }: {
      time: string,
      teamOne: string,
      teamTwo: string,
      win: number,
      draw: number,
      lose: number
}) => (
	<div className='bg-darkAsh w-full rounded-b-xl'>
		<div className='flex flex-row w-full'>
			<div className='flex items-center justify-center border-r border-r-gray-800 w-20 h-12 text-[10px] space-x-1'>
				<Time />
                        <p className='text-gray-400 '>{time}</p>
			</div>
			<div className='flex items-center justify-between border-b border-b-gray-800 w-full text-gray-200 px-4 text-xs'>
				<div className='flex items-center justify-between space-x-4 text-[10px] w-40'>
                              <p>{teamOne}</p>
					<p>v</p>
                              <p>{ teamTwo}</p>
				</div>
				<Ranking />
                        <OddsButtons win={win} draw={draw} lose={lose} />
				<MoreOdds />
			</div>
		</div>
	</div>
);

export default TableRow;
