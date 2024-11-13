import Navbar from "./Components/NAVBAR/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import CarList from "./Components/CarList/CarList";
import Testimonial from "./Components/Testimonial/Testimonial";
import "./index.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    < >
        <Navbar />
      <Hero />
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
    </>
      
    
  );
}

export default App;
