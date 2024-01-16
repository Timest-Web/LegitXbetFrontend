import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';
import React from 'react'

const ModalContainer = ({ children }: { children: React.ReactNode }) => {
	const { isMobile } = useDeviceType();
  return (
		<div
			className={`flex flex-col items-center justify-center ${
				isMobile ? 'py-6' : 'py-12'
			}`}>
			{children}
		</div>
  );
}

export default ModalContainer