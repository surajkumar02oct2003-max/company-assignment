import React from 'react'
import socialImg from "../assets/circle_img.png";

const SocialServices = () => {
  return (
    <section className="bg-[#14161C] overflow-hidden py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={socialImg}
              alt="Social Presence"
              className="w-full max-w-[650px] object-contain"
            />
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">

            {/* Small Label */}
            <p className="uppercase tracking-[8px] text-red-500 text-sm md:text-base mb-8">
              Social Presence
            </p>

            {/* Heading */}
            <h2 className="text-white font-light uppercase leading-none">
              <span className="block text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]">
                Spam
              </span>

              <span className="block text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem]">
                The Gram
              </span>
            </h2>

            {/* Button */}
            <button className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 text-white px-8 md:px-12 py-4 rounded-full uppercase tracking-[3px] text-base md:text-xl font-medium">
              Follow @BrandCatapult
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default SocialServices
