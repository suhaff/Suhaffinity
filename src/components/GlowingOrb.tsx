import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlowingOrb() {
  const group = useRef<THREE.Group>(null!);

  const rings = [
    useRef<THREE.Mesh>(null!),
    useRef<THREE.Mesh>(null!),
    useRef<THREE.Mesh>(null!)
  ];

  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (!group.current) return;

    const speed = hovered ? 0.02 : 0.006;

    group.current.rotation.y += hovered ? 0.0025 : 0.001;

    rings[0].current.rotation.x += speed;
    rings[1].current.rotation.y -= speed * 0.9;
    rings[2].current.rotation.z += speed * 1.1;

    const baseScale = 1.8;
    
    const scale = hovered ? baseScale * 1.25 : baseScale;
    group.current.scale.lerp(
      new THREE.Vector3(scale, scale, scale),
      0.08
    );
  });

  return (
    <group
      ref={group}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* TRUE BLACK HOLE CORE (no lighting) */}
      <mesh>
        <sphereGeometry args={[0.5, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* INNER GLOW */}
      <mesh>
        <sphereGeometry args={[0.65, 64, 64]} />
        <meshStandardMaterial
          emissive="#000000ff"
          emissiveIntensity={hovered ? 1.2 : 0.7}
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* OUTER GLOW */}
      <mesh>
        <sphereGeometry args={[0.85, 64, 64]} />
        <meshStandardMaterial
          emissive="#040000ff"
          emissiveIntensity={hovered ? 0.9 : 0.5}
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* RING 1 – WHITE (EQUATOR) */}
      <mesh ref={rings[0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.035, 16, 160]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.9} />
      </mesh>

      {/* RING 2 – ORANGE */}
      <mesh ref={rings[1]} rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[1.25, 0.03, 16, 160]} />
        <meshStandardMaterial emissive="#ff8c00" emissiveIntensity={1.1} />
      </mesh>

      {/* RING 3 – WHITE (TILTED) */}
      <mesh ref={rings[2]} rotation={[Math.PI / 4, 0, Math.PI / 4]}>
        <torusGeometry args={[1.4, 0.025, 16, 160]} />
        <meshStandardMaterial emissive="#ffffff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}
