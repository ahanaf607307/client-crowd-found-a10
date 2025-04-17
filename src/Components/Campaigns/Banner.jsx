import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white flex items-center justify-center overflow-hidden px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight mb-4">
          Empowering Ideas, Together.
        </h1>
        <p className="text-base md:text-lg font-light text-white/90 mb-6">
          Join a community where every contribution counts and ideas turn into impact.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/allCamp">
    <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500">
      Get Started
    </button>
  </Link>

  <Link to="/allCamp">
    <button className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-indigo-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500">
      Learn More
    </button>
  </Link>
</div>

      </div>

      
    </div>
  );
}

export default Banner;
