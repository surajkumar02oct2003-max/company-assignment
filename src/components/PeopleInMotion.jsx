import React from 'react'

const PeopleInMotion = () => {
  return (
    <section className="relative min-h-screen bg-[#f4f4f4] overflow-hidden flex flex-col items-center justify-center px-6">

      {/* Floating Dots */}
      <div className="absolute top-28 left-[12%] w-12 h-12 rounded-full bg-purple-400"></div>

      <div className="absolute top-40 left-[22%] w-4 h-4 rounded-full bg-yellow-400"></div>

      <div className="absolute top-24 right-[18%] w-8 h-8 rounded-full bg-red-600"></div>

      <div className="absolute top-[40%] right-[12%] w-4 h-4 rounded-full bg-green-400"></div>

      <div className="absolute bottom-52 left-[22%] w-8 h-8 rounded-full bg-sky-300"></div>

      <div className="absolute bottom-56 right-[25%] w-4 h-4 rounded-full bg-blue-400"></div>

      {/* Main Heading */}
      <div className="relative z-10 text-center">

        <h2 className="font-light text-[#6f6f6f] uppercase leading-tight">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
            We Partner
          </span>

          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
            With People
          </span>

          <div className="flex items-center justify-center gap-4 md:gap-8 mt-2">

            {/* Blue Line */}
            <div className="w-24 md:w-52 lg:w-80 h-[4px] bg-blue-300 rounded-full"></div>

            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
              In Motion
            </span>

          </div>

        </h2>

        {/* Yellow Line */}
        <div className="hidden md:block absolute top-[55%] right-[-130px] lg:right-[-180px]">
          <div className="w-32 lg:w-56 h-[4px] bg-yellow-400 rounded-full"></div>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="mt-20 max-w-xl text-center">
        <p className="text-gray-500 text-lg md:text-2xl leading-relaxed">
          Founders with conviction, teams feeling the stretch,
          ideas too big to stay small.
        </p>
      </div>

    </section>
  )
}

export default PeopleInMotion
