// import React from "react";
import { BiSolidSun} from "react-icons/bi";
const Navbar = () => {
  const NavLinks = [
    {
      id: 1,
      name: "Services",
      link: "/#",
    },
    {
      id: 2,
      name: "About",
      link: "/cars",
    },
    {
      id: 3,
      name: "Contact Us",
      link: "/about",
    },
    {
      id: 4,
      name: "Testimonials",
      link: "/booking",
    },
  ];
  const dark=()=>{
    
  }
  return (
    <nav className="shadow-sm h-[5rem]">
      <div className="container">
        <div className="flex justify-between items-center px-10">
          <div>
            <h1 className="font-bold text-xl font-serif text-blue-700">Blue Island</h1>
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
