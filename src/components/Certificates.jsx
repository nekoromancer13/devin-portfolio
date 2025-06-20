import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-parallax-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { nvdia, alibaba, paper1 } from "../assets";

const certificates = [
  {
    title: "Alibaba Cloud Certification",
    image: alibaba,
    description: "Completed as Alibaba Cloud Certified Associate",
  },
  {
    title: "NVDIA Certificate of Competency",
    image: nvdia,
    description: "Completed NVDIA Fundamentals of Deep Learning",
  },
  {
    title: "Portuguese Meals Image Recognition Using CNN Models",
    image: paper1,
    description:
      "Published research paper by IEEE at 2024 6th International Conference on Cybernetics and Intelligent System (ICORIS)",
  },
];

const Certificates = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Ensure top of page on mobile
  }, []);

  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className={`${styles.sectionSubText}`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificates</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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
