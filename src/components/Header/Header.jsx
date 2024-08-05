import React from "react";
import Banner from "../../assets/Banner.svg";
const Header = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-blue-200 -z-10 flex justify-center items-center flex-col relative">
        <img src={Banner} alt="" className="w-full absolute bottom-0" />
        <h1 className="text-[120px] font-Nunito tracking-tighter text-white font-bold z-20">
          HIGHYFLY
        </h1>
      </div>
    </>
  );
};

export default Header;
