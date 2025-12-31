import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlowingOrb() {
  const mesh = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!mesh.current) return;

    mesh.current.rotation.y += 0.003;
    mesh.current.rotation.x += 0.002;

    const targetScale = hovered ? 1.35 : 1;
    mesh.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#4fd1ff"
        emissive="#4fd1ff"
        emissiveIntensity={hovered ? 1.8 : 0.8}
        roughness={0.2}
        metalness={0.7}
      />
    </mesh>
  );
}
