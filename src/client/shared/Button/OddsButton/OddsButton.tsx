import React, { useEffect, useState } from 'react';
import { useButtonEventClick } from '../../Hooks/useButtonEventClick';
import useBet from '../../Context/BetContext/useBet';

const OddsButton = ({
	id,
	onextwo,
	onextwoValue,
}: {
	id: number;
	onextwo: string;
	onextwoValue: string;
}) => {
	const { click, handleClick } = useButtonEventClick();
	const { bet, addToBetSlip, handleDelete } = useBet();
	const [color, setColor] = useState(false);
	const [isBet, setIsBet] = useState(false);
	const onHandleClick = (id: number, odd: number) => {
		setColor(!color);
		addToBetSlip(id, odd);
		if (color) {
			handleDelete({ id, odd });
		}
	};

	console.log(id, onextwo, onextwoValue);

	useEffect(() => {
		const isObjectExist = bet.some(
			(item) => item.id === id && item.odd === parseFloat(onextwoValue)
		);
		setIsBet(isObjectExist);
	}, [bet, id, onextwoValue]);

	return (
		<button
			onClick={() => {
				handleClick();
				onHandleClick(id, parseFloat(onextwoValue));
			}}
			type='submit'
			className={`flex items-center justify-between transition-all transform ${
				isBet ? ' text-black bg-gold' : 'bg-lightAsh '
			} text-xs w-20 px-2 h-6 rounded-md ${click ? 'scale-75' : ''}`}>
			<p>{onextwo}</p>
			<p className={`${isBet ? 'text-black' : 'text-gold '}`}>
				{parseFloat(onextwoValue)}
			</p>
		</button>
	);
};

export default OddsButton;
