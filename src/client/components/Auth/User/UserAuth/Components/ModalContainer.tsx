import React from 'react'

const ModalContainer = ({children}: {children: React.ReactNode}) => {
  return (
		<div className='flex flex-col items-center justify-center py-12'>
			{children}
		</div>
  );
}

export default ModalContainer