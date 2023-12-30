import React from 'react';
import { LicenseText } from '../constant';
import { ArrowsChevronRightDouble } from '@heathmont/moon-icons-tw';
import { UsefulLinks } from '../components/UsefulLinks';
import { MobileExperience } from '../components/MobileExperience';
import { PaymentsSecuredBy } from '../components/PaymentSecureBy';

const MainFooter = () => (
	<div className='w-full'>
		<div className='flex items-center justify-center bg-darkAsh w-full'>
			<div className='flex items-start justify-between w-[1512px] py-10 px-24'>
				<p className='text-xs text-gray-600 w-96 cursor-default'>
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
