import React from 'react'
import leftImg from "../assets/left_img.jpeg";
import rightImg from "../assets/right_img.jpeg";

const ValueSection = () => {
  return (
    <section className="bg-[#f5f5f5] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Row 1 */}
        <div className="grid lg:grid-cols-2 items-center">

          {/* Text */}
          <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-0 order-2 lg:order-1">
            <p className="text-[#666] text-lg md:text-xl leading-relaxed max-w-xl">
              We believe one size fits one, and only one! We work to
              become the right agency for our clients—researching,
              learning, experimenting and adapting tirelessly until we
              become the masters of their trade.
            </p>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center order-1 lg:order-2">

            {/* Background Circles */}
            {/* <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full bg-blue-100/40"></div>

            <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full bg-blue-100/40"></div>

            <div className="absolute w-[160px] h-[160px] md:w-[240px] md:h-[240px] rounded-full bg-blue-100/40"></div> */}

            <img
              src={rightImg}
              alt="Plan A Plan B"
              className="relative z-10 w-[280px] md:w-[400px] lg:w-[450px] object-contain"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-2 items-center">

          {/* Left Image */}
          <div className="relative flex justify-center">

            {/* Background Circles */}
            <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-yellow-100/60"></div>

            <div className="absolute w-[240px] h-[240px] md:w-[400px] md:h-[400px] rounded-full bg-yellow-100/50"></div>

            <img
              src={leftImg}
              alt="Creative Cube"
              className="relative z-10 w-[280px] md:w-[420px] lg:w-[500px] object-contain"
            />
          </div>

          {/* Text */}
          <div className="px-6 md:px-12 lg:px-20 py-16">
            <p className="text-[#666] text-lg md:text-xl leading-relaxed max-w-xl">
              Our clients think of us as an extension of their team.
              With an approach guided by empathy, flexibility and
              consistent communication we take ownership of our role as
              their partners.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ValueSection
