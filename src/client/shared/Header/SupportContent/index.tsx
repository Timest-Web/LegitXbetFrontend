import React from 'react';
import Received from '../../Svg/Received';
import { Button } from '../../Button';

type TextProps = {
	name: string;
	message: string;
	position: string;
};

const TextComponent = ({ position, name, message }: TextProps) => {
	return (
		<div className={`flex flex-col ${position} text-xs w-10/12`}>
			<p className='font-bold px-3'>{name}</p>
			<div className='w-full text-slate-600 mt-1 rounded-lg bg-[#F5F5F5]'>
				<p className='text-start py-2 px-4'>{message}</p>
			</div>
		</div>
	);
};

const SupportContent = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full space-y-4 px-4 pt-5'>
			<hr className='w-full border-gray-300 space-x-6' />
			<div className='relative flex flex-col w-full overflow-auto'>
				<div className='space-y-12 h-[400px]'>
					<div className='w-full'>
						<TextComponent
							position='items-start'
							name='Johnson Customer'
							message='Lorem ipsum dolor sit amet consectetur. Phasellus
							urna phasellus orci turpis. Ac viverra imperdiet
							blandit habitasse enim.'
						/>
						<p className='text-gray-600 text-start text-[10px] mt-2 px-3'>{`20/11/2023`}</p>
					</div>

					<div className='flex flex-col items-end justify-end w-full'>
						<TextComponent
							position='items-end'
							name='Support'
							message='Lorem ipsum dolor sit amet consectetur. Phasellus
							urna phasellus orci turpis. Ac viverra imperdiet
							blandit habitasse enim.'
						/>
						<p className='text-end text-[10px] mt-2 px-3'>{`Just Now`}</p>
					</div>
				</div>

				<div className='fixed flex flex-col w-full bottom-0 left-0 right-0 p-4 space-y-1 bg-white rounded-lg'>
					<div className='flex font-bold space-x-1 px-3'>
						<p className='text-xs'>Reply Message</p>
						<Received />
					</div>
					<textarea className='bg-[#F5F5F5] w-full h-32 rounded-lg p-2'>
					</textarea>
					<Button
						text='Send response'
						link=''
						className='fixed bottom-7 right-6 text-xs border-2 rounded-lg font-bold border-gray-800 p-2'
						onClick={Function}
					/>
				</div>
			</div>
		</div>
	);
};

export default SupportContent;
