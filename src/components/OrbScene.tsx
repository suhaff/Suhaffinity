import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GlowingOrb from "./GlowingOrb";

export default function OrbScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={2} />
      <GlowingOrb />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
