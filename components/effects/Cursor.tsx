"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
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
      className="
        pointer-events-none
        fixed
        z-[999]
        h-5
        w-5
        rounded-full
        bg-violet-400
        blur-[2px]
      "
      style={{
        left: position.x - 10,
        top: position.y - 10,
      }}
    />
  );
}