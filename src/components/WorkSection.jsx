import React from 'react'
import WorkCard from "./WorkCard";

import nestImg from "../assets/nest.jpeg";
import happinestImg from "../assets/happinest.jpeg";
import shishuImg from "../assets/shishu.jpeg";

const WorkSection = () => {
    const projects = [
    {
      image: nestImg,
      title: "Nest",
      tags: ["Branding", "Strategy", "PR"],
    },
    {
      image: happinestImg,
      title: "HappiNest",
      tags: ["Branding", "Packaging", "PR"],
      active: "PR",
    },
    {
      image: shishuImg,
      title: "Shishu",
      tags: ["Branding", "Packaging", "Social Media"],
    },
  ];

  return (
    <section className="bg-[#070b11] py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Top Text */}
        <h2 className="text-center text-[40px] md:text-[80px] lg:text-[100px] font-light text-white/5 uppercase absolute left-1/2 -translate-x-1/2">
          We Stand With You
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

          {projects.map((project, index) => (
            <WorkCard
              key={index}
              image={project.image}
              title={project.title}
              tags={project.tags}
              active={project.active}
            />
          ))}

        </div>

        {/* Slider Line */}
        <div className="flex justify-center mt-16">
          <div className="relative w-[350px] h-[2px] bg-gray-700">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-[4px] bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full uppercase tracking-[3px] text-sm font-semibold transition">
            More Of Work
          </button>
        </div>

      </div>
    </section>
  )
}

export default WorkSection
