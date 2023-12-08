import React from 'react'
import { useButtonEventClick } from '../../Hooks/useButtonEventClick';

const OddsButton = ({onextwo, onextwoValue}: {onextwo: string, onextwoValue: number}) => {
	const { click, handleClick } = useButtonEventClick();
	return (
		<button
			onClick={handleClick}
			type='submit'
			className={`flex items-center justify-between transition-all transform ${
				click ? 'scale-75' : ''
                        } text-xs bg-lightAsh w-24 px-3 h-7 rounded-md`}>
                  <p>
                  {onextwo}
                  </p>
                  <p className='text-gold'>{onextwoValue}</p>
		</button>
	);
}

export default OddsButton