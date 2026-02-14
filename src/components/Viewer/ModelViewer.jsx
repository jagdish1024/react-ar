import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { SkeletonModel } from "../AR/SkeletonModel";
import { MODELS } from "../../data/models";

export default function ModelViewer({ activeModule = "Spine and Back" }) {
  const model = MODELS[activeModule];

  return (
    <Canvas camera={{ position: [0, 1.2, 3] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 5, 3]} intensity={2} />
        <Environment preset="studio" />

        <SkeletonModel
          modelPath={model.path}
          position={[0, -1.2, 0]}
          rotation={[0, 0.4, 0]}
          scale={model.scale}
        />

        <OrbitControls enablePan={false} enableZoom rotateSpeed={0.7} />
      </Suspense>
    </Canvas>
  );
}
