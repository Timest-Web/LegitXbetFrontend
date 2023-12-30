import React from 'react';
import Image from 'next/image';
import { LicenseText, MOBILE_FOOTER_LOGO } from '../constant';
import { ArrowsChevronRightDouble } from '@heathmont/moon-icons-tw';
import { UsefulLinks } from '../components/UsefulLinks';
import { MobileExperience } from '../components/MobileExperience';
import { PaymentsSecuredBy } from '../components/PaymentSecureBy';

const MobileFooter = () => {
      return (
			<div className='bg-darkAsh w-ful'>
				<div className='p-8 bg-lightAsh w-full mt-6 text-lightGray'>
					Official sports betting partners
				</div>

				<div className='px-8 py-6'>
					<div className='grid grid-cols-4 gap-2 gap-y-7 mt-7'>
						{MOBILE_FOOTER_LOGO.map((value, index) => (
							<Image
								key={index}
								src={value}
								alt='logo img alt'
								height={45}
								width={45}
							/>
						))}
					</div>
					<p className='text-sm mt-6 text-gray-600'>{LicenseText}</p>
				</div>

				<div className='flex items-start justify-between pl-8 mt-6 pr-2'>
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
				</div>

				<PaymentsSecuredBy />
			</div>
		);
};

export default MobileFooter;
