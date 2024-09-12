import React from "react";
import carPng from "../../assets/Pictures/car1.png";

const About = () => {
  return (
    <div className=" sm:grid sm:min-h-[600px] sm:place-items-center bg-slate-100">
      <div className="container shadow-xl bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right"
                data-aos-duration="2000">
            <img className="sm:scale-105 sm:-traslate-x-11 max-h-[300px]" src={carPng} alt="" />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 ">
              <h1 data-aos="fade-up"
              data-aos-duration="500" className="text-3xl sm:text-4xl font-bold font-serif">
                About Us
              </h1>
              <p data-aos="fade-up"
              data-aos-duration="1000">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
                quia ducimus quae maiores odio minima modi culpa tempore
                voluptate, vero ut minus consectetur nulla. Obcaecati, tempora?
                Quae laborum nulla quia.
              </p>
              
              <p data-aos="fade-up"
              data-aos-duration="1500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
                illo harum quasi molestias vitae numquam amet aut tenetur ex
                quibusdam iste nobis ratione reiciendis beatae repudiandae
                perspiciatis sapiente in expedita soluta doloribus nemo. A
                asperiores tempore natus nobis. Pariatur in sequi at voluptatem
                vel? Fuga provident repudiandae quis aliquam dolores debitis,
                ipsa minima vel recusandae dolore totam quibusdam mollitia non!
              </p>

              <button data-aos="fade-up"
              data-aos-duration="2000" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/60 duration-300 hover:text-white  px-6 py-2 rounded-md">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
