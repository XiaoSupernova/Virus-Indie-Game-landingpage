import React from "react";
import { navLinks } from "../constants/content";

const Footer = () => {
  return (
    <section mt-40px>
      <footer className="bg-black  text-white ">
        <div className=" bg-black py-7 md:flex md:justify-between sm:items-center sm:px-12 px-4 l lg:flex lg:flex-col xl:flex-row xl:justify-between">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <span className="text-secondaryColor-500">GAIN</span> the best indie
            games faster
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              className="bg-secondaryColor-500 hover:bg-secondaryColor-600 duration-300 px-5 py-2.5 
           rounded-md text-white w-full sm:w-72 lg:w-72 xl:w-auto"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="footer-nav sm:px-12 px-4 pb-6">
          <ul className="flex flex-col  lg:flex-row ">
            {navLinks.map((nav, index) => (
              <li className="text-white opacity-80 font-[12px] mt-8  mr-12 hover:text-secondaryColor-200">
                {" "}
                <a href="#{nav.id}">{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2024 Embrace Virus Games.</span>
          <span>Terms · Privacy Policy</span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
