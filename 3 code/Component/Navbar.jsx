import Link from 'next/link'
import React, { useState } from 'react'
import {FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const[Toggle, setToggle] = useState(falses)
  return (
    <div className='fixed bg-white top-0 w-[100%] z-20'>
         <div className='container mx-auto flex justify-between items-center px-4 py-4'>
            <div>
                <span className='italic'>Titan</span>
                <span className='italic'>Intech</span>
            </div>
            
            <div className='flex gap-8 tracking-wider text-gray-600'>
                        <Link href="/"><a className='hover:text-black-700'>Home</a></Link>
                        <Link href="/"><a className='hover:text-black-700'>About</a></Link>
                        <Link href="/"><a className='hover:text-black-700'>Service</a></Link>
                        <Link href="/"><a className='hover:text-black-700'>Client</a></Link>
                        <Link href="/"><a className='hover:text-black-700'>Investor Relation</a></Link>
                        <Link href="/"><a className='hover:text-black-700'>Contact</a></Link>
                        </div>
                    <div>
                        <button className='hidden md:block border border-blue-700 px-4 py-1 rounded-md text-green-700 hover:text-white'>Share Price</button>
                    </div>
                    {Toggle  ? (
                        <FiMenu oneClick={()=>setToggle(!Toggle)} size={30} className='md:hidden block' ></FiMenu>
                    ): (
                        <AiOutlineClose oneClick={()=>setToggle(!Toggle)}></AiOutlineClose>
                    )}
                    
                    
        </div>
        <div className={'duratio-300 md:hidden flex flex-col w-[70%] h-screen fixed bg-black/60 txet-white top-[60px] ${Toggle ?left-[0]: left-[-100]}'}>
        <Link href="/"><a className='hover:text-black-700'>Home</a></Link>
                        <Link href="/"><a className='hover:text-black-700 p-6'>About</a></Link>
                        <Link href="/"><a className='hover:text-black-700 p-6'>Service</a></Link>
                        <Link href="/"><a className='hover:text-black-700 p-6'>Client</a></Link>
                        <Link href="/"><a className='hover:text-black-700 p-6'>Investor Relation</a></Link>
                        <Link href="/"><a className='hover:text-black-700 p-6'>Contact</a></Link>
        </div>
    </div>
  )
}
export default Navbar