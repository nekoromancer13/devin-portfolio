// import React, { useEffect, useRef } from "react";

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     if (document.querySelector(`script[src="${src}"]`)) {
//       resolve();
//       return;
//     }
//     const script = document.createElement("script");
//     script.src = src;
//     script.async = true;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.body.appendChild(script);
//   });
// }

// const VantaBirdsBackground = () => {
//   const vantaRef = useRef(null);
//   const vantaEffect = useRef(null);

//   useEffect(() => {
//     async function setupVanta() {
//       try {
//         // Load dependencies sequentially
//         await loadScript(
//           "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
//         );
//         await loadScript(
//           "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
//         );
//         // await loadScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js");


//         if (window.VANTA && window.VANTA.BIRDS && !vantaEffect.current) {
//           vantaEffect.current = window.VANTA.BIRDS({
//             el: vantaRef.current,
//             mouseControls: true,
//             touchControls: true,
//             gyroControls: false,
//             minHeight: 200,
//             minWidth: 200,
//             scale: 1,
//             scaleMobile: 1,
//           });
//         }
//       } catch (error) {
//         console.error("Error loading Vanta scripts:", error);
//       }
//     }

//     setupVanta();

//     return () => {
//       if (vantaEffect.current) {
//         vantaEffect.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={vantaRef}
//       style={{
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         zIndex: -1, // behind other content
//       }}
//     />
//   );
// };

// export default VantaBirdsBackground;
