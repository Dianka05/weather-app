import './sidebar.css'
import { NavLink } from 'react-router-dom'

export const Sidebar = ({ toggle, setToggle }) => {
  return (
    <nav className={`${toggle ? 'nav-menu active' : 'nav-menu'} w-[300px] bg-orange-600 text-white h-full flex flex-col items-center py-6 shadow-lg`}>
      <ul className='flex flex-col gap-6 w-full px-4'>
        <li>
          <NavLink 
            to='/' 
            onClick={() => setToggle(prev => !prev)} 
            className={({ isActive }) => `p-2 rounded-md block transition-colors duration-300 ${isActive ? 'bg-orange-500' : 'hover:bg-orange-500'}`}
          >
            Forecast
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/weather-info' 
            onClick={() => setToggle(prev => !prev)} 
            className={({ isActive }) => `p-2 rounded-md block transition-colors duration-300 ${isActive ? 'bg-orange-500' : 'hover:bg-orange-500'}`}
          >
            Expanded Weather Information
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/about' 
            onClick={() => setToggle(prev => !prev)} 
            className={({ isActive }) => `p-2 rounded-md block transition-colors duration-300 ${isActive ? 'bg-orange-500' : 'hover:bg-orange-500'}`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}