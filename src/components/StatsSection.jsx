import React from 'react'
import globeImg from "../assets/global_img.png";

const StatsSection = () => {
    const stats = [
    {
      number: "30K+",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu",
    },
    {
      number: "2K+",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu",
    },
    {
      number: "100+",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu",
    },
  ];
  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="space-y-16">

            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-6 sm:gap-10"
              >
                {/* Number */}
                <h2 className="text-[#d13242] font-light leading-none text-[70px] sm:text-[90px] lg:text-[110px] min-w-[180px]">
                  {item.number}
                </h2>

                {/* Text */}
                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <img
              src={globeImg}
              alt="Global Presence"
              className="w-full max-w-[650px] object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default StatsSection
