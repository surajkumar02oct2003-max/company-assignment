import React from 'react'

const AboutSection = () => {
  return (
    <section className="relative bg-[#f5f5f5] overflow-hidden py-24 md:py-32">
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h5 className="text-[#b3b3b3] font-light leading-relaxed text-2xl sm:text-1xl md:text-2xl lg:text-3xl">
          A growing collective of thinkers, storytellers, designers,
          <br className="hidden md:block" />
          and strategists,
          <span className="font-semibold text-[#a8a8a8]">
            {" "}
            60+ strong,
          </span>
          <span className="font-semibold text-[#a8a8a8]">
            {" "}
            across 9 countries,
          </span>
          <br className="hidden md:block" />
          <span className="font-semibold text-[#a8a8a8]">
            grown steadily over 10+ years
          </span>
        </h5>
      </div>
    </section>

  )
}

export default AboutSection
