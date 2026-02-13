import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { XR, ARButton } from "@react-three/xr";
import { Environment } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

import { SkeletonModel } from "../components/AR/SkeletonModel";
import { HitReticle } from "../components/AR/HitReticle";

export default function ARPage() {
  const [pos, setPos] = useState([0, 0, 0]);
  const [placed, setPlaced] = useState(false);

  const navigate = useNavigate();

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
            <SkeletonModel position={pos} rotation={[0, 0, 0]} />
          </Suspense>
        </XR>
      </Canvas>

      <button
        onClick={() => navigate("/")}
        className="fixed bottom-6 left-1/2 -translate-x-1/2
        bg-white text-black px-6 py-3 rounded-full font-bold z-[999999]"
      >
        Exit AR
      </button>
    </div>
  );
}
