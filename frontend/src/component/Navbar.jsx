import React from 'react'
import { NavLink } from 'react-router'


const Navbar = () => {
    return (
        <>
            <nav className='px-8 py-2 flex items-center bg-[#FB7185] justify-between'>
                <div className='text-[#4c0519]'>logo</div>
                <div>
                    <ul className='flex lg:space-x-7'>
                        <li className=' text-[#4c0519] rounded px-3 py-2 hover:bg-[#F43F5E]'> <NavLink to={'/'}>Home</NavLink> </li>
                        <li className=' text-[#4c0519] rounded px-3 py-2 hover:bg-[#F43F5E]'> <NavLink to={'/todo'}>To Do</NavLink> </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar