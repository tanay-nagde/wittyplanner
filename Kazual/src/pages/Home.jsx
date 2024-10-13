import React, { useState, useEffect, useRef } from "react";
import grid from "../assets/images/grid.png";
import { Link } from "react-router-dom";
export default function Home() {
  const [loaded, setLoaded] = useState(true);
  
  const gridRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  

  // Calculate equity percentage based on age (100 - age)

  return (
    <div className={`h-screen w-10/12 mx-auto overflow-x-hidden md:flex-row flex-col flex ${loaded ? "animate-loaded" : ""}`}>
      <div className={`w-1/2 h-screen ${loaded ? "transition-transform duration-500 ease-out transform -translate-x-full opacity-0" : "transform translate-x-0 opacity-100"}`}>
        <div className="flex flex-col items-center my-52">
          <h1 className={`font-extrabold text-3xl text-blue-800 ${loaded ? "animate-bounce" : ""}`}>
            Your Portfolio. Elevated.
          </h1>
          <p className="my-7 text-lg font-semibold text-center">
            "Finance is not merely about making money. It's about achieving our deep goals and protecting the fruits of our labor. It's about stewardship and, therefore, about achieving the good society."
            <br />- Robert J. Shiller
          </p>
          <Link to={"/analyze"}>Start Your Journey</Link>
        </div>
      </div>
      <div className="w-4/5 md:w-1/2 h-screen" ref={gridRef}>
        <img src={grid} className="my-32" alt="" />
      </div>
      
    </div>
  );
}
