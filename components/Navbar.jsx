import React, { useState } from 'react'
import Link from 'next/link'
import{FiMenu} from 'react-icons/fi'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [toggle, swtToggle] = useState(false)
    return (
        <div className='fixed bg-white top-0 w-[100%] z-20' >
            <div className='container mx-auto flex justify-between items-center px-4 py-4'>
                <div className='flex gap-1 items-center text-xl md:text-2xl font'>
                    <span className='Italic text-green-700'>
                        TITAN-INTECH
                    </span>

                </div>
                
                <div className='hidden md:flex gap-8 tracking-wider text-gray-600'>
                    <Link href="/" className='hover:text-green-700'>Home</Link>
                    <Link href="/" className='hover:text-green-700'>About</Link>
                    <Link href="/" className='hover:text-green-700'>Service</Link>
                    <Link href="/" className='hover:text-green-700'>Client</Link>
                    <Link href="/" className='hover:text-green-700'>Investor Relations</Link>
                    <Link href="/" className='hover:text-green-700'>Contact us</Link>
                  </div>
                <div>
                    <button className=' hidden md:block border border-blue-700 px-4 py-1 rounded-md text-black hover:text-white hover:bg-blue-700'>Share Price</button>
                </div>
                {toggle ? (
                    <AiOutlineClose onClick={()=>setToggle(!toggle )} size={30} className='md:hidden block'/>) : (
                <FiMenu onClick={()=>setToggle(!toggle )} size={30} className='md:hidden block'/>
                )}
                <div>
                    {/*Responsive Menu */}
                    <div className='md:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[60px] ${toggle ? left-[0]: left-[-100%] }'>
                    <Link href="/" className='hover:text-green-700'>Home</Link>
                    <Link href="/" className='hover:text-green-700'>About</Link>
                    <Link href="/" className='hover:text-green-700'>Service</Link>
                    <Link href="/" className='hover:text-green-700'>Client</Link>
                    <Link href="/" className='hover:text-green-700'>Investor Relations</Link>
                    <Link href="/" className='hover:text-green-700'>Contact us</Link>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default Navbar