"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Stars,
  Text,
} from "@react-three/drei";

import FloatingRobot from "./FloatingRobot";

export default function Scene() {
  return (
    <div className="h-[550px] w-full">
      <Canvas
        camera={{
          position: [0, 2, 6],
          fov: 50,
        }}
      >
        {/* Lights */}

        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight
          position={[-5, 5, 5]}
          intensity={1.5}
          color="#8b5cf6"
        />

        <pointLight
          position={[5, -5, 5]}
          intensity={1.5}
          color="#22d3ee"
        />

        {/* Background Stars */}

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />

        {/* Main Robot */}

        <FloatingRobot />

        {/* Floating Labels */}

        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <Text
            position={[0, 2.5, 0]}
            fontSize={0.3}
            color="#22d3ee"
          >
            STM32
          </Text>
        </Float>

        <Float
          speed={3}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Text
            position={[-2.5, 0, 0]}
            fontSize={0.25}
            color="#8b5cf6"
          >
            Micromouse
          </Text>
        </Float>

        <Float
          speed={2.5}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Text
            position={[2.5, 0, 0]}
            fontSize={0.25}
            color="#ec4899"
          >
            AI
          </Text>
        </Float>

        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Text
            position={[0, -2, 0]}
            fontSize={0.25}
            color="#f59e0b"
          >
            Drone
          </Text>
        </Float>

        {/* Controls */}

        <OrbitControls
          autoRotate
          autoRotateSpeed={1.5}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}