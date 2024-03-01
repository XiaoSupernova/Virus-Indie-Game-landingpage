import React from "react";

const Hero = () => (
  <section
    id="home-hero"
    className="w-full pt-[18px] pb-[10px] pr-[20px] pl-[20px] rounded-t-[30px] bg-black flex flex-col justify-center items-center lg:rounded-t-[50px]  lg:pt-[30px] lg:pb-[30px] lg:pr-[60px] lg:pl-[60px] sm:pr-[40px] sm:pt-[20px] sm:pl-[40px] xs:rounded-t-[40px] "
  >
    <h2 className="font-bold text-[20px] text-white z-10 lg:text-4xl  xs:text-2xl">
      Best Indie Games
    </h2>
    <h1 className="font-extrabold bg-gradient-to-r from-primaryColor-700 to-pink-600 inline-block text-transparent bg-clip-text text-[30px] mt-[8px] z-10 lg:text-6xl lg:mt-[30px] sm:text-[40px] ">
      ALL IN
    </h1>
    <div className="hero-deco-1 ">
      <svg
        width="94"
        height="95"
        viewBox="0 0 94 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.6266 59.4804L6.77929 75.6135L35.6125 95L54.8215 66.4308L87.4662 72.531L93.8483 38.3775L75.9343 35.03L86.4525 19.3865L57.6193 0L38.7395 28.0796L6.38206 22.0332L0 56.1867L17.6266 59.4804Z"
          fill="#735EFA"
        />
      </svg>
    </div>
    <div className="hero-deco-2 ">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M83.0941 23.505C75.3432 18.4561 66.1727 16.0372 56.94 16.6062C47.7073 17.1752 38.9032 20.702 31.8309 26.6644C24.7587 32.6268 19.7944 40.708 17.6727 49.7116C15.551 58.7153 16.3849 68.1628 20.0508 76.6556C23.7167 85.1484 30.0198 92.2351 38.027 96.8666C46.0342 101.498 55.32 103.428 64.5096 102.371C73.6993 101.314 82.3043 97.3266 89.051 90.9981C95.7977 84.6697 100.327 76.3371 101.969 67.2338L59.589 59.589L83.0941 23.505Z"
          fill="#FFCE4F"
        />
      </svg>
    </div>
    <div className="hero-deco-3">
      <svg
        width="89"
        height="74"
        viewBox="0 0 89 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M88.5625 66.7388L67.4453 0L66.8308 0.194427L66.7697 0.00012207L0 21.0195L6.43896 41.4734L53.3992 26.6902L68.118 73.2077L88.5625 66.7388Z"
          fill="#40DE7F"
        />
      </svg>
    </div>
    <div className="hero-deco-4">
      <svg
        width="80"
        height="95"
        viewBox="0 0 80 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M55.0104 26L39.9993 0L24.9882 26H0.162109L12.5752 47.5L0.162109 69H24.9882L39.9993 95L55.0104 69H79.8364L67.4233 47.5L79.8364 26H55.0104Z"
          fill="#F05E5E"
        />
      </svg>
    </div>
    <img
      // set it could be inplaced!!!
      src="https://media.moddb.com/images/groups/1/2/1493/auto/deadcells2.jpg"
      alt="heroImage"
      className=" w-full max-h-full z-10 rounded-xl mt-[10px] mb-[20px] lg:mt-[40px] lg:mb-[20px] lg:rounded-3xl"
    />
  </section>
);

export default Hero;
