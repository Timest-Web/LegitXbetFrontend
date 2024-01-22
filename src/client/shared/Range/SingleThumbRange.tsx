import React, { SetStateAction } from 'react';

const SingleThumbRange = ({
	setRangeValue,
	step
}: {
	step?: number;
	setRangeValue: React.Dispatch<SetStateAction<number>>;
}) => {
	const handleInputChange = (e: any) => {
		let target = e.target;
		if (e.target.type !== 'range') {
			target = document.getElementById('range');
		}
		const min = target.min;
		const max = target.max;
		const val = target.value;
		let percentage = ((val - min) * 100) / (max - min);

		if (document.documentElement.dir === 'rtl') {
			percentage = max - val;
		}

		target.style.backgroundSize = `${percentage}% 100%`;
		setRangeValue(val);
	};
	return (
		<input
			min={0}
			max={100}
			type='range'
			className='h-2 w-full text-gold'
			onChange={handleInputChange}
			step={step}
		/>
	);
};

export default SingleThumbRange;
