// src/components/ARButton.jsx
import { useXR } from "@react-three/xr";

export default function ARButton() {
  const { enterAR, isPresenting } = useXR();

  return (
    <mesh position={[0, -1, -2]}>
      {!isPresenting && (
        <mesh
          onClick={() => enterAR()}
        >
          <boxGeometry args={[0.5, 0.2, 0.1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      )}
    </mesh>
  );
}
