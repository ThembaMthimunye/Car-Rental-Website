// import React from "react";
import { BiSolidSun} from "react-icons/bi";
const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      name: "HOME",
      link: "/#",
    },
    {
      id: 2,
      name: "CARS",
      link: "/cars",
    },
    {
      id: 3,
      name: "ABOUT",
      link: "/about",
    },
    {
      id: 4,
      name: "BOOKING",
      link: "/booking",
    },
  ];
  const dark=()=>{
    
  }
  return (
    <nav className="shadow-sm h-[5rem]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl font-serif">Car Rental</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map((data) => (
                <li key={data.id} className="py-4">
                  <a className="inline-block py-2 hover:border-b-2 hover:text-primary hover:border-primary  duration-500 text-lg font-medium" href={data.link}>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            {/* <BiSolidSun/> */}
            {/* <BiSolidSun className="text-2xl" /> */}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
