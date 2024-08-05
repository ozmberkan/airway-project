import { rightSide } from "@/data/navData";
import React from "react";

const Rightside = () => {
  return (
    <ul className="flex justify-center items-center gap-x-6 min-w-[500px]">
      {rightSide.map((navItem) => (
        <li className="px-4 py-2  rounded-md text-xl  text-black cursor-pointer transition-colors duration-500">
          {navItem.title}
        </li>
      ))}
    </ul>
  );
};

export default Rightside;
