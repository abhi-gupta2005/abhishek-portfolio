"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingRole() {
  return (
    <TypeAnimation
      sequence={[
        "Robotics Engineer",
        2000,
        "Embedded Systems Developer",
        2000,
        "Micromouse Champion",
        2000,
        "AI Enthusiast",
        2000,
        "Drone Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="
        text-xl
        md:text-2xl
        font-semibold
        text-cyan-400
      "
    />
  );
}