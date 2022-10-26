import React from 'react'
import { useState } from 'react'

const SecHeader = () => {
    const [isActive, setActive] = useState("false");
    const toggleClass = () => {
      setActive(!isActive);
    };
  
    return (
      <>
        <div className="bg-hero-pattern relative w-full h-96 bg-cover bg-center bg-no-repeat bg-fixed">
          <nav>
            <div
              className={
                isActive
                  ? "flex justify-between items-center h-16 bg-gradient-to-b from-black to-transparent text-white relative shadow-sm font-mono"
                  : "flex justify-between items-center h-16 bg-gradient-to-b from-black to-black/70 text-white relative shadow-sm font-mono"
              }
              role="navigation"
            >
              <a href="/" className="pl-8 p-2 mr-8">
                Logo
              </a>
              <button
                className={
                  isActive
                    ? "text-red-600 cursor-pointer md:hidden text-center items-center align-middle"
                    : "bg-red-700 text-black rounded"
                }
                onClick={toggleClass}
              >
                <svg
                  className="w-8 h-8 fill-current text-center"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 6h14v2H3V6zm0 5h14v2H3v-2zm0 5h14v2H3v-2z" />
                </svg>
              </button>
              <div className=" md:block hidden text-red-700 ">
                <a
                  href="/"
                  className="p-4 hover:bg-black transition duration-300"
                >
                  MOVIES
                </a>
                <a
                  href="/"
                  className="p-4 hover:bg-black transition duration-300"
                >
                  Dashboard
                </a>
                 
                
              </div>
              <button className="bg-red-700 hover:bg-red-600 text-white font-bold p-2 rounded-full mr-8">
                Sign Up
              </button>
            </div>
            <div
              className={
                isActive
                  ? "hidden transition duration-500"
                  : "h-fit md:hidden nav-links text-center bg-gradient-to-b from-black/70 to-black/25 shadow-2xl text-red-700 absolute  w-full flex flex-col justify-center items-center text-2xl z-50"
              }
            >
              <a
                href="/"
                className=" font-bold p-4 w-full hover:text-black hover:bg-red-700 transition duration-300 z-50"
              >
                Movies
              </a>
              <a
                href="/"
                className=" font-bold p-4 w-full hover:text-black hover:bg-red-700 transition duration-300 z-50"
              >
                Dashboard
              </a>
            </div>
          </nav>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-6xl font-bold text-center text-white">
                Search Page 
            </h1>
            </div>
          </div>
      </>
  )
}

export default SecHeader