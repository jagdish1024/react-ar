// src/components/Model.jsx
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/model.glb"); // put model in public folder

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 0, 0]}
      {...props}
    />
  );
}
