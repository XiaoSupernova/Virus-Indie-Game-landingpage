import React from "react";
import Slider from "react-slick";
import { topReleaseGames } from "../constants/content";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopReleaseCards = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-full bg-black text-white pt-20 pb-20 ms:pb-40 ms:pt-40 lg:pb-50 lg:pt-60">
      {" "}
      <h2 className="font-bold flex justify-center text-[24px]  text-white z-10 lg:text-4xl  xs:text-2xl">
        Top Released
      </h2>
      <div className="mt-8 sm:mt-10 lg:mt-14">
        <Slider {...settings}>
          {topReleaseGames.map((card) => (
            <div
              className="relative flex h-400"
              // style={{ backgroundImage: `url(${card.img})` }
            >
              <img
                src={card.img}
                alt=""
                className="object-cover h-[580px] lg:h-[630px] xl:h-[690px] rounded-3xl lg:rounded-4xl "
              />

              {/* put the text content */}
              <div className="absolute flex flex-col bg-black rounded-2xl bg-opacity-80 p-4 bottom-0 w-11/12 h-fit = width: fit-content   left-1/2 transform -translate-x-1/2 -translate-y-4 lg:p-6;">
                <h2 className="font-bold w-full text-[18px] mb-2 lg:text-xl  lg:mb-3 xl:text-2xl">
                  {card.name}
                </h2>
                {/* left and right flex-between   */}
                <div className="new-release-card-text flex flex-row justify-between">
                  <div className="card-left text-[12px] lg:text-[16px] ">
                    <p>
                      Publisher: <span>{card.developer}</span>
                    </p>
                    <p>
                      Release: <span>{card.releaseTime}</span>
                    </p>
                  </div>
                  <div className="card-right text-[12px] lg:text-[16px]">
                    <div className="card-right-score flex flex-col justify-between items-center">
                      <p className="font-bold">{card.score}</p>
                      <p>Score</p>
                    </div>
                    <div className="card-right-article flex flex-col justify-between items-center">
                      <p className="font-bold">{card.articles}</p>
                      <p>Articles</p>
                    </div>
                  </div>
                </div>
                <button className=" flex justify-center">
                  <p className="bg-opacity-55 bg-white pt-1.5 pb-1.5 w-32 mt-3 text-[14px] xl:text-[16px] xl:mt-6 xl:w-32 rounded-xl hover:bg-opacity-30 active:border-white">
                    <a href="">Read More</a>
                  </p>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopReleaseCards;
