import React from 'react';
import { BiChevronDown , BiMenu , BiSearchAlt2 } from "react-icons/bi";
import { Link } from 'react-router-dom';

function NavSm() {
  return( 
      <>
        <div className="text-white flex items-center justify-between">
          <div>
            <h3 className='text-xl font-bold'>It all Starts Here!</h3>
            <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
              Ahmedabad <BiChevronDown />
            </span>
          </div>

          <div className="w-8 h-8">
            <BiSearchAlt2 className="w-full h-full" />
          </div>
        </div>
      </>
)};

function NavMd() {
  return (
    <>
          <div className="flex items-center w-1/2 gap-3 ">
          <div className="w-10 h-10">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="Logo" className="w-full h-full"
            />  
          </div>

       <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
        <BiSearchAlt2 />
        <input 
              type="search" 
              placeholder="Search for Movies,Events,Plays,Sports and Activities"
              className="w-full bg-transparent border-none focus:outline-none"
          />
       </div>   
       </div>
    </>
  );
}

function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between ">
        <div className="flex items-center w-1/2 gap-3 ">
          <div className="w-10 h-10">
            <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="Logo" className="w-full h-full"
            />  
          </div>

          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearchAlt2 />
            <input 
                  type="search" 
                  placeholder="Search for Movies,Events,Plays,Sports and Activities"
                  className="w-full bg-transparent border-none focus:outline-none"
            />
          </div>  
        </div> 

        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">Ahmedabad <BiChevronDown/>
          </span>
          <Link to="/plays" className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Plays
          </Link>
          <button className="bg-red-700 text-white px-2 py-1 text-sm rounded hover:bg-white hover:text-red-700 hover:font-bold">
            Sign In
          </button>

          <div className="w-8 h-8 text-white"> 
            <BiMenu className="w-full h-full"/> 
          </div>

        </div>

      </div>    
    </>
  );
}

//Main Component
const NavbarComponent = () => {
  return (
    <>
      <nav className="bg-darkBackground-700 px-4 py-3">
        
        {/* Mobile Screen Navbar */}
        <div className="md:hidden">
          <NavSm />
        </div>

        {/* Medium/Tab Screen Navbar */}
        <div className="hidden md:flex lg:hidden">
          <NavMd />
        </div>

         {/* Large Screen Navbar */}
         <div className="hidden md:hidden lg:flex">
          <NavLg />
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent