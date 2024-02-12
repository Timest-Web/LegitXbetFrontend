import React from 'react';
import Image from 'next/image';
import Layout from './Layout';
import { TimeClock } from '@heathmont/moon-icons-tw';
import ManULogo from './../constant/assets/man-u.png';
import ChelseaLogo from './../constant/assets/cheasea.png';
import { useLink } from '@/src/client/shared/Hooks/useLink';
import { OddsButtons } from './components/OddsButtons';
import { GAME_ODDS } from '../constant/data';
import { CustomCarousel } from '@/src/client/shared/Carousel';
import MobileNavbar from '@/src/client/shared/MobileNavbar';
import useDeviceType from '@/src/client/shared/Hooks/useDeviceType';


const SelectedGame = () => {
	const { link, handleClick } = useLink('All');
  const {isMobile} = useDeviceType()
	const values = [
		'All',
		'Main',
		'Goals',
		'Half',
		'Bookings',
		'Corners',
		'Specials',
		'1 Min. Markets',
		'Players',
	];

	return (
    <Layout>
      <div className="w-full rounded-xl bg-white lg:p-12 p-3 space-y-2">
        <div className="flex items-start justify-between">
          <div className="space-y-5">
            <p className="text-black font-bold lg:text-xl text-sm">Game Odds</p>
            <div className="flex items-center justify-start text-[10px] space-x-1 start-0">
              <TimeClock
                color="black"
                className="text-black"
                height={20}
                width={20}
              />
              <p className="text-[14px]">00:24</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Image src={ManULogo} alt="club logo" />
              <p>Man U</p>
            </div>
            <p>-</p>
            <div className="flex items-center space-x-2">
              <Image src={ChelseaLogo} alt="club logo" />
              <p>Chelsea</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex items-start justify-start flex-wrap text-xs border-y-lightGray">
          {values.map((value, index) => (
            <p
              key={index}
              className={`${
                link === value ? "text-black font-bold" : "text-gray-500"
              } cursor-pointer lg:text-[14px] text-[12px] p-3`}
              onClick={() => handleClick(value)}
            >
              {value}
            </p>
          ))}
        </div>

        {!isMobile && (
          <div className="space-y-4 w-full">
            {GAME_ODDS.map((value, index) => (
              <div
                key={index}
                className="flex flex-row items-center space-x-3 justify-between py-2 px-4 bg-lightGray rounded-lg"
              >
                <p className="text-sm w-4/12">{value.title}</p>
                <div className="flex space-x-2 lg:w-full w-full">
                  <OddsButtons
                    {...value}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && (
          <div className="space-y-4 w-full lg:mt-0 -mt-5">
            {GAME_ODDS.map((value, index) => (
              <div key={index} className='space-y-1'>
                <p className="lg:text-sm text-[10px]">{`${value.title}:`}</p>
                <div className="flex flex-row items-center space-x-3 justify-between py-2 px-4 bg-lightGray">
                  <div className="flex space-x-2 w-full">
                    <OddsButtons
                      {...value}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isMobile && <MobileNavbar />}
      </div>
    </Layout>
  );
};

export default SelectedGame;
