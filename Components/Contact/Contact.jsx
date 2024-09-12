import React from "react";

const Contact = () => {
  return (
    <div 
    data-aos="zoom-in"
    data-aos-duration="2000"
    
    className="py-14  ">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 px-6">
          <div className="col-span-2 space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-300">
              Lets collaborate on your upcoming car rental venture
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              consequuntur ducimus laborum a quidem dolorum, facere dolorem
              dolores suscipit.
            </p>
          </div>
          <div className="grid place-items-center">
            <button
              data-aos="fade-up"
              data-aos-duration="8000"
              className="bg-transparent border-2 border-primary text-primary hover:bg-primary/60 duration-300 hover:text-white  px-6 py-2 rounded-md uppercase"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
