// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div> */}

//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hello, I'm <span className="text-[#915EFF]">Devin Jonathan</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             {/* Just an ordinary guy <br className="sm:block hidden" /> */}
//             a Computer Science student with a passion for art, design, and creativity.
//           </p>
//         </div>
//       </div>

//       <ComputersCanvas />

//       {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div> */}
//     </section>
//   );
// };

// export default Hero;

// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import StarsCanvas from "./canvas/Stars";
// import VantaBirdsBackground from "./canvas/VantaBirdsBackground"; // Import here


// const Hero = () => {
//   return (
//     // <section className={`relative w-full h-screen mx-auto flex items-center`}>
//     //   {/* Optional: Backgrounds */}
//     //   {/* <VantaBirdsBackground /> */}
//     //   {/* <StarsCanvas /> */}

//     //   <div
//     //     className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10`}
//     //   >
//     //     {/* Left - Profile Image */}
//     //     <div className="flex-shrink-0">
//     //       <img
//     //         src="./src/assets/ppic.png" // Use .png for transparent bg
//     //         alt="Devin Jonathan"
//     //         className="w-[300px] h-[350px] object-contain rounded-full border-4 border-[#915EFF]"
//     //       />
//     //     </div>

//     //     {/* Right - Text */}
//     //     <div className="text-center md:text-left">
//     //       <h1 className={`${styles.heroHeadText} text-white`}>
//     //         Hello, I'm <span className="text-[#915EFF]">Devin Jonathan</span>
//     //       </h1>
//     //       <p className={`${styles.heroSubText} mt-4 text-white-100`}>
//     //         a Computer Science student with a passion for art, design, and creativity.
//     //       </p>
//     //     </div>
//     //   </div>

//     //   {/* Optional Canvas */}
//     //   {/* <ComputersCanvas /> */}
//     // </section>
//     <section className="relative w-full h-screen mx-auto">

//   {/* 🟣 Replace BackgroundCanvas with Solid Color */}
//   <div className="absolute inset-0 z-0 bg-[#f4f3f6]" /> {/* Or any Tailwind-compatible hex or class */}

//   {/* Content */}
//   <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
//             {/* 👤 Image Section */}
//         <div className="flex-shrink-0">
//           <img
//             src="./src/assets/ppic.png"
//             alt="Devin Jonathan"
//             className="w-[500px] h-[700px] object-cover" // No border, square or adjust as needed
//           />
//         </div>
    
//     <div>
//       <h1 className={`${styles.heroHeadText} text-white`}>
//         Hello, I'm <span className="text-[#7861da]">Devin Jonathan</span>
//       </h1>
//       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//         a Computer Science student with a passion for art, design, and creativity.
//       </p>
//     </div>
//   </div>

//   <div className="z-10 relative">
//     {/* <ComputersCanvas /> */}
//   </div>

// </section>

//   );
// };

// export default Hero;

// import { styles } from "../styles";

// const Hero = () => {
//   return (
//     <section className="relative w-full min-h-screen bg-[#c8c3d8] flex items-center justify-center">
//       <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-between gap-10 py-20`}>
        
//         {/* 👤 Profile Image - NO border */}
//         <div className="w-full md:w-[45%] flex justify-center md:justify-start">
//           <img
//             src="./src/assets/ppic.png"
//             alt="Devin Jonathan"
//             className="w-full max-w-[500px] h-auto object-cover"
//           />
//         </div>

//         {/* 💬 Text Section */}
//         <div className="text-center md:text-left w-full md:w-[55%]">
//           <h1 className="text-[40px] md:text-[60px] font-bold text-[#1e1e1e] leading-tight">
//             Hello, I'm <span className="text-[#564fc0]">Devin Jonathan</span>
//           </h1>
//           <p className="mt-4 text-[18px] md:text-[20px] text-[#333] max-w-xl">
//             a Computer Science student with a passion for art, design, and creativity.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";
import RectangularCardCanvas from "./canvas/RectangularCardCanvas"; // 3D card
import { slideIn } from "../utils/motion"; // animation helper
import {
  ppic,
} from "../assets"

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-20`}
      >
        {/* 👤 Profile Image as 3D rotating card with animation */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="w-full max-w-[420px] aspect-[5/7.4]"
        >
          <RectangularCardCanvas icon={ppic}bgColor="#DDDAEF" />
        </motion.div>

        {/* 📝 Text Content with animation */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="text-center md:text-left w-full md:w-[55%]"
        >
          <h1 className="text-[40px] md:text-[60px] font-bold text-[#2b2b38] leading-tight">
            Hello, I'm <span className="text-[#2232a2]">Devin Jonathan</span>
          </h1>
          <p className="mt-4 text-[18px] md:text-[20px] text-[#22223f] max-w-xl">
            a Computer Science student with a passion for art, design, and creativity.
          </p>

          <a
            href="/cv_Devin_Jonathan.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-[#2232a2] text-white text-[16px] font-medium rounded-lg hover:bg-[#0a2a79] transition"
          >
            Download Resume
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;








