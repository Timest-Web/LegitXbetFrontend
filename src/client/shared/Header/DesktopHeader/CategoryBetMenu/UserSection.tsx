import React from 'react';
import Link from 'next/link';
import DropdownIcon from '../../components/DropdonIcon';
import { USER_HEADER_DATA } from '../../constant';
import useUser from '../../../Context/UserContext/useUser';

const UserSection = () => {

	return (
		<div className={`flex items-center`}>
			{USER_HEADER_DATA.map((value, index) => (
				<div
					key={index}
					className={`${index === 1 ? 'ml-7' : ''}`}>
					{index === 1 ? (
						<DropdownIcon 
							title={value.title}
					        	icon={value.icon}
							data={value.data}
						/>
					) : (
						<Link
							href='#'
							className={`flex items-center justify-center space-x-2 ${
								index === 2 ? 'flex-row-reverse space-x-4' : ''
							} `}>
							<div className={`${index == 2 ? 'ml-2' : ''} `}>
								{value.icon}
							</div>
							<p
								className={`text-center font-bold text-gray-200 pt-1 text-sm`}>
								{value.title}
							</p>
						</Link>
					)}
				</div>
			))}
		</div>
	);
};

export default UserSection;
