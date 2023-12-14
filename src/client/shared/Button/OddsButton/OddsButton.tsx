import React, { useState } from 'react';
import { useButtonEventClick } from '../../Hooks/useButtonEventClick';
import useBet from '../../Context/BetContext/useBet';

const OddsButton = ({
	id,
	onextwo,
	onextwoValue,
}: {
	id: number;
	onextwo: string;
	onextwoValue: number;
}) => {
	const { click, handleClick } = useButtonEventClick();
	const { addToBetSlip, handleDelete } = useBet();
	const [color, setColor] = useState(false);

	const onHandleClick = (id: number, odd: number) => {
		setColor(!color);
		addToBetSlip(id, odd);
		if (color) {
			handleDelete({id, odd});
		}
	};


	return (
		<button
			onClick={() => {
				handleClick();
				onHandleClick(id, onextwoValue);
			}}
			type='submit'
			className={`flex items-center justify-between transition-all transform ${
				color ? ' text-black bg-gold' : 'bg-lightAsh '
			} text-xs w-20 px-2 h-6 rounded-md ${click ? 'scale-75' : ''}`}>
			<p>{onextwo}</p>
			<p className={`${color ? 'text-black' : 'text-gold '}`}>
				{onextwoValue}
			</p>
		</button>
	);
};

export default OddsButton;
