// import React from "react";

// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { technologies } from "../constants";

// const Tech = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {technologies.map((technology) => (
//         <div className="w-28 h-28" key={technology.name}>
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Tech, "");


import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const TechCategory = ({ title, category }) => (
  <div className="mb-10">
    <h2 className="text-[#22223f] text-[24px] font-bold mb-5 text-center">
      {title}
    </h2>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies
        .filter((tech) => tech.category === category)
        .map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className="relative z-0 py-20">
      {/* Confined star background */}
      {/* <div className="absolute inset-0 h-full">
        <StarsCanvas />
      </div> */}

      {/* Content on top */}
      <div className="relative z-10">
        <TechCategory title="Programming Languages" category="language" />
        <TechCategory title="Database" category="database" />
        <TechCategory title="Editing & Design" category="tool" />
        <TechCategory title="Others" category="other" />
      </div>
    </div>
  );
};



export default SectionWrapper(Tech, "");
