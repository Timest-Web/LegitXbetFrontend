import React, { useState } from 'react';
import SingleThumbRange from '@/src/client/shared/Range/SingleThumbRange';

const FilterByTime = () => {
	const [filterValue, setFilterValue] = useState(0);
	const timeStart = ['1hr', '3hr', '6hr', '12h', '24', 'All'];

	return (
		<div className='w-[243px] bg-black px-2 py-3 rounded-lg'>
			<p className='font-thin text-xs text-gray-400'>
				Filter by start time
			</p>
			<SingleThumbRange
				step={20}
				setRangeValue={setFilterValue}
			/>
			<div className='flex items-start justify-between text-gray-400 mt-2'>
				{timeStart.map((value, index) => (
					<p
						key={index}
						className='text-[9px]'>
						{value}
					</p>
				))}
			</div>
		</div>
	);
};

export default FilterByTime;
