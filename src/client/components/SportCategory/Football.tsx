import React, { useState } from 'react';
import Layout from '../Layout';
import { useLink } from '../../shared/Hooks/useLink';
import RenderLeagueItem from '../components/RenderLeagueItem';
import { FOOTBALL_DATA } from '../LandingPage/DesktopLandingPage/MainSection/LeftSection/constant/data';
import SingleThumbRange from '../../shared/Range/SingleThumbRange';
import { SoftwareSorting } from '@heathmont/moon-icons-tw';
import { translateSliderValue } from '../../shared/Range/TranslateSliderValue';


const Football = () => {
	const [click, setClick] = useState(false);
	const [oddValue, setOddValue] = useState(0);
	const [filterValue, setFilterValue] = useState(0);
	const { link, handleClick } = useLink('Live Matches');
	const timeStart = ['1hr', '3hr', '6hr', '12h', '24', 'All'];
	const translateOddValue = translateSliderValue(oddValue);
	console.log(translateOddValue, oddValue);

	return (
		<Layout>
			<div className='space-y-5'>
				<div className='flex flex-col space-y-[1px]'>
					{FOOTBALL_DATA.map((value, index) => (
						<RenderLeagueItem
							key={index}
							link={link}
							value={value}
							handleClick={handleClick}
						/>
					))}
				</div>

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

				<div className='w-[243px] bg-black px-2 py-3 rounded-lg'>
					<div className='flex items-center justify-between'>
						<p className='font-thin text-xs text-gray-400'>
							Odds Filter
						</p>
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
										oddValue !> 90
											? 'bg-gold text-white'
											: 'bg-gray-300 text-gray-500'
									}`}>
									Appy
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default Football;
