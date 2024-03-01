import { useState } from "react";

import { navLinks } from "../constants/content";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-between  py-2 sm:py-4 lg:py-6 mt-4 item-center relative xl:max-w-[1200px] ">
      {" "}
      <div className="lg:absolute top-1 left-1/2 lg:ml-[-30px]  ">
        {" "}
        <img
          src="https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y"
          alt="Virus-embrace-logo"
          className="w-[56px] sm:w-[60px] lg:w-[70px]"
        ></img>
      </div>
      <ul className="w-full lg:block hidden text-white list-none">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-semibold text-center pl-4 pr-4 pt-2 pb-2  text-[16px]
            ${index < navLinks.length - 2 ? "float-left" : "float-right"} 
            ${index === navLinks.length - 2 ? " mr-0" : "mr-6"}
            ${
              index === navLinks.length - 1
                ? "border-solid border rounded-full hover:bg-white/20"
                : "font-semibold"
            }
               text-white mr-12 hover:font-extrabold active:text-primaryColor-800`}
          >
            {" "}
            <a href="#{nav.id}">{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="lg:hidden flex flex-1 justify-end items-center z-40">
        <div>
          <img
            src={toggle ? "./imgs/close.svg" : "./imgs/menu.svg"}
            alt="menu"
            className="w-[30px] h-[30px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black absolute top-22 right-0 min-w-[300px] rounded-xl sidebar`}
          >
            <ul className="w-full flex justify-end flex-col items-left text-white felx-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer font-semibold text-left pl-2 pr-2 pt-2 pb-2 text-[15px]
          
            ${
              index === navLinks.length - 1
                ? "border-solid border mt-4 pr-2 pl-2 rounded-full hover:bg-white/20"
                : "font-semibold"
            }
               text-white mr-12 hover:font-extrabold active:text-primaryColor-400`}
                >
                  {" "}
                  <a href="#{nav.id}">{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
