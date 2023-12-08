import React from 'react';
import Image from 'next/image';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import Receipt from '@/src/client/shared/Svg/Receipt';
import BetCup from '../../../../../assets/betCup.png';
import FifaWordCup2 from '../../../../../assets/fifaworldcup2.png';


const RightSection = () => {
	const betSlipTitle = ['Bet Slip', 'My Bets'];
	const { link, handleClick } = useLink('Bet Slip');
	return (
		<div className='flex flex-col h-[1500px] space-y-2'>
			<div className='w-[283px] h-[334px] rounded-lg shadow-lg border bg-white'>
				<div className='flex items-center justify-between py-3 px-6'>
					{betSlipTitle.map((value, index) => (
						<div
							key={index}
							onClick={() => handleClick(value)}
							className={`${
								value === link
									? 'bg-black text-white'
									: 'text-black'
							} flex h-[32px] w-[108px] px-6 items-center justify-center m-auto rounded-md text-sm cursor-pointer`}>
							<p className='text-center'>{value}</p>
						</div>
					))}
                        </div>

                        <hr />

                        <div className='flex items-center justify-center w-full m-auto'>
                              <div className='flex flex-col items-center justify-center space-y-3 mt-24'>
                                    <Receipt />
                                    <p className='text-gray-400 text-xs'>No selection yet</p>
                              </div>
                        </div>
                  </div>
                  
                  <div className='flex flex-col items-center justify-center space-y-1'>
                        <Image src={BetCup} alt='BetCup' />
                        <Image src={FifaWordCup2} alt='fifaworld' />
                  </div>
		</div>
	);
};

export default RightSection;
