import { useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  images,
  source_code_link,
  icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      key={`project-${index}`}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative w-full h-[200px] bg-gray-100 rounded-2xl">
          <img
            src={images[0]?.src || "/fallback.jpg"}
            alt={`${name} screenshot`}
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.target.src = "/fallback.jpg";
            }}
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="View Source"
            >
              <img
                src={icon}
                alt={`${name} icon`}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <h3 className="text-white text-xl font-semibold mt-4">{name}</h3>
        <p className="text-secondary mt-2 text-sm">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <Link to={`/project/${index}`}>
          <button className="mt-4 text-white underline text-sm hover:text-[#00C6FF] transition duration-200">
            Detail
          </button>
        </Link>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // ensures top load on mobile
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={`${styles.sectionSubText}`}>My Experiences</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-3 text-[#2b2b38] text-[17px] max-w-3xl leading-[30px]"
      >
        Below are some of the projects I worked on during my college years. Each
        project is accompanied by a picture and a description of what I did, either
        alone or in a group. The following demonstrates my ability to handle
        problems and use various software and technology effectively.
      </motion.p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");





// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
// }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//       >
//         <div className="relative w-full h-[230px]">
//           <img
//             src={image}
//             alt="project_image"
//             className="w-full h-full object-cover rounded-2xl"
//           />

//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="source code"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="mt-2 text-secondary text-[14px]">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <p
//               key={`${name}-${tag.name}`}
//               className={`text-[14px] ${tag.color}`}
//             >
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={`${styles.sectionSubText} `}>My Experiences</p>
//         <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
//       </motion.div>

//       <div className="w-full flex">
//         <motion.p
//           variants={fadeIn("", "", 0.1, 1)}
//           className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.
//         </motion.p>
//       </div>

//       <div className="mt-20 flex flex-wrap gap-7">
//         {projects.map((project, index) => (
//           <ProjectCard key={`project-${index}`} index={index} {...project} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Works, "");