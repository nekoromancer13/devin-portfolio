import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-gradient-to-r from-[#163ef7] to-[#5499f9] p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[rgba(15,52,221,0.01)] rounded-[20px] py-5 px-12 min-h-[100px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const location = useLocation();
  const isAboutPage =
    location.pathname === "/" || location.pathname === "/about";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#2b2b38] text-[17px] max-w-3xl leading-[30px]"
      >
        I'm passionate about exploring new things in the tech world.
        Adaptable and work independently or in teams.
        A dedicated and motivated learner who have many ideas, works diligently,
        and is always eager to grow both personally and professionally.
      </motion.p>

      {isAboutPage && (
        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
