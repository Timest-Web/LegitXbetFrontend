import React, { Dispatch, SetStateAction, useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type TitleProps = {
	title: string;
	arrayTitle: string[];
	// setLink: Dispatch<SetStateAction<string | []>>;
	hoverBgColor: string;
};

const DropDown = ({ title, arrayTitle, hoverBgColor }: TitleProps) => {
	const [option, setOption] = useState('');
	const handleOptionSelect = (selectedLink: string) => {
		setOption(selectedLink);
		// setLink(selectedLink.name);
	};

	return (
		<Dropdown
			size='sm'
			value={option}
			onChange={setOption}>
			{({ open }) => (
				<>
					<Dropdown.Select
						open={open}
						placeholder={title}>
						{option}
					</Dropdown.Select>
					<Dropdown.Options className='border bg-white text-gray-600 z-50'>
						{arrayTitle.map((value, index) => (
							<p
								className={`${hoverBgColor} hover:text-gray-200`}
								key={index}>
								<Dropdown.Option value={value}>
									{({ selected, active }) => (
										<MenuItem
											isActive={active}
											isSelected={selected}
											onClick={() =>
												handleOptionSelect(value)
											}>
											{value}
										</MenuItem>
									)}
								</Dropdown.Option>
							</p>
						))}
					</Dropdown.Options>
				</>
			)}
		</Dropdown>
	);
};

export default DropDown;
