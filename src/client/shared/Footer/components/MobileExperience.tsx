import Image from "next/image";
import Link from "next/link";
import Headphone from "../../Svg/Headphone";
import AppleStoreImage from '../../../../assets/AppleStore.png';
import GooglePlayImage from '../../../../assets/GooglePlay.png';

export const MobileExperience = () => (
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
