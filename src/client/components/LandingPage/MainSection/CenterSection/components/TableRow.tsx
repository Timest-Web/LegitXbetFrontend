import React from 'react'
import Time from '@/src/client/shared/Svg/Time';
import Ranking from '@/src/client/shared/Svg/Ranking';
import OddsButton from '@/src/client/shared/Button/OddsButton/OddsButton';
import { ControlsChevronRight } from '@heathmont/moon-icons-tw';

const TableRow = () => {

  return (
        <div className='bg-darkAsh w-full rounded-b-lg'>
			<div className='flex flex-row w-full'>
				<div className='flex items-center justify-center border-r border-r-gray-800 w-20 h-12 text-[10px] space-x-1'>
					<Time />
					<p className='text-gray-400 '>00:24</p>
				</div>
				<div className='flex items-center justify-between border-b border-b-gray-800 w-full text-gray-200 px-4 text-xs'>
					<div className='flex items-center justify-between space-x-4 text-[10px]'>
						<p>Man City</p>
						<p>v</p>
						<p>Chelsea</p>
					</div>
					<Ranking />
					<div className='flex flex-row space-x-2'>
						<OddsButton
							onextwo='1'
							onextwoValue='4'
						/>
						<OddsButton
							onextwo='X'
							onextwoValue='3.5'
						/>
						<OddsButton
							onextwo='2'
							onextwoValue='2.4'
						/>
					</div>
					<div
						className={`flex items-center justify-between text-xs bg-lightAsh w-24 px-3 h-7 rounded-md cursor-pointer`}>
						<p>All</p>
						<div className='flex items-center'>
							<p>Odds</p>
							<ControlsChevronRight
								height={14}
								width={14}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default TableRow