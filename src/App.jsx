// import { BrowserRouter } from "react-router-dom";

// import {
//   About,
//   Contact,
//   // Experience,
//   // Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         {/* <Experience /> */}
//         <Tech />
//         <Works />
//         {/* <Feedbacks /> */}
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// src/App.jsx
// import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import { useEffect } from "react";

// import {
//   About,
//   Contact,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

// import Certificates from "./components/Certificates";
// import ProjectDetail from "./components/ProjectDetail";

// // Scroll handler for in-page anchor navigation
// const ScrollToSection = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/" && location.hash) {
//       const id = location.hash.replace("#", "");
//       const el = document.getElementById(id);
//       if (el) {
//         setTimeout(() => {
//           el.scrollIntoView({ behavior: "smooth" });
//         }, 0);
//       }
//     }
//   }, [location]);

//   return null;
// };

// // Only show stars behind the About section
// const Home = () => (
//   <>
//     <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//       <Hero />
//     </div>

//     <div className="relative z-0">
//       <About />
//     </div>

//     <div>
//       <Tech />
//       <StarsCanvas />
//     </div>

//     <Contact />
//   </>
// );

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <Navbar />
//         <ScrollToSection />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/works"
//             element={
//               <div className="min-h-screen pt-24">
//                 <Works />
//               </div>
//             }
//           />
//           <Route
//             path="/certificates"
//             element={
//               <div className="min-h-screen pt-24">
//                 <Certificates />
//               </div>
//             }
//           />
//           <Route path="/project/:id" element={<ProjectDetail />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import { About, Contact, Hero, Navbar, Tech, Works } from "./components";
import Certificates from "./components/Certificates";
import ProjectDetail from "./components/ProjectDetail";

// Scroll handler for in-page anchor navigation
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return null;
};

// Wrapper to force remount Certificates component on navigation
const CertificatesWrapper = () => {
  const location = useLocation();
  return <Certificates key={location.key} />;
};

// Only show stars behind the Tech section
const Home = () => (
  <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero />
    </div>

    <div className="relative z-0">
      <About />
    </div>

    <div>
      <Tech />
    </div>

    <Contact />
  </>
);

// Main application with routing and remounting logic
const AppContent = () => {
  const location = useLocation(); // track route changes

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-black">
      <Navbar />
      <ScrollToSection />

      {/* Force component remount on route change */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/works"
          element={
            <div className="min-h-screen pt-24">
              <Works />
            </div>
          }
        />
        <Route
          path="/certificates"
          element={
            <div className="min-h-screen pt-24">
              <CertificatesWrapper />
            </div>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
};

// Final wrapper with BrowserRouter
const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;

