import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const certificates = [
  {
    title: "Alibaba Cloud Certification",
    image: "src/assets/alibaba.png",
    description: "Completed as Alibaba Cloud Certified Associate",
  },
  {
    title: "NVDIA Certificate of Competency",
    image: "src/assets/nvidia.png",
    description: "Completed NVDIA Fundamentals of Deep Learning",
  },
  {
    title: "Portuguese Meals Image Recognition Using CNN Models",
    image: "src/assets/paper1.png",
    description: "Published research paper by IEEE at 2024 6th International Conference on Cybernetics and Intelligent System (ICORIS)",
  },
  // Add more as needed...
];

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1}
              transitionSpeed={450}
              className="bg-tertiary p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-auto object-contain rounded-lg"
              />
              <h3 className="text-white text-xl font-semibold mt-4">
                {cert.title}
              </h3>
              <p className="text-secondary mt-2 text-sm">{cert.description}</p>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
