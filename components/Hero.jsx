import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='bg-blue-100 h-screen bg-cover bg-center
    bg-fixed flex items-center relative'>
      <div className='absolute insert-0 bg-black/50'>
        <div className='container mx-auto px-4 z-10'>
          <div className='max-w-[450px] text-white flex-col gap-[40px]'>
            <div>
              <h1><span className='text-5xl font-semibold tracking-wider'>BEST  
              <br /> SERVICE 
              <br /> FOREVER</span></h1>
            </div>
            <div className='bg-black h-[2px] w-[50]'></div>
            <div>
              <p className=''>Titan Intech now completeing their 25th year of<br />of providing the best IT and OTT Services.</p>
            </div>
            </div>
            <Button link="#" text="About us"/>
          </div>

        
      </div>
    </div>
  )
}

export default Hero