import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlowingOrb() {
  const group = useRef<THREE.Group>(null!);
  const ring1 = useRef<THREE.Mesh>(null!);
  const ring2 = useRef<THREE.Mesh>(null!);
  const ring3 = useRef<THREE.Mesh>(null!);

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!group.current) return;

    // Speed control
    const speed = hovered ? 0.02 : 0.006;

    // Whole system gentle rotation
    group.current.rotation.y += hovered ? 0.003 : 0.0015;

    // Individual ring motion
    ring1.current.rotation.z += speed;
    ring2.current.rotation.x += speed * 0.8;
    ring3.current.rotation.y += speed * 1.1;

    // Hover scale
    const targetScale = hovered ? 1.3 : 1;
    group.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Core Sphere */}
      <mesh>
        <sphereGeometry args={[0.65, 64, 64]} />
        <meshStandardMaterial
          color="#9fd3dc"
          transparent
          opacity={0.85}
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>

      {/* Ring 1 - Horizontal */}
      <mesh ref={ring1} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.05, 0.035, 16, 120]} />
        <meshStandardMaterial
          color="#dffcff"
          emissive="#dffcff"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Ring 2 - Vertical */}
      <mesh ref={ring2} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.05, 0.035, 16, 120]} />
        <meshStandardMaterial
          color="#ff9ad5"
          emissive="#ff9ad5"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Ring 3 - Diagonal */}
      <mesh ref={ring3} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[1.05, 0.035, 16, 120]} />
        <meshStandardMaterial
          color="#d9ffe6"
          emissive="#d9ffe6"
          emissiveIntensity={0.9}
        />
      </mesh>
    </group>
  );
}
