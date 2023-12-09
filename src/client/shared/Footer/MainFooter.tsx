import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowsChevronRightDouble} from '@heathmont/moon-icons-tw';
import Headphone from '../Svg/Headphone';
import { LicenseText } from './constant';
import PaystackImage from '../../../assets/Paystack.png';
import AppleStoreImage from '../../../assets/AppleStore.png';
import GooglePlayImage from '../../../assets/GooglePlay.png';
import FlutterWaveImage from '../../../assets/Flutterwave.png';

const UsefulLinks = () => (
	<div className='text-gray-700 text-sm underline space-y-2'>
		<p className='cursor-pointer'>Careers</p>
		<p className='cursor-pointer'>Betting Rules</p>
		<p className='cursor-pointer'>Privacy Policy</p>
		<p className='cursor-pointer'>Teams & Condition</p>
	</div>
);

const MobileExperience = () => (
	<div className='text-gray-700 text-sm underline space-y-4'>
		<p className='cursor-pointer font-semibold'>PWA</p>
		<div className='flex items-center justify-start space-x-3'>
			<Link href='#'>
				<Image
					src={AppleStoreImage}
					alt='Apple Store'
				/>
			</Link>
			<Link href='#'>
				<Image
					src={GooglePlayImage}
					alt='Google Play'
				/>
			</Link>
		</div>
		<div className='flex items-center space-x-2'>
			<Headphone />
			<p className='text-gray-200 font-bold cursor-pointer'>Supports</p>
		</div>
	</div>
);

const PaymentsSecuredBy = () => (
	<div>
		<p className='text-gray-200 text-sm cursor-default'>
			Payments secured by
		</p>
		<div className='text-sm underline w-full mt-5'>
			<div className='flex items-center space-x-4'>
				<Image
					src={PaystackImage}
					alt='Paystack'
					className='cursor-pointer'
				/>
				<Image
					src={FlutterWaveImage}
					alt='Flutterwave'
					className='cursor-pointer'
				/>
			</div>
			<p className='cursor-default text-xs text-gray-300 mt-16 '>
				2024 | Legitxbet | All rights reserved
			</p>
		</div>
	</div>
);

const MainFooter = () => (
	<div className='w-full'>
		<div className='flex items-center justify-center bg-darkAsh w-full'>
			<div className='flex items-start justify-between w-[1512px] py-10 px-24'>
				<p className='text-xs text-gray-700 w-96 cursor-default'>
					{LicenseText}
				</p>

				<div className='flex flex-col space-y-2'>
					<div className='flex space-x-1'>
						<p className='text-gray-200 text-sm cursor-default'>
							Useful Links{' '}
						</p>
						<ArrowsChevronRightDouble color='white' />
					</div>
					<UsefulLinks />
				</div>

				<div className='flex flex-col space-y-2'>
					<div className='flex space-x-1'>
						<p className='text-gray-200 text-sm cursor-default'>
							Mobile Experience{' '}
						</p>
						<ArrowsChevronRightDouble color='white' />
					</div>
					<MobileExperience />
				</div>

				<PaymentsSecuredBy />
			</div>
		</div>
	</div>
);

export default MainFooter;
