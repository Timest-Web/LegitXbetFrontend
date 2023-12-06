import React from 'react';

const Crown = ({ color }: { color: string }) => {
	return (
		<svg
			width='20'
			height='20'
			color={color}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<g opacity='0.5'>
				<path
					d='M13.9167 15.8167H6.08338C5.73338 15.8167 5.34171 15.5417 5.22504 15.2083L1.77504 5.55834C1.28338 4.17501 1.85838 3.75001 3.04171 4.60001L6.29171 6.92501C6.83338 7.30001 7.45004 7.10834 7.68338 6.50001L9.15004 2.59167C9.61671 1.34167 10.3917 1.34167 10.8584 2.59167L12.325 6.50001C12.5584 7.10834 13.175 7.30001 13.7084 6.92501L16.7584 4.75001C18.0584 3.81667 18.6834 4.29168 18.15 5.80001L14.7834 15.225C14.6584 15.5417 14.2667 15.8167 13.9167 15.8167Z'
					stroke='#E6EAEE'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					opacity='0.34'
					d='M5.41663 18.3333H14.5833'
					stroke='#E6EAEE'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					opacity='0.34'
					d='M7.91663 11.6667H12.0833'
					stroke='#E6EAEE'
					stroke-width='1.5'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
		</svg>
	);
};

export default Crown;
