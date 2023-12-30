import Image from "next/image";
import PaystackImage from '../../../../assets/Paystack.png';
import FlutterWaveImage from '../../../../assets/Flutterwave.png'
import useDeviceType from "../../Hooks/useDeviceType";

export const PaymentsSecuredBy = () => {
      const { isMobile } = useDeviceType();
      return (
			<div className={`px-8 mt-10 ${isMobile && 'pb-28'}`}>
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
					<p className='cursor-default text-xs text-gray-300 mt-8 '>
						2024 | Legitxbet | All rights reserved
					</p>
				</div>
			</div>
		);

};
