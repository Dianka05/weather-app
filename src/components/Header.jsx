import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({ setToggle }) => {
  return (
    <header className='w-full fixed top-0 left-0 z-40 bg-orange-600 text-white flex items-center justify-between p-4 shadow-lg'>
      <button className='p-2 bg-orange-500 rounded-md hover:bg-orange-400 transition-colors duration-300' onClick={() => setToggle(prev => !prev)}>
        <span className='sr-only'>Toggle Menu</span>
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
        </svg>
      </button>
      <Link to='/' className='text-2xl font-bold hover:text-orange-200 transition-colors duration-300'>
        Forecast Explorer
      </Link>
    </header>
  )
}
