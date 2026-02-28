import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
    return (
        <>
            <div className='flex-col grow flex items-center justify-center text-center'>
                <h1 className='lg:text-6xl sm:text-4xl'>Organizse Your Tasks Effectively</h1>
                <p className='mt-5 lg:text-2xl sm:p-3 sm:text-xl text-[#9F1239]'>Stay productive and manage your To-do-List easily with our intuitive task managemnet app</p>
                <div className='mt-7'>
                    <NavLink to={'/todo'} className='px-3 py-2 hover:bg-[#E11D48] rounded bg-[#F43F5E]'>Get Started</NavLink>
                </div>
            </div>
        </>
    )
}

export default Home