export default function Journey() {
  const timeline = [
    {
      year: "2023",
      title: "Started Robotics Journey",
      points: [
        "Arduino Uno",
        "Basic Electronics",
        "Line Following Robots",
      ],
    },

    {
      year: "2024",
      title: "Embedded Systems Exploration",
      points: [
        "ESP32 Development",
        "STM32 Blue Pill",
        "Sensor Integration",
      ],
    },

    {
      year: "2025",
      title: "Advanced Robotics Development",
      points: [
        "STM32 Nucleo",
        "Micromouse Development",
        "PID Control",
        "A* Path Planning",
      ],
    },

    {
      year: "2026",
      title: "National Robotics Competitions",
      points: [
        "🥇 IIT Patna Champion",
        "🥈 IIT BHU Runner-Up",
        "🏅 IIT Guwahati Top 10",
      ],
    },

    {
      year: "Future",
      title: "Vision",
      points: [
        "Robotics Engineer",
        "Embedded Systems Specialist",
        "AI & Autonomous Systems",
      ],
    },
  ];

  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-6 py-28"
    >
      <div className="text-center mb-20">

        <p className="tracking-[0.3em] text-violet-400 font-semibold">
          MY JOURNEY
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          Engineering Timeline
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A journey through robotics, embedded systems,
          autonomous machines, and engineering innovation.
        </p>

      </div>

      <div className="relative">

        {/* Center Line */}

        <div
          className="
            absolute
            left-6
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-violet-500
            via-cyan-500
            to-violet-500
          "
        />

        <div className="space-y-12">

          {timeline.map((item) => (
            <div
              key={item.year}
              className="relative pl-20"
            >

              {/* Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-4
                  h-12
                  w-12
                  rounded-full
                  bg-violet-600
                  shadow-[0_0_30px_rgba(139,92,246,0.6)]
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                "
              >
                •
              </div>

              {/* Card */}

              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-8
                  transition-all
                  hover:border-violet-500/40
                  hover:translate-x-2
                "
              >

                <div className="flex flex-wrap items-center gap-4">

                  <span
                    className="
                      rounded-full
                      bg-violet-500/20
                      px-4
                      py-2
                      text-violet-300
                      font-semibold
                    "
                  >
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                </div>

                <div className="mt-6 flex flex-wrap gap-3">

                  {item.points.map((point) => (
                    <span
                      key={point}
                      className="
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-gray-300
                      "
                    >
                      {point}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}