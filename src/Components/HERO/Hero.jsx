import React from "react";
import heroPic from "../../assets/Pictures/car.png";



const Hero = () => {
  return (
    <div>
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div  data-aos="zoom-in"
                data-aos-duration="2000"          
          className="order-1 sm:order-2">
            <img src={heroPic} alt="" 
            className="relative -z-10 max-h-[600px] sm:scale-125"
            />
          </div>
          <div 
          className="order-2 sm:order-1 space-y-5 sm:pr-32 px-20">
            <p data-aos="fade-up"
                data-aos-delay="500" className="text-primary text-2xl font-serif">Effortless</p>
            <h1  data-aos="fade-up"
                data-aos-delay="1000"className="text-5xl font-semibold text-7xl font-serif ">Blue Island</h1>
            <p data-aos="fade-up"
                data-aos-delay="1500">
              Welcome to Blue Island Driving School, where your journey to becoming a skilled driver begins. 
            </p>
            <button data-aos="fade-up"
                data-aos-delay="2000" className="bg-primary text-white hover:bg-primary/60 duration-300 hover:text-black  px-6 py-2 rounded-md">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
