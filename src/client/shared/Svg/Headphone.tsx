import React from 'react';

const Headphone = ({
	color,
	height,
	width,
}: {
	color: string;
	height: string;
	width: string;
}) => {
	return (
		<svg
			width={width}
			height={height}
			color={color}
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g opacity='0.5'>
				<path
					d='M5.45999 18.49V15.57C5.45999 14.6 6.21999 13.73 7.29999 13.73C8.26999 13.73 9.13999 14.49 9.13999 15.57V18.38C9.13999 20.33 7.51999 21.9501 5.56999 21.9501C3.61999 21.9501 1.99999 20.32 1.99999 18.38V12.22C1.88999 6.60005 6.32999 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49'
					stroke={color}
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
		</svg>
	);
};

export default Headphone;
