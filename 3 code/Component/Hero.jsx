import React from 'react'


const Hero = () => {
  return (
    <div className='bg-[url{""}] h-screen bg-screen bg-cover bg-no-repeat'>
        <div className='absolute insert-0 bg-black/50'></div>
        <div className='max-w-[450px] text-white flex flex-col gap-[40px]'>
            <div>
                <h1 className='text-5xl font-semibold tracking-wider'>Hello World</h1>
            </div>
            <div>
                <h1 className='text-5xl font-semibold tracking-wider'>
                   <span className='text-white '> hello world </span>
                </h1>
            </div>
            <div className='bg-white-600 h-[2px] w-[150px] '></div>
            <div>
                <p className='text-xl text-gray-600 tracking-wider'>TITAN CODE here</p>
                <div>
                <button linl="#" text="About US"/>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Hero