"use client";

import { Float } from "@react-three/drei";

export default function FloatingRobot() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      {/* Main Chassis */}

      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.4, 1.8]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>

      {/* STM32 Board */}

      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[1.4, 0.08, 0.9]} />
        <meshStandardMaterial color="#22d3ee" />
      </mesh>

      {/* Left Front Wheel */}

      <mesh position={[-1.1, -0.35, 0.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 32]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Right Front Wheel */}

      <mesh position={[1.1, -0.35, 0.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 32]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Left Rear Wheel */}

      <mesh position={[-1.1, -0.35, -0.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 32]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Right Rear Wheel */}

      <mesh position={[1.1, -0.35, -0.8]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.3, 0.3, 0.25, 32]} />
        <meshStandardMaterial color="#111111" />
      </mesh>

      {/* Front Sensor Bar */}

      <mesh position={[0, 0.15, 1]}>
        <boxGeometry args={[1.4, 0.12, 0.12]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>

      {/* Left Sensor */}

      <mesh position={[-0.5, 0.18, 1.08]}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
      </mesh>

      {/* Center Sensor */}

      <mesh position={[0, 0.18, 1.08]}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
      </mesh>

      {/* Right Sensor */}

      <mesh position={[0.5, 0.18, 1.08]}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" />
      </mesh>

      {/* Battery Pack */}

      <mesh position={[0, 0.18, -0.5]}>
        <boxGeometry args={[0.8, 0.25, 0.5]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>

      {/* Decorative LEDs */}

      <mesh position={[-0.7, 0.25, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
        />
      </mesh>

      <mesh position={[0.7, 0.25, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#ff0066"
          emissive="#ff0066"
        />
      </mesh>
    </Float>
  );
}