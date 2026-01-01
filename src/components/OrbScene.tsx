import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GlowingOrb from "./GlowingOrb";

export default function OrbScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55, near: 0.1, far: 100 }}
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
        background: "transparent" // IMPORTANT: lets stars show through
      }}
      gl={{ alpha: true, antialias: true }}
    >
      {/* Soft space lighting */}
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={1.6} />
      <pointLight position={[-6, -4, -6]} intensity={0.6} />

      {/* Black hole */}
      <GlowingOrb />

      {/* Controls (locked, cinematic) */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false} // IMPORTANT: prevents accidental clipping
      />
    </Canvas>
  );
}
