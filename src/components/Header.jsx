import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../stylesheet/Header.css";
import { Link, NavLink} from 'react-router-dom';
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuItemsRef = useRef([]);
  const timeline = useRef(null);

  //  useGSAP
  useGSAP(() => {
    // Create timeline
    timeline.current = gsap.timeline();

    if (headerRef.current && logoRef.current && menuItemsRef.current.length > 0) {
      timeline.current
        .fromTo(headerRef.current, 
          {
            scale: 0.5,
            opacity: 0,
            y: -100
          },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out"
          }
        )
        .fromTo([logoRef.current, ...menuItemsRef.current],
          {
            y: -15,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger:0.3,
            ease: "power3.out"
          }, 
          "-=0.5"
        );
    }
  }, []); // Empty dependencies array for initial mount only

  return (
    <div className='navBar flex items-center justify-between w-full  md:w-[70%] md:left-56 mt-5 rounded-full fixed z-50' ref={headerRef}>
      <div className='flex items-center w-full md:w-[30%] p-2.5 justify-between md:justify-center' ref={logoRef}>
        <h4 className='text-center'>VIKAASH EXPORTS</h4>
        <button 
          className='md:hidden text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      <ul className={`${
        isMenuOpen ? 'flex' : 'hidden'
      } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-[45%] bg-orange-700 md:bg-transparent md:justify-between items-center mt-2 md:mt-0 rounded-lg md:rounded-none`}>
        <li className='w-full md:w-auto text-center py-2 md:py-0' ref={el => menuItemsRef.current[0] = el}>
          <NavLink to="/" className={({isActive}) =>
            `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg text-center`
          }>
            Home
          </NavLink>
        </li>
        <li className='w-full md:w-auto text-center py-2 md:py-0' ref={el => menuItemsRef.current[1] = el}>
          <NavLink to="/About" className={({isActive}) =>
            `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg text-center`
          }>
            About us
          </NavLink>
        </li>
        <li className='w-full md:w-auto text-center py-2 md:py-0' ref={el => menuItemsRef.current[2] = el}>
          <NavLink to="/Products" className={({isActive}) =>
            `${isActive ? "text-orange-700" : "text-white"} flex-grow text-lg text-center`
          }>
            Products
          </NavLink>
        </li>
        <li className='w-full md:w-auto text-center py-2 md:py-0' ref={el => menuItemsRef.current[3] = el}>
          <Link
            to="/Contact"
            className="text-white bg-orange-700 hover:bg-orange-800 rounded-full text-lg px-6 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header