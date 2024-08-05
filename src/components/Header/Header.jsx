import React from "react";
import Banner from "../../assets/Banner.svg";
const Header = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-blue-200 -z-10 flex justify-center items-center flex-col relative">
        <img src={Banner} alt="" className="w-full h-[500px] absolute" />
        <div className="z-20">
          <h1 className="text-[120px] font-Nunito tracking-tighter text-white font-bold">
            HIGHYFLY
          </h1>
        </div>
      </div>
    </>
  );
};

export default Header;
