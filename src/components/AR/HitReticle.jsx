import { useRef } from "react";
import { Interactive, useHitTest } from "@react-three/xr";

export function HitReticle({ onPlace }) {
  const ref = useRef();

  useHitTest((hitMatrix) => {
    if (!ref.current) return;

    hitMatrix.decompose(
      ref.current.position,
      ref.current.quaternion,
      ref.current.scale
    );
  });

  return (
    <Interactive onSelect={onPlace}>
      <mesh ref={ref} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.12, 0.18, 40]} />
        <meshStandardMaterial transparent opacity={0.7} color="white" />
      </mesh>
    </Interactive>
  );
}
