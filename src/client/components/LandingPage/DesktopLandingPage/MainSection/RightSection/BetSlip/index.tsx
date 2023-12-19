import React from 'react';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import RenderBetSlipType from './components/RenderBetSlipType';
import useBet from '@/src/client/shared/Context/BetContext/useBet';

const BetSlip = () => {
	const betSlipTitle = ['Bet Slip', 'My Bets'];
      const BetSlipType = ['Single', 'Multiple', 'System'];
	const { link, handleClick } = useLink('Bet Slip');
	const {bet} = useBet()
	const { link: betSlipTypeLink, handleClick: betSlipTypeHandleClick } = useLink('Single');

	return (
		<div className='w-[283px] h-max rounded-lg shadow-lg border bg-white pb-2'>
			<div className='flex items-center justify-between py-4 px-3'>
				{betSlipTitle.map((value, index) => (
					<div
						key={index}
						onClick={() => handleClick(value)}
						className={`${
							value === link
								? 'bg-black text-white'
								: 'text-black'
						} flex h-[32px] w-[116px] items-center font-bold justify-center transition transform duration-1000 transition-x m-auto rounded-md text-xs cursor-pointer`}>
						<p className='text-center'>{value}</p>
					</div>
				))}
			</div>

			<hr />

			<div className='flex items-center justify-between px-12 text-xs py-3'>
				{BetSlipType.map((value, index) => (
					<p
						key={index}
						onClick={() => betSlipTypeHandleClick(value)}
						className={`${
							value === betSlipTypeLink
								? 'text-black'
								: 'text-gray-400'
						} cursor-pointer`}>
						{value}
					</p>
				))}
			</div>

			<hr />
			<RenderBetSlipType betSlipTypeLink={betSlipTypeLink} />
		</div>
	);
};

export default BetSlip;
