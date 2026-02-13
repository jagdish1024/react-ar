import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { SkeletonModel } from "../AR/SkeletonModel";

export default function ModelViewer() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 3] }}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 5, 3]} intensity={2} />

        {/* Environment */}
        <Environment preset="studio" />

        {/* Skeleton Preview */}
        <SkeletonModel
          position={[0, -1.2, 0]}
          rotation={[0, 0.4, 0]}
        />

        {/* Orbit Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          rotateSpeed={0.7}
        />
      </Suspense>
    </Canvas>
  );
}
