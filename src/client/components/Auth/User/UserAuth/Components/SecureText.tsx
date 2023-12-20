import Lock from '@/src/client/shared/Svg/Lock';
import React from 'react'

const SecureText = () => {
  return (
		<div className='flex items-center justify-center space-x-2 mt-4'>
			<Lock />
			<p className='text-gray-400 text-[11px]'>
				Secure password has numbers and character sets
			</p>
		</div>
  );
}

export default SecureText
