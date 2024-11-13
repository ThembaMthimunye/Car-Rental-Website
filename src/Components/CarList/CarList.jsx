import React from "react";
import car1 from "../../assets/Pictures/car1.png";
import car2 from "../../assets/Pictures/car2.png";
import car3 from "../../assets/Pictures/car3.png";

const CarListing = [
  {
    name: "Audi A3",
    price: 100,
    image: car1,
    aosDelay: "0",
    km: "12 km",
  },

  {
    name: "Audi A6",
    price: 100,
    image: car2,
    aosDelay: "500",
    km: "22 km",
  },

  {
    name: "BMW",
    price: 100,
    image: car3,
    aosDelay: "1000",
    km: "32 km",
  },
];
const CarList = () => {
  return (
    <div className="pb-24 pt-12">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif"
        >
          Our Available Cars
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, omnis?
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:gridcols-4 gap-16">
            {CarListing.map((list) => {
              {
                return (
                  <div 
                  data-aos="flip-left"
                  data-aos-duration="2000"
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                    <div className="w-full">
                      <img
                        className="w-full h-[320px] object-contain sm:translate-x-[2rem] group-hover:translate-x-[5rem] duration-700"
                        src={list.image}
                        alt=""
                      />
                    </div>
                    <div className="space-y-2">
                      <h1 className="text-xl text-primary font-semibold">
                        {list.name}
                      </h1>
                      <div className="flex space-x-6 items-center text-xl font-semibold">
                        <p>R{list.price}/day</p>
                        <a href="">Details</a>
                      </div>
                    </div>
                    <p className="absolute top-3 font-bold text-primary bg-black rounded-xl px-3  py-1 hover:bg-primary hover:text-black">
                      {/* {" "} */}
                      {list.km}
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-center mt-10">
            <button
              data-aos="fade-up"
              data-aos-duration="2000"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/60 duration-300 hover:text-white  px-6 py-2 rounded-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
