import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, OrbitControls, Preload, useTexture } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";

const RotatingCard = ({ imgUrl, bgColor }) => {
  const [texture] = useTexture([imgUrl]);
  const cardRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startMouse, setStartMouse] = useState({ x: 0, y: 0 });
  const dragRotation = useRef({ x: 0, y: 0 });

  const maxTilt = 0.2; // ~17 degrees
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!isDragging) {
      timeRef.current += delta;
      cardRef.current.rotation.y = Math.sin(timeRef.current * 0.6) * maxTilt;
      cardRef.current.rotation.x = Math.cos(timeRef.current) * maxTilt * 0.3;
    }
  });

  const handlePointerDown = (event) => {
    setIsDragging(true);
    setStartMouse({ x: event.clientX, y: event.clientY });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    if (cardRef.current) {
      dragRotation.current.x = cardRef.current.rotation.x;
      dragRotation.current.y = cardRef.current.rotation.y;
    }
  };

  const handlePointerMove = (event) => {
    if (isDragging && cardRef.current) {
      const dx = event.clientX - startMouse.x;
      const dy = event.clientY - startMouse.y;

      let newY = dragRotation.current.y + dx * 0.005;
      let newX = dragRotation.current.x + dy * 0.005;

      newY = Math.max(-maxTilt, Math.min(maxTilt, newY));
      newX = Math.max(-maxTilt, Math.min(maxTilt, newX));

      cardRef.current.rotation.y = newY;
      cardRef.current.rotation.x = newX;
    }
  };

  return (
    <group
      ref={cardRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerOut={handlePointerUp}
    >
      <RoundedBox args={[4, 6.4, 0.6]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color={bgColor} />
      </RoundedBox>

      <mesh position={[0, 0, 0.31]}>
        {!isNaN(4.2) && !isNaN(6.2) && (
          <planeGeometry args={[4.2, 6.2]} />
        )}
        <meshBasicMaterial
          map={texture}
          transparent
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      <mesh position={[0, 0, -0.31]} rotation={[0, Math.PI, 0]}>
        {!isNaN(4.2) && !isNaN(6.2) && (
        <planeGeometry args={[4.2, 6.2]} />
        )}
        <meshBasicMaterial
          map={texture}
          transparent
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

const ProfileCardCanvas = ({ icon, bgColor }) => {
  return (
    <div
      className="rounded-[20px] p-2 w-full h-full"
      style={{
        boxShadow: "inset 0 0 20px rgba(0,0,0,0.25)",
        backgroundColor: "transparent",
      }}
    >
      <Canvas
        frameloop="always"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <RotatingCard imgUrl={icon} bgColor={bgColor} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ProfileCardCanvas;
