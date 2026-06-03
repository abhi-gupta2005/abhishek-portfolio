"use client";

import { useState } from "react";

const techData = {
  Python: {
    color: "cyan",
    title: "Python Ecosystem",
    items: [
      "NumPy - Numerical Computing",
      "Pandas - Data Analysis",
      "DSA - Data Structures & Algorithms",
      "Turtle Graphics - Animation & Visualization",
    ],
  },

  "C++": {
    color: "blue",
    title: "C++ Development",
    items: [
      "Object-Oriented Programming",
      "STL & Templates",
      "Competitive Programming",
      "Robotics Development",
      "Embedded Applications",
    ],
  },

  SQL: {
    color: "green",
    title: "Database Systems",
    items: [
      "Database Design",
      "Normalization",
      "Joins & Queries",
      "Data Management",
      "Optimization",
    ],
  },

  HTML: {
    color: "orange",
    title: "Frontend Structure",
    items: [
      "Semantic HTML",
      "Forms & Inputs",
      "Accessibility",
      "SEO Friendly Structure",
      "Responsive Layouts",
    ],
  },

  CSS: {
    color: "pink",
    title: "UI Development",
    items: [
      "Flexbox",
      "Grid",
      "Animations",
      "Glassmorphism",
      "Responsive Design",
    ],
  },

  "Arduino Nano": {
    color: "yellow",
    title: "Arduino Nano",
    items: [
      "Sensor Interfacing",
      "Compact Robotics",
      "Line Following Robots",
      "Embedded Control",
    ],
  },

  "Arduino Uno": {
    color: "yellow",
    title: "Arduino Uno",
    items: [
      "Motor Control",
      "Robotics Development",
      "PID Experiments",
      "Rapid Prototyping",
    ],
  },

  ESP32: {
    color: "green",
    title: "ESP32",
    items: [
      "WiFi Communication",
      "Bluetooth Connectivity",
      "IoT Systems",
      "Smart Devices",
      "Wireless Control",
    ],
  },

  "STM32 Blue Pill": {
    color: "blue",
    title: "STM32 Blue Pill",
    items: [
      "ARM Cortex-M3",
      "Interrupts",
      "Timers",
      "Embedded Systems",
      "Sensor Integration",
    ],
  },

  "STM32 Black Pill": {
    color: "blue",
    title: "STM32 Black Pill",
    items: [
      "Advanced Embedded Systems",
      "Real-Time Applications",
      "ARM Development",
      "Robotics Applications",
    ],
  },

  "STM32 Nucleo": {
    color: "purple",
    title: "STM32 Nucleo",
    items: [
      "Micromouse Development",
      "PID Control",
      "A* Path Planning",
      "VL53L0X Integration",
      "Encoder Feedback",
      "STM32CubeIDE",
      "Competition Robotics",
    ],
  },

  "Raspberry Pi": {
    color: "red",
    title: "Raspberry Pi",
    items: [
      "Linux Systems",
      "Computer Vision",
      "Python Automation",
      "AI Integration",
      "Edge Computing",
    ],
  },
};

export default function Skills() {
  const [selected, setSelected] = useState<string | null>(null);

  const programming = [
    "Python",
    "C++",
    "SQL",
    "HTML",
    "CSS",
  ];

  const boards = [
    "Arduino Nano",
    "Arduino Uno",
    "ESP32",
    "STM32 Blue Pill",
    "STM32 Black Pill",
    "STM32 Nucleo",
    "Raspberry Pi",
  ];

  return (
    <>
      <section
        id="skills"
        className="mx-auto max-w-7xl px-6 py-28"
      >
        <div className="mb-20 text-center">

          <p className="font-semibold tracking-widest text-violet-400">
            SKILLS & EXPERTISE
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Technologies I Work With
          </h2>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Programming */}

          <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-md">

            <h3 className="mb-8 text-3xl font-bold text-violet-400">
              Programming
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {programming.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className="
                    rounded-2xl
                    bg-violet-500/10
                    p-5
                    text-left
                    transition-all
                    hover:scale-105
                    hover:bg-violet-500/20
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                  "
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item}
                  </h4>
                </button>
              ))}

            </div>

          </div>

          {/* Boards */}

          <div className="rounded-3xl border border-pink-500/20 bg-white/5 p-8 backdrop-blur-md">

            <h3 className="mb-8 text-3xl font-bold text-pink-400">
              Development Boards
            </h3>

            <div className="grid grid-cols-2 gap-4">

              {boards.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className="
                    rounded-2xl
                    bg-pink-500/10
                    p-5
                    text-left
                    transition-all
                    hover:scale-105
                    hover:bg-pink-500/20
                    hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]
                  "
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item}
                  </h4>
                </button>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* Dynamic Modal */}

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/70 backdrop-blur-md
            p-6
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              w-full max-w-3xl
              rounded-[32px]
              border border-white/10
              bg-[#090613]
              p-10
              shadow-[0_0_80px_rgba(139,92,246,0.2)]
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="uppercase tracking-[0.3em] text-violet-400">
                  Technology
                </p>

                <h2 className="mt-2 text-4xl font-bold text-white">
                  {techData[selected as keyof typeof techData].title}
                </h2>

              </div>

              <button
                onClick={() => setSelected(null)}
                className="text-3xl text-gray-400 hover:text-white"
              >
                ×
              </button>

            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              {techData[selected as keyof typeof techData].items.map(
                (item) => (
                  <div
                    key={item}
                    className="
                      rounded-2xl
                      bg-white/5
                      p-5
                      text-gray-300
                    "
                  >
                    {item}
                  </div>
                )
              )}

            </div>

          </div>
        </div>
      )}
    </>
  );
}