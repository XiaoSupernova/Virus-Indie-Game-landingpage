import React, { useState } from "react";
import { accordion } from "../constants/content";

const QuestionBar = () => {
  const [active, setActiveIndex] = useState(null);
  const toggle = (i) => {
    if (active == i) {
      return setActiveIndex(null);
    }
    setActiveIndex(i);
  };

  return (
    <section className="bg-black pt-[40px] pb-[60px] lg:pb-[180px]">
      {" "}
      <h2 className="font-bold flex justify-center text-[24px]  text-white z-10 lg:text-4xl  xs:text-2xl">
        Q&A
      </h2>
      <div className="item-container text-white flex flex-col justify-center items-center mt-4 ">
        {" "}
        <div className=" accordion-container flex flex-col ml-4 mr-4  sm:w-4/5  lg:w-3/5 bg-secondaryColor-500 justify-center pr-4 pl-4  pt-4 rounded-2xl">
          {accordion.map((item, i) => (
            <div className="accordion mb-2">
              <div
                onClick={() => toggle(i)}
                className="text-[22px] font-bold p-3 justify-between bg-black rounded-2xl"
              >
                <h3 className="text-[16px] lg:text-[20px] ">{item.question}</h3>
                <span className="flex justify-center items-center ">
                  {active === i ? "-" : "+"}
                </span>
              </div>
              <div
                className={` bg-secondaryColor-400 rounded-2xl pr-4 pl-4 ${
                  active === i ? "accordion-answer show" : "accordion-answer"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionBar;
