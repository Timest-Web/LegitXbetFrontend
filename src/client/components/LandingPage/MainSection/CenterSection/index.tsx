import React from 'react'
import Image from 'next/image'
import LandScale from '../../../../../assets/Landscale1.png';

const CenterSecion = () => {
  return (
        <div className='pt-1'>
              <Image src={LandScale} alt='landsacle' className='w-[952px] h-[323px]'/>
    </div>
  )
}

export default CenterSecion