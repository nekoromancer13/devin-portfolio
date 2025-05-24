// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { styles } from "../styles";
// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       if (scrollTop > 100) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`${
//         styles.paddingX
//       } w-full flex items-center py-5 fixed top-0 z-20 ${
//         scrolled ? "bg-primary" : "bg-transparent"
//       }`}
//     >
// <div className="w-full flex justify-center items-center max-w-7xl mx-auto">
//         {/* <Link
//           to="/"
//           className="flex items-center gap-2"
//           onClick={() => {
//             setActive("");
//             window.scrollTo(0, 0);
//           }}
//         >
//           <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
//           <p className="text-white text-[18px] font-bold cursor-pointer flex ">
//             Devin Jonathan &nbsp;
//             <span className="sm:block hidden"> | Newbie Developer</span>
//           </p>
//         </Link> */}

//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((nav) => (
//             <li
//               key={nav.id}
//               className={`${
//                 active === nav.title ? "text-white" : "text-secondary"
//               } hover:text-white text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(nav.title)}
//             >
//               <a href={`#${nav.id}`}>{nav.title}</a>
//             </li>
//           ))}
//         </ul>

//         <div className="sm:hidden flex flex-1 justify-end items-center">
//           <img
//             src={toggle ? close : menu}
//             alt="menu"
//             className="w-[28px] h-[28px] object-contain"
//             onClick={() => setToggle(!toggle)}
//           />

//           <div
//             className={`${
//               !toggle ? "hidden" : "flex"
//             } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
//           >
//             <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
//               {navLinks.map((nav) => (
//                 <li
//                   key={nav.id}
//                   className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                     active === nav.title ? "text-white" : "text-secondary"
//                   }`}
//                   onClick={() => {
//                     setToggle(!toggle);
//                     setActive(nav.title);
//                   }}
//                 >
//                   <a href={`#${nav.id}`}>{nav.title}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-20 py-5 ${
        scrolled ? "bg-[#4c58a4]" : "bg-transparent"
      }`}
    >
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex justify-center items-center relative`}
      >
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#0D339B]" : "text-[#4f88f5]"
              } hover:text-[#0D339B] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.path ? (
                <Link to={nav.path}>{nav.title}</Link>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden flex justify-end items-center absolute right-4">
            <div
              onClick={() => setToggle(!toggle)}
              className={`cursor-pointer transition-colors duration-300 ${
                toggle ? "text-[#4f88f5]" : "text-[#0D339B] "
              }`}
            >
              {toggle ? <HiX size={28} /> : <HiMenu size={28} />}
            </div>

            {/* Mobile Dropdown */}
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-[#70a4fd] absolute top-16 right-4 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none flex flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-white" : "text-black"
                    } hover:text-[#4f88f5] text-[18px] font-medium cursor-pointer`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                  >
                    {nav.path ? (
                      <Link to={nav.path}>{nav.title}</Link>
                    ) : (
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

      </div>
    </nav>
  );
};

export default Navbar;




