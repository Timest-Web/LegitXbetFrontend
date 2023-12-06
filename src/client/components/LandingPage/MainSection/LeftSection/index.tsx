import React from 'react';
import { MailFlag, ControlsChevronRightSmall } from '@heathmont/moon-icons-tw';
import { POPULAR_DATA } from './constant/data';
import { useLink } from '@/src/client/shared/Hooks/useLink';

const LeftSection = () => {
      const { link, handleClick } = useLink('Favourite Leagues');
	return (
		<div className=''>
			<div className='flex flex-col space-y-[1px]'>
				{POPULAR_DATA.map((value, index) => (
					<div
                                    key={index}
                                    onClick={() => handleClick(value)}
						className={`${link === value ? "text-gray-200" : "text-gray-400"} flex items-center justify-between px-4 h-[53px] w-[243px] bg-black rounded-r-xl cursor-pointer`}>
						<MailFlag
							height={25}
							width={25}
						/>
						<p className=' font-bold text-sm'>{value}</p>
						<ControlsChevronRightSmall
							height={30}
							width={30}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftSection;
