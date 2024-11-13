import React from "react";
import carPng from "../../assets/Pictures/car1.png";

const About = () => {
  return (
    <div className=" sm:grid sm:min-h-[600px] sm:place-items-center bg-slate-100">
      <div className="container shadow-xl bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="2000">
            <img
              className="sm:scale-105 sm:-traslate-x-11 max-h-[300px]"
              src={carPng}
              alt=""
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 ">
              <h1
                data-aos="fade-up"
                data-aos-duration="500"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About Us
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                Welcome to Blue Island Driving School, where your journey to
                becoming a skilled driver begins. Here’s why we stand out in
                2025:
              </p>

              <p data-aos="fade-up" data-aos-duration="1500">
                👉 Established Reputation: Over a decade of excellence in
                driving education.
              </p>

              <p data-aos="fade-up" data-aos-duration="1500">
                👉 Patient and Professional Instructors: Our team is dedicated to your success.
              </p>

              <p data-aos="fade-up" data-aos-duration="1500">
                👉Safety First: We prioritize your safety with state-of-the-art vehicles and top-tier training standards..
              </p>


              <p data-aos="fade-up" data-aos-duration="1500">
              👉The Best Choice: Experience unparalleled driving education tailored to your needs.
              Join us at Blue Island Driving School and embark on a journey of confidence and skill behind the wheel
              </p>

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
    </div>
  );
};

export default About;
