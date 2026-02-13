// src/components/ARCanvas.jsx
import { Canvas } from "@react-three/fiber";
import { XR } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import ARButton from "./ARButton";

export default function ARCanvas() {
  return (
    <Canvas
      style={{ height: "100vh", width: "100vw" }}
      camera={{ position: [0, 1, 3] }}
    >
      <XR>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />

        <Model />

        <OrbitControls />

        <ARButton />   {/* ✅ now inside XR */}
      </XR>
    </Canvas>
  );
}
