// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   Decal,
//   Float,
//   OrbitControls,
//   Preload,
//   useTexture,
// } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1, 1]} />
//         <meshStandardMaterial
//           color="#fff8eb"
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2 * Math.PI, 0, 6.25]}
//           scale={1}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

//bikin kotak
// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl]);

//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.25} />
//       <directionalLight position={[0, 0, 0.05]} />
//       <mesh castShadow receiveShadow scale={2.25}>
//         {/* 3D Box instead of a sphere */}
//         <boxGeometry args={[1.5, 1.5, 1.5]} />
//         <meshStandardMaterial color="#fff8eb" />

//         {/* Logo applied on the front face of the box */}
//         <Decal
//           position={[0, 0, 0.76]} // move forward on Z so it's above the front face
//           rotation={[0, 0, 0]}
//           scale={1.2}
//           map={decal}
//           flatShading
//         />
//       </mesh>
//     </Float>
//   );
// };

// const BallCanvas = ({ icon }) => {
//   return (
//     <Canvas
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls enableZoom={false} />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas;


import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const meshRef = useRef();

  useEffect(() => {
    return () => {
      // Dispose the texture on unmount to prevent memory leaks
      if (decal) decal.dispose();
    };
  }, [decal]);

  return (
    <Float speed={1.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />

      <mesh castShadow receiveShadow scale={2.75} ref={meshRef}>
        <icosahedronGeometry args={[1, 8]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.2}
          metalness={0.1}
          reflectivity={0.6}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[Math.PI * 2, 0, 6.25]}
            scale={1}
            map={decal}
            anisotropy={8}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <div
      className="w-full h-full rounded-full"
      style={{ background: "transparent" }}
    >
      <Canvas
        frameloop="always"
        dpr={[1, 1.5]}
        gl={{ alpha: true }} // Removed preserveDrawingBuffer
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;


