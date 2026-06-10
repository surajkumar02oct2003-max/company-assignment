// import React from 'react'
// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//     const navItems = [
//     "HOME",
//     "ABOUT US",
//     "SERVICES",
//     "WORK",
//     "CULTURE",
//   ];
//   return (
//     <header className="w-full bg-[#f5f5f5] relative">
//       <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
//         <nav className="h-28 flex items-center justify-between">

//           {/* Logo */}
//           <div>
//             <h1 className="leading-none">
//               <span className="block text-red-600 text-3xl font-extrabold">
//                 Brand
//               </span>
//               <span className="block text-black text-3xl font-extrabold">
//                 Catapult
//               </span>
//             </h1>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <React.Fragment key={item}>
//                 <li>
//                   <a
//                     href="/"
//                     className={`text-sm tracking-[3px] font-medium transition-all duration-300 ${
//                       index === 0
//                         ? "text-red-600"
//                         : "text-gray-400 hover:text-red-600"
//                     }`}
//                   >
//                     {item}
//                   </a>
//                 </li>

//                 {index !== navItems.length - 1 && (
//                   <span className="text-red-600 text-xl">•</span>
//                 )}
//               </React.Fragment>
//             ))}
//           </ul>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex items-center gap-4">
//             <button className="px-8 py-3 rounded-full bg-[#1F2028] border border-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-600 transition-all">
//               JOIN THE TEAM
//             </button>

//             <button className="px-8 py-3 rounded-full bg-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-700 transition-all">
//               CONTACT
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-3xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
//           isOpen ? "max-h-[500px]" : "max-h-0"
//         }`}
//       >
//         <ul className="flex flex-col items-center py-6 gap-6">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a
//                 href="/"
//                 className="text-gray-700 tracking-[2px] hover:text-red-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}

//           <button className="px-8 py-3 rounded-full bg-[#1F2028] border border-red-600 text-white text-sm tracking-[2px] font-semibold">
//             JOIN THE TEAM
//           </button>

//           <button className="px-8 py-3 rounded-full bg-red-600 text-white text-sm tracking-[2px] font-semibold">
//             CONTACT
//           </button>
//         </ul>
//       </div>
//     </header>
//   )
// }

// export default Navbar


// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     "HOME",
//     "ABOUT US",
//     "SERVICES",
//     "WORK",
//     "CULTURE",
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <header className="w-full bg-[#f5f5f5] px-6 py-5 flex justify-between items-center">
//         <div>
//           <h1 className="leading-none">
//             <span className="block text-red-600 text-3xl font-bold">
//               Brand
//             </span>
//             <span className="block text-black text-3xl font-bold">
//               Catapult
//             </span>
//           </h1>
//         </div>

//         <button
//           onClick={() => setIsOpen(true)}
//           className="lg:hidden text-4xl"
//         >
//           ☰
//         </button>
//       </header>

//       {/* Overlay */}
//       <div
//         onClick={() => setIsOpen(false)}
//         className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
//           isOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       />

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-[280px] bg-white z-50 shadow-xl
//         transform transition-transform duration-500 ease-in-out
//         ${
//           isOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-5">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-3xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         <ul className="flex flex-col gap-8 px-8 mt-10">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a
//                 href="/"
//                 onClick={() => setIsOpen(false)}
//                 className="text-lg font-medium text-gray-700 hover:text-red-600"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Buttons */}
//         <div className="px-8 mt-10 flex flex-col gap-4">
//           <button className="w-full py-3 rounded-full bg-[#1F2028] text-white">
//             JOIN THE TEAM
//           </button>

//           <button className="w-full py-3 rounded-full bg-red-600 text-white">
//             CONTACT
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


// const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     "HOME",
//     "ABOUT US",
//     "SERVICES",
//     "WORK",
//     "CULTURE",
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <header className="w-full bg-[#f5f5f5] sticky top-0 z-50">
//         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
//           <nav className="h-28 flex items-center justify-between">

//             {/* Logo */}
//             <div>
//               <h1 className="leading-none">
//                 <span className="block text-red-600 text-3xl font-extrabold">
//                   Brand
//                 </span>

//                 <span className="block text-black text-3xl font-extrabold">
//                   Catapult
//                 </span>
//               </h1>
//             </div>

//             {/* Desktop Menu */}
//             <ul className="hidden lg:flex items-center gap-8">
//               {navItems.map((item, index) => (
//                 <React.Fragment key={item}>
//                   <li>
//                     <a
//                       href="/"
//                       className={`text-sm tracking-[3px] font-medium transition-all duration-300 ${
//                         index === 0
//                           ? "text-red-600"
//                           : "text-gray-400 hover:text-red-600"
//                       }`}
//                     >
//                       {item}
//                     </a>
//                   </li>

//                   {index !== navItems.length - 1 && (
//                     <span className="text-red-600 text-xl">•</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </ul>

//             {/* Desktop Buttons */}
//             <div className="hidden lg:flex items-center gap-4">
//               <button className="px-8 py-3 rounded-full bg-[#1F2028] border border-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-600 transition-all">
//                 JOIN THE TEAM
//               </button>

//               <button className="px-8 py-3 rounded-full bg-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-700 transition-all">
//                 CONTACT
//               </button>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               className="lg:hidden text-4xl"
//               onClick={() => setIsOpen(true)}
//             >
//               ☰
//             </button>
//           </nav>
//         </div>
//       </header>

//       {/* Overlay */}
//       <div
//         onClick={() => setIsOpen(false)}
//         className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 lg:hidden ${
//           isOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       />

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-50 shadow-2xl
//         transform transition-transform duration-500 ease-in-out lg:hidden
//         ${
//           isOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         {/* Close Button */}
//         <div className="flex justify-end p-5">
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-4xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <ul className="flex flex-col gap-8 px-8 mt-8">
//           {navItems.map((item) => (
//             <li key={item}>
//               <a
//                 href="/"
//                 className="text-lg font-medium tracking-[2px] text-gray-700 hover:text-red-600"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Buttons */}
//         <div className="px-8 mt-10 flex flex-col gap-4">
//           <button className="w-full py-3 rounded-full bg-[#1F2028] border border-red-600 text-white font-semibold">
//             JOIN THE TEAM
//           </button>

//           <button className="w-full py-3 rounded-full bg-red-600 text-white font-semibold">
//             CONTACT
//           </button>
//         </div>
//       </div>
//     </>
//   );


// export default Navbar;


import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "WORK",
    "CULTURE",
  ];

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-[#f5f5f5] sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <nav className="h-28 flex items-center justify-between">

            {/* Logo */}
            <div>
              <h1 className="leading-none">
                <span className="block text-red-600 text-3xl font-extrabold">
                  Brand
                </span>

                <span className="block text-black text-3xl font-extrabold">
                  Catapult
                </span>
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <React.Fragment key={item}>
                  <li>
                    <a
                      href="/"
                      className={`text-sm tracking-[3px] font-medium transition-all duration-300 ${
                        index === 0
                          ? "text-red-600"
                          : "text-gray-400 hover:text-red-600"
                      }`}
                    >
                      {item}
                    </a>
                  </li>

                  {index !== navItems.length - 1 && (
                    <span className="text-red-600 text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-8 py-3 rounded-full bg-[#1F2028] border border-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-600 transition-all">
                JOIN THE TEAM
              </button>

              <button className="px-8 py-3 rounded-full bg-red-600 text-white text-sm tracking-[2px] font-semibold hover:bg-red-700 transition-all">
                CONTACT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-4xl"
              onClick={() => setIsOpen(true)}
            >
              ☰
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[300px] bg-white z-50 shadow-2xl
        transform transition-transform duration-500 ease-in-out lg:hidden
        ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-4xl"
          >
            ✕
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul className="flex flex-col gap-8 px-8 mt-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="/"
                className="text-lg font-medium tracking-[2px] text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Buttons */}
        <div className="px-8 mt-10 flex flex-col gap-4">
          <button className="w-full py-3 rounded-full bg-[#1F2028] border border-red-600 text-white font-semibold">
            JOIN THE TEAM
          </button>

          <button className="w-full py-3 rounded-full bg-red-600 text-white font-semibold">
            CONTACT
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;