import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SecHeader = () => {
    const [isActive, setActive] = useState("false");
    const toggleClass = () => {
      setActive(!isActive);
    };
    const location = useLocation();
    const state = location.state;
    const page = state.page;
  
    return (
      <>
      <div className="bg-hero-pattern relative w-full h-96 bg-cover bg-center bg-no-repeat bg-fixed">
        <nav className="fixed w-full z-50">
          <div
            className={
              isActive
                ? "flex justify-between items-center h-20 md:h-16 bg-gradient-to-b from-black to-black/90 md:to-black text-white relative shadow-sm font-mono z-50"
                : "flex justify-between items-center h-20 md-h-16 bg-gradient-to-b from-black to-black text-white shadow-sm font-mono"
            }
            role="navigation"
          >
            <div className="px-4 cursor-pointer w-1/4">
              <a href="/" className="font-logo text-3xl font-bold box-border">
                Night's Watch
              </a>
            </div>
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
            <div className=" md:block hidden text-red-700 pl-8 p-2 mr-8 ">
              <Link to="/" className="p-4 hover:bg-black transition duration-300"> MOVIES </Link>
              <a href='/dashboard' className="p-4 hover:bg-black transition duration-300"> Dashboard </a>
            </div>
            <div className=" w-1/4 flex justify-end">
            <Link
              to="/signup"
              state={{ page: "Sign Up" }}
              className="bg-red-700 hover:bg-red-600 text-white font-bold p-2 rounded-full "
            >
              Sign Up
            </Link>
            </div>
          </div>
          <div
            className={
              isActive
                ? "hidden transition duration-500"
                : "h-fit md:hidden nav-links text-center bg-gradient-to-b from-black/70 to-black/60 shadow-2xl text-red-700 absolute w-full flex flex-col justify-center items-center text-2xl z-50"
            }
          >
            <Link to="/" className="p-4 hover:bg-black transition duration-300"> MOVIES </Link>
            <a href='/dashboard' className="p-4 hover:bg-black transition duration-300"> Dashboard </a>
          </div>
        </nav>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-6xl font-bold text-center text-white">
            {page}
          </h1>

        </div>
        
      </div>
    </>
  )
}

export default SecHeader