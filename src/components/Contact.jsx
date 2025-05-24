// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { styles } from "../styles";
// // import { EarthCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { slideIn } from "../utils/motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

// // template_ajpn87l
// // service_xl9pdx6
// // Q0Q7maY0F-thSd3EL

//     emailjs
//       .send(
//         'service_xl9pdx6',
//         'template_ajpn87l',
//         // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Devin Jonathan",
//           from_email: form.email,
//           to_email: "devinjo1306@gmail.com",
//           message: form.message,
//         },
//         'Q0Q7maY0F-thSd3EL',
//         // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm({
//             name: "",
//             email: "",
//             message: "",
//           });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);

//           alert("Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//       >
//         <p className={styles.sectionSubText}>Get in touch</p>
//         <h3 className={styles.sectionHeadText}>Contact.</h3>

//         <form
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className='mt-12 flex flex-col gap-8'
//         >
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Name</span>
//             <input
//               type='text'
//               name='name'
//               value={form.name}
//               onChange={handleChange}
//               placeholder="What's your good name?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your email</span>
//             <input
//               type='email'
//               name='email'
//               value={form.email}
//               onChange={handleChange}
//               placeholder="What's your web address?"
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>
//           <label className='flex flex-col'>
//             <span className='text-white font-medium mb-4'>Your Message</span>
//             <textarea
//               rows={7}
//               name='message'
//               value={form.message}
//               onChange={handleChange}
//               placeholder='What you want to say?'
//               className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
//             />
//           </label>

//           <button
//             type='submit'
//             className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
//       >
//         {/* <EarthCanvas /> */}
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import StarsCanvas from "./canvas/Stars"; // adjust the path if needed


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_xl9pdx6",
        "template_ajpn87l",
        {
          from_name: form.name,
          to_name: "Devin Jonathan",
          from_email: form.email,
          to_email: "devinjo1306@gmail.com",
          message: form.message,
        },
        "Q0Q7maY0F-thSd3EL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (

      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-10 overflow-hidden">
        {/* 💬 Contact Form */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#2b2b38] p-8 rounded-2xl shadow-lg"
        >
          <p className={styles.sectionSubText}>Feel free to connect with me!</p>
          <h3 className="text-[#ffffff] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-[#ffffff] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                className="bg-[#ffffff] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-[#ffffff] py-4 px-6 placeholder:text-gray-400 text-black rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-[#0D339B] py-3 px-8 rounded-xl w-fit text-white font-bold shadow-md hover:shadow-blue-500 transition"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>


        {/* 🔗 Social Media Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative xl:flex-1 flex flex-col justify-center items-center gap-8 bg-[#2b2b38] p-8 rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Background StarsCanvas */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <StarsCanvas />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-white text-2xl font-semibold mb-6">Find me on</h3>
            <div className="flex space-x-8 text-white text-4xl">
              <a
                href="https://github.com/nekoromancer13"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#4078c0] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/devinjonathan/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://wa.me/6285774720783"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/devinjo13/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#E1306C] transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    // </div>
  );
};

export default SectionWrapper(Contact, "contact");

