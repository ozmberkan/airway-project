import React from "react";
import { BsAirplaneFill } from "react-icons/bs";

const Centerside = () => {
  return (
    <div className="bg-white relative max-w-full text-violet-800 rounded-full p-12 border-2 ring-4 ring-offset-2 ring-violet-500 hover:bg-violet-500 hover:text-white cursor-pointer duration-300 transition-colors">
      <BsAirplaneFill size={45} />
    </div>
  );
};

export default Centerside;
