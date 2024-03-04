import Receipt from '@/src/client/shared/Svg/Receipt';
import React from 'react'

const NoSelectionYet = () => {
  return (
    <div className="flex items-center justify-center w-full m-auto">
      <div className="flex flex-col items-start justify-center p-4 space-y-4">
        <p className="text-gray-800 text-xs">
          To place a bet, click on the odds. Or insert a booking code
        </p>
        <input placeholder='Booking Code' className="h-9 px-2 rounded w-full border borderless-input text-xs" />
        <button
          className="h-9 w-full borderless-input font-bold bg-black text-white rounded-md px-3 text-xs"
        >
          View Ticket
        </button>
      </div>
    </div>
  );
}

export default NoSelectionYet