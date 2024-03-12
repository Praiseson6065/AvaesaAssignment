import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="flex justify-between px-24 py-4 border-b-2 fixed w-full bg-white">
        <div className=" font-bold">Arun</div>
      <div className=" flex justify-between gap-7">
        <Link to="home" smooth>
          Home
        </Link>
        <Link to="about" smooth>
          About
        </Link>
        <Link to="course" smooth>
          Course Overview
        </Link>
        <Link to="enroll" smooth>
          Enroll
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
