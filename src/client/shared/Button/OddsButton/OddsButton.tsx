import React, { useState } from 'react';
import { useButtonEventClick } from '../../Hooks/useButtonEventClick';

const OddsButton = ({
	onextwo,
	onextwoValue,
}: {
	onextwo: string;
	onextwoValue: number;
}) => {
	const { click, handleClick } = useButtonEventClick();
	const [color, setColor] = useState(false);

	const onHandleClick = () => {
		setColor(!color);
	};
	return (
		<button
			onClick={() => {
				handleClick();
				onHandleClick();
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
