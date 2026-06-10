import React from 'react'
import cultureImg from "../assets/culture_img.png";

const CultureSection = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={cultureImg}
              alt="Culture"
              className="w-full max-w-[650px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="relative">

            {/* Small Label */}
            <p className="text-red-500 uppercase tracking-[8px] text-sm md:text-base mb-8">
              Culture
            </p>

            {/* Heading */}
            <div className="relative">
              <h2 className="text-[#3f3f3f] font-light uppercase leading-none">
                <span className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                  Rituals
                </span>

                <span className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                  That Echo
                </span>

                <span className="block text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                  The Energy
                </span>
              </h2>

              {/* Red Pill */}
              <div className="mt-6 lg:absolute lg:top-4 lg:right-0">
                <button className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-4 rounded-full uppercase tracking-[2px] text-lg font-medium">
                  Our Culture
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="mt-10 text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default CultureSection
