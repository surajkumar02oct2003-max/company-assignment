import React from 'react'

const ContactSection = () => {
  return (
    <section className="bg-[#CF1F2E] min-h-screen flex items-center py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <h2 className="text-white font-light uppercase leading-none">
              <span className="block text-[55px] sm:text-[70px] md:text-[90px] lg:text-[100px]">
                We Don't
              </span>

              <span className="block text-[55px] sm:text-[70px] md:text-[90px] lg:text-[100px]">
                Chase.
              </span>

              <span className="block text-[55px] sm:text-[70px] md:text-[90px] lg:text-[100px]">
                We Calibrate.
              </span>
            </h2>

            <p className="mt-8 text-white/90 text-lg md:text-2xl leading-relaxed max-w-lg">
              If you're thinking big, thinking bold, or thinking
              finally — you're thinking like us.
            </p>

          </div>

          {/* Right Side */}
          <div>

            <form className="space-y-14">

              {/* Name */}
              <div>
                <label className="block text-white uppercase tracking-[4px] text-sm mb-3">
                  Name
                </label>

                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/70 outline-none text-white pb-3"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-10">

                <div>
                  <label className="block text-white uppercase tracking-[4px] text-sm mb-3">
                    Email
                  </label>

                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/70 outline-none text-white pb-3"
                  />
                </div>

                <div>
                  <label className="block text-white uppercase tracking-[4px] text-sm mb-3">
                    Phone
                  </label>

                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-white/70 outline-none text-white pb-3"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-white uppercase tracking-[4px] text-sm mb-3">
                  Message
                </label>

                <textarea
                  rows="3"
                  className="w-full bg-transparent border-b border-white/70 outline-none text-white resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#1D1F26] hover:bg-black transition-all duration-300 text-white py-5 rounded-full uppercase tracking-[3px] text-lg md:text-2xl font-medium"
              >
                Start A Conversation
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  )
}

export default ContactSection
