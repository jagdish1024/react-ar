import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, ARButton } from "@react-three/xr";
import { Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { MODELS } from "../data/models";

import { SkeletonModel } from "../components/AR/SkeletonModel";
import { HitReticle } from "../components/AR/HitReticle";

export default function ARPage() {
  const activeModule = "Spine and Back"; // later can make dynamic
  const model = MODELS[activeModule];

  const [pos, setPos] = useState([0, 0, 0]);
  const [placed, setPlaced] = useState(false);

  function handlePlace(e) {
    const p = e.intersection.object.position;
    setPos([p.x, p.y, p.z]);
    setPlaced(true);
  }

  return (
    <div className="w-screen h-screen bg-black overflow-hidden">
      <ARButton sessionInit={{ requiredFeatures: ["hit-test"] }} />

      <Canvas gl={{ alpha: true }}>
        <XR>
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <Environment preset="city" />

            {!placed && <HitReticle onPlace={handlePlace} />}

            <SkeletonModel
              modelPath={model.path}
              position={pos}
              rotation={[0, 0, 0]}
              scale={model.scale}
            />
          </Suspense>
        </XR>
      </Canvas>
    </div>
  );
}

