import React from 'react'
import "../stylesheet/Header.css";
import { Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div className='navBar flex items-center justify-between w-[70%] left-56 mt-5 rounded-full fixed z-50'>
        <div className='flex items-center w-[30%] p-2.5 justify-center '>
            <h4 className='text-center '>VIKAASH EXPORTS</h4>
        </div>
        <ul className='flex justify-between w-[45%] items-center'>
          <li>
            <NavLink to="/" className={({isActive}) =>
              `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg tetx-center `
            }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({isActive}) =>
              `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg tetx-center`
            }>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className={({isActive}) =>
              `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg tetx-center`
            }>
              Products
            </NavLink>
          </li>
          <li>
           <Link
             to="/Contact"
             className="text-white bg-orange-700 hover:bg-orange-800 rounded-full text-lg px-6 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
             >
             Contact
           </Link>
          </li>
        </ul>


        {/* <div className='flex justify-between w-[52%] items-center '>
            <h3 className='flex-grow text-lg text-center'>Home</h3>
            <h3 className='flex-grow text-lg text-center'>About us</h3>
            <h3 className='flex-grow text-lg text-center'>Products</h3>
            <button className='bg-orange-400 p-2 rounded-full px-7 text-white text-lg'>Contact</button>
        </div> */}
    </div>
  )
}

export default Header