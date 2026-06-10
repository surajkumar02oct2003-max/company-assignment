import React from 'react'
import {
  FaBehance,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import logo from "../assets/logo.png";

const Footer = () => {
    const caseStudies = [
    "Strategy & Consulting",
    "Branding & Design",
    "Digital",
    "Public Relations",
    "BTL & Advertising",
    "Photography",
    "Technology",
    "CGI/VFX",
  ];

  const quickLinks = [
    "Home",
    "Services",
    "Work",
    "About Us",
    "Culture",
  ];
  return (
    <footer className="bg-[#0F1117] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left Section */}
          <div className="flex flex-col justify-between">

            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="Brand Catapult"
                className="w-52 md:w-64"
              />
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex flex-wrap items-center gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
              >
                <FaBehance />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-red-500 hover:text-red-500 transition"
              >
                <FaInstagram />
              </a>

              <span className="text-gray-400 text-base">
                Follow Us
              </span>

            </div>

          </div>

          {/* Empty Middle Space */}
          <div className="hidden lg:block"></div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">

            {/* Case Studies */}
            <div>
              <h3 className="uppercase tracking-[4px] text-white text-lg mb-8">
                Case Studies
              </h3>

              <ul className="space-y-5">
                {caseStudies.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="uppercase tracking-[4px] text-white text-lg mb-8">
                Quick Links
              </h3>

              <ul className="space-y-5">
                {quickLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
