import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';

interface ExampleProps {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
  }
  
  const Example: React.FC<ExampleProps> = ({ isOpen, openModal, closeModal }) => {

  return (
    <>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop className='relative' />
        <Modal.Panel className='absolute left-[14.1rem]'>
            <div className='bg-white w-[980px] h-[648px] rounded-2xl p-8'>
                <ul className='flex space-x-16 font-bold opacity-50 mb-6' >
                    <li>Card Debit</li>
                    <li>Bank Transfer</li>
                    <li>Direct Bank USSD</li>
                </ul>
                <hr></hr>
                <form className='mt-16 grid grid-cols-3 gap-x-8 '>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-bold text-base'>Card Number</label>
                        <input placeholder='e.g  555*******567' type='text' className='bg-[#ECEEF1] w-[19.125rem] h-[2.813rem]'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-bold text-base'>Expiry</label>
                        <input placeholder='e.g 24/2023' type='text' className='bg-[#ECEEF1] w-[10.48rem] h-[2.813rem]'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-bold'>CVV</label>
                        <input placeholder='3 Digit at the back of card' type='text' className='bg-[#ECEEF1] w-[10.48rem] h-[2.813rem] text-xs'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-bold text-base'>Amount</label>
                        <input placeholder='' type='text' className='bg-[#ECEEF1] w-[10.48rem] h-[2.813rem]'/>
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label className='font-bold text-base'>Amount</label>
                        <input placeholder='' type='text' className='bg-[#ECEEF1] w-[10.48rem] h-[2.813rem]'/>
                    </div>

                </form>
            </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;