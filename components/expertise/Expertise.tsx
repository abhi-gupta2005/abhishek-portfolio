export default function Expertise() {
  const expertise = [
    {
      icon: "🤖",
      title: "Robotics",
      description:
        "Autonomous robots, micromouse systems and intelligent navigation.",
    },

    {
      icon: "⚡",
      title: "Embedded Systems",
      description:
        "STM32, ESP32, Arduino and real-time hardware development.",
    },

    {
      icon: "🧠",
      title: "Artificial Intelligence",
      description:
        "Generative AI, analytics, automation and intelligent systems.",
    },

    {
      icon: "🚁",
      title: "Autonomous Vehicles",
      description:
        "Micromouse robots, drones and RC aircraft platforms.",
    },
  ];

  return (
    <section
      id="expertise"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      <div className="text-center mb-16">

        <p className="tracking-[0.3em] text-violet-400 font-semibold">
          CORE EXPERTISE
        </p>

        <h2 className="mt-4 text-5xl font-bold text-white">
          What I Build
        </h2>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {expertise.map((item) => (
          <div
            key={item.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-md
              transition-all
              hover:scale-105
              hover:border-violet-500/40
            "
          >

            <div className="text-5xl">
              {item.icon}
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {item.description}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}