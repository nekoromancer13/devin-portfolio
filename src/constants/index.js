import { Html } from "@react-three/drei";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  calm1,
  python,
  clanguage,
  java,
  r,
  photoshop,
  premiere,
  canva,
  rapid,
  mysql,
  unity,
  calm2,
  calm3,
  calm4,
  calm5,
  calm6,
  marmot1,
  marmot2,
  marmot3,
  marmot4,
  marmot5,
  marmot6,
  jetflix1,
  jetflix2,
  jetflix3,
  jetflix4,
  jetflix5,
  jetflix6,
  jetflix7,
  jetflix8,
  vnVideo,
  maid,
  child,
  princess,
  sides,
  frontVN,
  health0,
  health1,
  health2,
  health3,
  health4,
  health5,
  only0,
  only1,
  only2,
  only3,
  only4,
  only5,
  only6,
  only7,
  github,
  drive,
  port1,
  port2,
  port3,
  port4,
  port5,
  port6,
  port7,
} from "../assets";
import { path } from "framer-motion/client";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Experience",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

export const navLinks = [
  {
    id: "about",
    title: "About",
    path: "/",
  },
  {
    id: "works",
    title: "Experiences",
    path: "/works",
  },
  {
    id: "certificates",
    title: "Certificates",
    path: "/certificates",
  },
];

const services = [
  {
    title: "Teamwork",
    icon: web,
  },
  {
    title: "Fast-Learner",
    icon: mobile,
  },
  {
    title: "Hardworking",
    icon: backend,
  },
  {
    title: "Creative",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
    category: "language",
  },
  {
    name: "Java",
    icon: java,
    category: "language",
  },
  {
    name: "C",
    icon: clanguage,
    category: "language",
  },
  {
    name: "R",
    icon: r,
    category: "language",
  },
  {
    name: "HTML",
    icon: html,
    category: "language",
  },
  {
    name: "CSS",
    icon: css,
    category: "language",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "language",
  },

  ////////////////////////
  {
    name: "Figma",
    icon: figma,
    category: "tool",
  },
  {
    name: "Photoshop",
    icon: photoshop,
    category: "tool",
  },
  {
    name: "Premiere",
    icon: premiere,
    category: "tool",
  },
  {
    name: "Canva",
    icon: canva,
    category: "tool",
  },
  //aseprite
  ///////////////////////////
  {
    name: "Mysql",
    icon: mysql,
    category: "database",
  },
  ////////////////////////////
  {
    name: "RapidMiner",
    icon: rapid,
    category: "other",
  },
  {
    name: "Unity",
    icon: unity,
    category: "other",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56-",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// const certificates = [
//   {
//     title: "Google Data Analytics",
//     image: "/certificates/google-data-analytics.jpg",
//     description: "Completed Google’s Data Analytics Professional Certificate."
//   },
//   {
//     title: "Meta Front-End Developer",
//     image: "/certificates/meta-frontend.jpg",
//     description: "Built responsive UIs and learned React in Meta’s program."
//   },
//   {
//     title: "AWS Cloud Practitioner",
//     image: "/certificates/aws-cloud.jpg",
//     description: "Gained foundational AWS knowledge through certification."
//   },
//   {
//     title: "Machine Learning - Stanford",
//     image: "/certificates/ml-stanford.jpg",
//     description: "Finished Andrew Ng’s ML course on Coursera."
//   }
// ];

// const projects = [
//   {
//     name: "Calm",
//     description:
//       "UI Prototype of web-based platform to help peoples relieve their stress",
//     tags: [
//       // {
//       //   name: "react",
//       //   color: "blue-text-gradient",
//       // },
//       {
//         name: "solo-project",
//         color: "green-text-gradient",
//       },
//       // {
//       //   name: "tailwind",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: calm1,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Marmot Village",
//     description: "Clicker game with Marmot as the mascot",
//     tags: [
//       {
//         name: "team-project",
//         color: "blue-text-gradient",
//       },
//       // {
//       //   name: "restapi",
//       //   color: "green-text-gradient",
//       // },
//       // {
//       //   name: "scss",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "JetFlix",
//     description: "Streaming platform web-based using Figma, HTML, CSS, and JS",
//     tags: [
//       // {
//       //   name:"solo-project",
//       //   color: "blue-text-gradient",
//       // },
//       {
//         name: "solo-project",
//         color: "green-text-gradient",
//       },
//       // {
//       //   name: "css",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Visual Novel Game",
//     description:
//       "I'm the Strongest Assassin in this Wonderful World, BUT WHAT'S THIS?! my childhood friend is in danger, and thus began the story of how i defeat slavery and obtain a harem of slaves",
//     tags: [
//       {
//         name: "team-project",
//         color: "blue-text-gradient",
//       },
//       // {
//       //   name: "supabase",
//       //   color: "green-text-gradient",
//       // },
//       // {
//       //   name: "css",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Healthify",
//     description: "UI Prototype of ...",
//     tags: [
//       {
//         name: "team-project",
//         color: "blue-text-gradient",
//       },
//       // {
//       //   name: "supabase",
//       //   color: "green-text-gradient",
//       // },
//       // {
//       //   name: "css",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Only Foods",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "team-project",
//         color: "blue-text-gradient",
//       },
//       // {
//       //   name: "supabase",
//       //   color: "green-text-gradient",
//       // },
//       // {
//       //   name: "css",
//       //   color: "pink-text-gradient",
//       // },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const projects = [
  {
    name: "Calm",
    description:
      "UI Prototype of web-based platform to help peoples relieve their stress",
    tags: [
      {
        name: "solo-project",
        color: "green-text-gradient",
      },
    ],
    images: [
      { src: calm1, caption: "Landing page of Calm app" },
      { src: calm2, caption: "Figma prototype of Calm app" },
      { src: calm3, caption: "Login or Sign in page" },
      { src: calm4, caption: "Profile page" },
      { src: calm5, caption: "Stress relief feature page" },
      {
        src: calm6,
        caption:
          "Personal option for user to choose online or directly meet with the professional",
      },
    ],
    source_code_link:
      "https://www.figma.com/design/n0JiQQ9yKPJeo1xc5SxYVi/CALM-app?node-id=0-1&t=DdIiyc3zeC5eI5mR-1",
    icon: figma,
  },
  {
    name: "Marmot Village",
    description: "Clicker game with Marmot as the mascot",
    tags: [
      {
        name: "team-project",
        color: "blue-text-gradient",
      },
    ],
    images: [
      { src: marmot1, caption: "Main menu with some default options" },
      {
        src: marmot2,
        caption:
          "Settings that we can customize for the graphic and volume of the game",
      },
      {
        src: marmot3,
        caption:
          "In-game preview where we can click at the marmot to get the currency",
      },
      {
        src: marmot4,
        caption: "Features like upgrade and build to enhance the game progress",
      },
      {
        src: marmot5,
        caption:
          "There are also the skin features where we can change the skin as we want",
      },
      {
        src: marmot6,
        caption:
          "The dynamic background where the cloud can moving and when we build, the village can be more lively and crowded",
      },
    ],
    source_code_link: "https://github.com/nekoromancer13/MarmotVillage",
    icon: github,
  },
  {
    name: "JetFlix",
    description: "Streaming platform web-based using Figma, HTML, CSS, and JS",
    tags: [
      {
        name: "solo-project",
        color: "green-text-gradient",
      },
    ],
    images: [
      { src: jetflix1, caption: "Homepage of JetFlix" },
      { src: jetflix8, caption: "Overall figma prototype of JetFlix" },
      {
        src: jetflix2,
        caption: "Full homepage with features for kids and footers",
      },
      { src: jetflix3, caption: "Pages for new and popular movies" },
      {
        src: jetflix4,
        caption: "Pages for list of movies from different genres",
      },
      { src: jetflix5, caption: "Sign-in and Sign-up page" },
      {
        src: jetflix6,
        caption: "Details page for some series that have a lot of episodes",
      },
      { src: jetflix7, caption: "Footer design of JetFlix" },
    ],
    source_code_link: "https://github.com/nekoromancer13/JetFlix_WebProject",
    icon: github,
  },
  {
    name: "Visual Novel Game",
    description:
      "I'm the Strongest Assassin in this Wonderful World, BUT WHAT'S THIS?! my childhood friend is in danger, and thus began the story of how I defeat slavery and obtain a harem of slaves",
    tags: [
      {
        name: "team-project",
        color: "blue-text-gradient",
      },
    ],
    images: [
      { src: frontVN, caption: "Me as the main illustrator of this project" },
      { src: princess, caption: "Main heroine 1 as the princess" },
      {
        src: child,
        caption: "Main heroine 2 as the childhood friend of the main character",
      },
      {
        src: maid,
        caption: "Main heroine 3 as the maid of the main character",
      },
      {
        src: sides,
        caption:
          "from the left: main character, duke, king, main character dad",
      },
    ],
    video: vnVideo,
    source_code_link:
      "https://drive.google.com/drive/folders/16zpkE57JbpP1J-g7xwrRCjw697hxwRwh?usp=sharing",
    icon: drive,
  },
  {
    name: "Healthify",
    description: "UI Prototype of health monitoring and guidance platform",
    tags: [
      {
        name: "team-project",
        color: "blue-text-gradient",
      },
    ],
    images: [
      { src: health1, caption: "Landing page of Healthify" },
      { src: health0, caption: "Landing page of Healthify" },
      { src: health2, caption: "Landing page of Healthify" },
      { src: health3, caption: "Landing page of Healthify" },
      { src: health4, caption: "Landing page of Healthify" },
      { src: health5, caption: "Dashboard of Healthify prototype" },
    ],
    source_code_link:
      "https://www.figma.com/design/qSexWGRSIqUpoNuvFZ7CJH/HCI-team-library?node-id=0-1&t=PXKNSOUAQks80Cvk-1",
    icon: figma,
  },
  {
    name: "Only Foods",
    description: "UI prototype for restaurant based on kiosk system",
    tags: [
      {
        name: "team-project",
        color: "blue-text-gradient",
      },
    ],
    images: [
      { src: only1, caption: "Landing page of Only Foods" },
      { src: only0, caption: "Overall figma prototype of Only Foods" },
      { src: only2, caption: "Accessibility page of Only Foods" },
      { src: only3, caption: "Main menu" },
      {
        src: only4,
        caption: "AI features to make order more simpler and convenient",
      },
      { src: only5, caption: "List of choosen food" },
      { src: only6, caption: "Various payment methods" },
      { src: only7, caption: "Showing the successful order" },
    ],
    source_code_link:
      "https://www.figma.com/design/f5nciqYuSkmvyzsoWBdmFf/Entrepreneur?node-id=0-1&t=rBszpAIfqWkBFZfm-1",
    icon: figma,
  },
  {
    name: "Web Portfolio",
    description: "An individual website for my portfolio",
    tags: [
      {
        name: "solo-project",
        color: "green-text-gradient",
      },
    ],
    images: [
      {
        src: port1,
        caption:
          "Main page of the portfolio, with moveable image with react and clickable button to download the resume",
      },
      {
        src: port2,
        caption: "Some reactjs 3D for skills that I already learned",
      },
      {
        src: port3,
        caption: "Contact page, its linked with using an API from emailJS",
      },
      {
        src: port4,
        caption:
          "Experiences page, filled with my projects with detail button and source",
      },
      {
        src: port5,
        caption:
          "When detail button clicked, will shows all the information about the project",
      },
      { src: port6, caption: "Certificates page, showing my achievements" },
      {
        src: port7,
        caption:
          "It is also responsive on multiple type of device, such as mobile phone, tablets, and desktop",
      },
    ],
    source_code_link: "https://github.com/nekoromancer13/devin-portfolio",
    icon: github,
  },
];

export { services, technologies, projects };
