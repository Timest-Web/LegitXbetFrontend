import React from 'react'
import { useButtonEventClick } from '../../Hooks/useButtonEventClick';

const OddsButton = ({onextwo, onextwoValue}: {onextwo: string, onextwoValue: number}) => {
	const { click, handleClick } = useButtonEventClick();
	console.log(click);
	return (
		<button
			onClick={handleClick}
			type='submit'
			className={`flex items-center justify-between transition-all transform ${
				click ? 'scale-75 text-black bg-gold' : 'bg-lightAsh '
			} text-xs w-20 px-2 h-6 rounded-md`}>
			<p>{onextwo}</p>
			<p
				className={`${click ? 'text-black' : 'text-gold '}`}>
				{onextwoValue}
			</p>
		</button>
	);
}

export default OddsButton