import React from "react";
import { collaborators } from "../constants/content";

const Collaborators = () => {
  // 亟待解決1024更小尺寸的適應性問題
  return (
    <section className=" bg-black  pt-20 pb-20 lg:pt-40 lg:pb-40">
      <h2 className="font-bold flex justify-center text-[24px] mb-[60px] text-white z-10 lg:text-4xl  xs:text-2xl">
        Collaborators
      </h2>
      <div className="collaborators-scroll flex justify-between collaborator-group mr-[30px] ml-[30px] xl:mr-24 xl:ml-24 ">
        {collaborators.map((collaborator, index) => (
          <div
            className={`collaborators-scroll w-[76px] xl:w-[80px] xxl:mr-12 ${
              index === collaborators.length - 1 ? "mr-0" : "mr-12"
            }`}
          >
            {" "}
            <img
              src={collaborator.img}
              alt="{collaborator.img}"
              className=" "
            />
            {/* <div className=" flex justify-center ">
              {" "}
              <p className="text-white mt-[1px] text-[18px] font-semibold opacity-60 text-center">
                {collaborator.name}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collaborators;
