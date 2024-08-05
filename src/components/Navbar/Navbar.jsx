import Centerside from "./Centerside";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center border-b border-violet-700 px-14">
      <Leftside />
      <Centerside />
      <Rightside />
    </div>
  );
};

export default Navbar;
