import React from 'react'
import { useLink } from '@/src/client/shared/Hooks/useLink';
import RenderLeagueItem from '../../components/RenderLeagueItem';

type PopularDataTypeProps = {
      link: string,
      title: string,
}[]


const PopularDataType = ({data}: {data: PopularDataTypeProps}) => {
	const { link, handleClick } = useLink('Live Matches');

      return (
            <div className='flex flex-col space-y-[1px]'>
                  {data?.map((value, index) => (
                        <RenderLeagueItem
                              key={index}
                              link={link}
                              href={value.link}
                              value={value.title}
                              handleClick={handleClick}
                        />
                  ))}
            </div>
      );
}

export default PopularDataType