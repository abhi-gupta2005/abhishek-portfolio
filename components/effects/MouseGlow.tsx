"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 h-[400px] w-[400px] rounded-full blur-[120px]"
      style={{
        left: position.x - 200,
        top: position.y - 200,
        background:
          "radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)",
      }}
    />
  );
}