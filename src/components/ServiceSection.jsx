import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import leftImg from "../assets/service_left.png";
import rightImg from "../assets/service_right.png";


const ServiceSection = () => {
    const services = [
    "STRATEGY & CONSULTING",
    "PUBLIC RELATIONS",
    "DIGITAL",
    "BRANDING & DESIGN",
    "BTL & ADVERTISING",
    "PHOTOGRAPHY",
    "TECHNOLOGY",
    "CGI / VFX",
  ];

  const brandingItems = [
    "Brand Identity Development",
    "Re-Branding",
    "Brand Communications",
    "Brand Collaterals",
    "Packaging Design",
    "Marketing Collaterals",
  ];
  return (
    <section className="bg-[#0B0D12] min-h-screen py-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading */}
        <div>
          <p className="uppercase tracking-[8px] text-white text-sm">
            Our Services
          </p>

          <h2 className="text-red-500 text-3xl mt-2 uppercase">
            People
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-12 grid lg:grid-cols-2 gap-12">

          {/* Left Services */}
          <div className="space-y-6">

            {services.map((service, index) => (
              <div key={service}>
                {index === 3 ? (
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-white text-2xl font-semibold">
                      04
                    </span>

                    <h3 className="text-red-500 text-4xl md:text-6xl font-light">
                      {service}
                    </h3>

                    <button className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center border border-white/30">
                      <GoArrowUpRight size={28} />
                    </button>
                  </div>
                ) : (
                  <h3 className="text-gray-600 text-3xl md:text-6xl font-light hover:text-white transition cursor-pointer">
                    {service}
                  </h3>
                )}
              </div>
            ))}

          </div>

          {/* Right Content */}
          <div>

            {/* Images */}
            <div className="flex justify-center lg:justify-end gap-4">
              <img
                src={leftImg}
                alt=""
                className="w-40 sm:w-52 md:w-64 object-cover rounded"
              />

              <img
                src={rightImg}
                alt=""
                className="w-40 sm:w-52 md:w-64 object-cover rounded mt-10"
              />
            </div>

            {/* Tagline */}
            <div className="mt-8 text-center lg:text-left">
              <h4 className="uppercase tracking-[4px] text-xl md:text-3xl">
                <span className="text-red-500">
                  Real Brands.
                </span>{" "}
                <span className="text-gray-400">
                  Real Shifts.
                </span>{" "}
                <span className="text-red-500">
                  Real Results.
                </span>
              </h4>
            </div>

            {/* Divider */}
            <div className="mt-8 h-[1px] bg-gray-700"></div>

            {/* List */}
            <ul className="mt-8 space-y-3 text-gray-300 text-lg">
              {brandingItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3"
                >
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ServiceSection
