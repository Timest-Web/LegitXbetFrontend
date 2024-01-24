import React from 'react';
import Image from 'next/image';
import LoaderGif from '../../../assets/Loader.gif';

const Loader = ({height, width}: {height: number, width: number}) => {
	return (
		<Image
			src={LoaderGif}
			alt='Loader alt'
			height={height}
			width={width}
		/>                              
	);
};

export default Loader;
