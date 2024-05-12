import React, { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { SlMenu } from "react-icons/sl";
import { Link } from "react-router-dom";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="fixed border-2 md:w-[90%] w-full md:top-[2rem] h-[70px] flex items-center justify-between shadow-md md:rounded-lg  bg-[#fff] md:ml-[4rem]">
      <img
        src="https://www.restrox.co/logo/RestroXLogo.png"
        alt="img"
        className="w-[175px] ml-2"
      />
      <nav className=" flex justify-between items-center rounded px-4">
        <ul className="md:flex hidden items-center ">
          <li>Home</li>
          <li className="ml-3 ">Features</li>
          <li className="ml-3 ">Pricing</li>
          <li className="ml-3 ">Contact</li>
          <div className="ml-3 ">Np</div>
          <button className="ml-2  p-2 border-2  bg-[#da0819] rounded-md text-[#fff] hover:bg-[#fff] hover:text-[#da0819] hover:font-bold">
            Login
          </button>
          <button className="mx-4 p-2 border-2  bg-[#da0819] rounded-md text-[#fff] hover:bg-[#fff] hover:text-[#da0819] hover:font-bold ">
            Signup
          </button>
        </ul>

        <div className="md:hidden z-10">
          {mobileMenu ? (
            <VscChromeClose
              className="text-xl"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          ) : (
            <SlMenu onClick={() => setMobileMenu(!mobileMenu)} />
          )}
        </div>
      </nav>
      <div
        className={
          mobileMenu
            ? "absolute top-0 right-0 bg-[#fbfbfd] w-[55%] h-screen flex justify-center flex-col items-center "
            : "hidden"
        }
      >
        <ul className="text-1xl font-bold">
          <li className=" mb-2">Home</li>
          <li className="mb-2">Features</li>
          <li className="mb-2">Pricing</li>
          <li className="mb-2">Contact</li>
          <div className="mb-2">Np</div>
          <div>
            <button className="p-2 border-2 mr-8 bg-[#da0819] rounded-md text-[#fff] hover:bg-slate-50 hover:text-[#da0819] hover:font-bold">
              Login
            </button>
          </div>
          <div>
            <button className="p-2 border-2 mr-8 bg-[#da0819] rounded-md text-[#fff] hover:bg-slate-50 hover:text-[#da0819] hover:font-bold">
              Signup
            </button>
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
