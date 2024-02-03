import React from 'react'
import { FOOTBALL_DATA } from '../../LandingPage/DesktopLandingPage/LeftSection/constant/data';
import RenderLeagueItem from '../../components/RenderLeagueItem';
import { useLink } from '@/src/client/shared/Hooks/useLink';

const PopularDataType = () => {
	const { link, handleClick } = useLink('Live Matches');

      return (
                  <div className='flex flex-col space-y-[1px]'>
                        {FOOTBALL_DATA.map((value, index) => (
                              <RenderLeagueItem
                                    key={index}
                                    link={link}
                                    value={value}
                                    handleClick={handleClick}
                              />
                        ))}
                  </div>
      );
}

export default PopularDataType