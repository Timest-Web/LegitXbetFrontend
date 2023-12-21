import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';
import Link from 'next/link';


const DropdownIcon: React.FC<DropDownProps> = ({ arrayData, title, icon}) => {
      const [option, setOption] = useState<Data | null>(null);
      // console.log(arrayData[0])

	return (
		<div className='flex w-full items-center justify-center h-12 rounded'>
			<Dropdown
				value={option}
				size='sm'
				onChange={setOption}>
				{({ open }) => (
					<>
						<div className='flex items-center justify-center text-white -space-x-2'>
							{option ? <>{option.icon}</> : icon}

							<Dropdown.InsetSelect
								open={open}
								placeholder={title}>
								<p className='text-sm text-gray-200 font-semibold'>
									{option ? <>{option.title}</> : title}
								</p>
							</Dropdown.InsetSelect>
						</div>

						<Dropdown.Options
							className='bg-black rounded-xl p-3'
							menuWidth='20'>
							{arrayData?.map((value, index) => (
								<Link
									href={value.link}
									key={index}>
									<Dropdown.Option value={value}>
										{({ selected, active }) => (
											<MenuItem
												isActive={active}
												className='flex items-start justify-start w-28'
												isSelected={selected}>
												<div className='w-8'>
													{value.icon}
												</div>
												<p className='text-start w-28 text-gray-400 text-xs'>
													{value.title}
												</p>
											</MenuItem>
										)}
									</Dropdown.Option>
								</Link>
							))}
						</Dropdown.Options>
					</>
				)}
			</Dropdown>
		</div>
	);
};

export default DropdownIcon;
type Data = {
	title: string;
	icon: React.ReactNode;
	link:string
};

type DropDownProps = {
      arrayData: Data[] | undefined;
      title: string;
      icon: React.ReactNode
};