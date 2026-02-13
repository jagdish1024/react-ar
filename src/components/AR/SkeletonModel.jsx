import { useGLTF } from "@react-three/drei";

export function SkeletonModel({ position, rotation }) {
  const { scene } = useGLTF("/skeleton_pre-cut.glb");

  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={0.4}
    />
  );
}
