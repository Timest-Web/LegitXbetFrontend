import React, { useState } from 'react';
import { SoftwareSorting } from '@heathmont/moon-icons-tw';
import SingleThumbRange from '@/src/client/shared/Range/SingleThumbRange';
import { translateSliderValue } from '@/src/client/shared/Range/TranslateSliderValue';

const OddsFilter = () => {
	const [click, setClick] = useState(false);
	const [oddValue, setOddValue] = useState(0);
	const translateOddValue = translateSliderValue(oddValue);
      
	return (
		<div className='w-[243px] bg-black px-2 py-3 rounded-lg'>
			<div className='flex items-center justify-between'>
				<p className='font-thin text-xs text-gray-400'>Odds Filter</p>
				{!click && (
					<SoftwareSorting
						color='gray'
						onClick={() => setClick(true)}
						className='h-7 w-7 -mt-1 cursor-pointer'
					/>
				)}
			</div>
			{click && (
				<div>
					<p className='text-gold font-bold text-[10px] mt-2'>
						{`1 - ${translateOddValue}`}
					</p>
					<SingleThumbRange
						step={0}
						setRangeValue={setOddValue}
					/>
					<div className='flex items-center justify-between text-gray-400 text-[9px] mt-1'>
						<p>1</p>
						<p>Max</p>
					</div>

					<div className='flex space-x-2 text-[10px] mt-4'>
						<button
							onClick={() => setClick(false)}
							className='border border-gold py-1 px-4 text-gold w-full'>
							Clear
						</button>
						<button
							className={` py-1 px-4 w-full ${
								oddValue! > 90
									? 'bg-gold text-white'
									: 'bg-gray-300 text-gray-500'
							}`}>
							Appy
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default OddsFilter;
