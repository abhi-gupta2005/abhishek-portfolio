"use client";

import { useEffect, useState } from "react";

const roles = [
  "Robotics Engineer",
  "Embedded Systems Developer",
  "Micromouse Champion",
  "STM32 Developer",
  "AI & Autonomous Systems Enthusiast",
];

export default function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-6 text-2xl font-semibold text-violet-300">
      {roles[roleIndex]}
    </p>
  );
}