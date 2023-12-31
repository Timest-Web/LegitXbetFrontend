import React from 'react';
import { ModalProps } from '../constant/type';

const CustomerCareModal = ({
	setOpenModal,
	modalContent,
	openModal,
	className,
}: ModalProps) => {
	return (
		<div>
			{openModal && (
				<div>
					<div
						onClick={() => setOpenModal(false)}
						className={`z-10000 fixed w-[100%] h-[100%] top-0 left-0 bg-black opacity-75`}>	
					</div>
					<div
						className={`flex flex-col items-center py-5 z-10000 fixed bg-white right-0 h-[600px] bottom-0 w-2/6 transform rounded-2xl ${className}`}>
						<div className='flex items-center justify-between w-full px-8'>
							<p className='text-black font-bold'>
								Legit X bet Customer support
							</p>
							<button
								className='flex items-center justify-center px-4 py-1 text-center text-xs border border-gray-600 rounded'
								onClick={() => setOpenModal(false)}>
								Close
							</button>
						</div>
						{/* CustomerCareModal Content */}
						<div className='w-full'>{modalContent}</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomerCareModal;
