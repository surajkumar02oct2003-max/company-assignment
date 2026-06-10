import React from 'react'
import boyImg from "../assets/boy-img.png";
import { GoArrowUpRight } from "react-icons/go";


const ApprochSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={boyImg}
        alt="boy"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-10 w-full">

          {/* Left Side */}
          <div className="flex flex-col justify-center">

            <div className="flex items-center gap-6">

              <span className="text-red-500 text-2xl tracking-[4px]">
                ( 01 )
              </span>

              <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl">
                accato
              </h1>

            </div>

            <h2 className="mt-24 text-white/10 uppercase text-3xl md:text-5xl tracking-wide">
              WE ADAPT FOR YOU
            </h2>

            <button className="mt-8 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center hover:scale-110 transition">
              <GoArrowUpRight
                size={30}
                className="text-white"
              />
            </button>

          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center">

            <h3 className="text-red-500 text-3xl md:text-5xl uppercase tracking-[4px] font-medium">
              Our Approach
            </h3>

            <div className="flex gap-4 mt-8 flex-wrap">

              <span className="px-5 py-2 border border-white rounded-full text-white text-sm tracking-[2px]">
                BRANDING
              </span>

              <span className="px-5 py-2 bg-white rounded-full text-red-500 text-sm tracking-[2px] font-semibold">
                STRATEGY
              </span>

            </div>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-8 max-w-lg">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-0 right-0 z-20 px-6 lg:px-12">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Slider Dots */}
          <div className="flex gap-3">
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="w-3 h-3 rounded-full bg-white"></span>
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-white"></span>
          </div>

          {/* Bottom Text */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-white tracking-[8px] uppercase">

            <span>We Curate</span>

            <button className="px-6 py-3 bg-white rounded-full text-red-600 tracking-[2px] font-semibold">
              Branding ⌄
            </button>

            <span>For</span>

            <button className="px-6 py-3 bg-white rounded-full text-red-600 tracking-[2px] font-semibold">
              D2C Brands ⌄
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ApprochSection
