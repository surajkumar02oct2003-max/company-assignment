import React from 'react'
import heroImg from "../assets/clean_3d_design.png";

const Hero = () => {
  return (
   <section className="relative min-h-screen bg-[#f5f5f5] overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-4 pt-24 flex flex-col items-center">

        {/* Subtitle */}
        <p className="uppercase tracking-[10px] text-gray-500 text-xs sm:text-sm md:text-lg font-medium text-center">
          Market Strategies
        </p>

        {/* Heading */}
        <h1 className="mt-4 text-center font-light text-gray-500 leading-none">
          <span className="block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            THAT MOVE
          </span>

          <span className="block text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            WITH YOU
          </span>
        </h1>

        {/* Hero Image */}
        <div className="relative w-full flex justify-center -mt-8 sm:-mt-12 md:-mt-20">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[1200px] object-contain"
          />
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 flex gap-3">
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
