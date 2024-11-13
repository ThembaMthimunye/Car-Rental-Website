import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { MdDriveEta } from "react-icons/md";

const skillsData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300 mx-auto " />
    ),
    link: "#",
    description:
      "The K53 system helps ensure that drivers are prepared for the challenges of the road, focusing on not just passing the test but becoming a safe, skilled driver",
    aosDelay: "1000",
  },

  {
    name: "Fast and Safe",
    icon: (
      <FaShippingFast className="text-5xl text-primary group-hover:text-black duration-300 mx-auto " />
    ),
    link: "#",
    description:
      "The K53 system helps ensure that drivers are prepared for the challenges of the road, focusing on not just passing the test but becoming a safe, skilled driver",
    aosDelay: "2000",
  },

  {
    name: "Experienced Drivers",
    icon: (
      <MdDriveEta className="text-5xl text-primary group-hover:text-black duration-300 mx-auto" />
    ),
    link: "#",
    description:
      "The K53 system helps ensure that drivers are prepared for the challenges of the road, focusing on not just passing the test but becoming a safe, skilled driver",
    aosDelay: "3000",
  },
];

const Services = () => {
  return (
    <div className="py-12 sm:min-h-[600px] sm:grid sm:place-items-center bg-slate-500">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-bold font-serif text-center  sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center md:grid-cols-3 gap-4  ">
          {skillsData.map((skill) => (
            <div
              data-aos="fade-up"
              data-aos-duration={skill.aosDelay}
              key={skill.name}
              className="card text-center group space-y-10 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary text-white w-[20rem] mx-auto duration-300 hover:text-black rounded-md "
            >
              <div className="m">{skill.icon}</div>
              <h1>{skill.name}</h1>
              <p className="text-start ">{skill.description}</p>
              {/* <a className=" bg-slate-100 px-4 py-2 rounded-md " href={skill.link}>Enquire</a> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
