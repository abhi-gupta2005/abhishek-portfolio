"use client";

export default function Leadership() {
  const activities = [
    {
      icon: "🤖",
      title: "TEAM ROBOLUTIOON",
      description:
        "Actively contributing to robotics initiatives, technical development, and innovation-driven projects.",
      stat: "Core Member",
    },

    {
      icon: "🎓",
      title: "Technical Mentorship",
      description:
        "Guiding juniors in robotics, embedded systems, STM32 development, and project building.",
      stat: "50+ Students",
    },

    {
      icon: "⚙️",
      title: "Workshops & Sessions",
      description:
        "Conducted practical sessions on robotics, sensors, motor drivers, embedded systems, and engineering tools.",
      stat: "10+ Sessions",
    },

    {
      icon: "🏆",
      title: "Competition Leadership",
      description:
        "Represented teams in national-level robotics competitions and coordinated technical preparation.",
      stat: "National Level",
    },

    {
      icon: "💡",
      title: "Project Guidance",
      description:
        "Helping students transform ideas into real engineering projects through structured guidance.",
      stat: "Multiple Projects",
    },

    {
      icon: "🚀",
      title: "Innovation & Research",
      description:
        "Exploring autonomous systems, AI integration, drones, and advanced robotics applications.",
      stat: "Ongoing",
    },
  ];

  return (
    <section
      id="leadership"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Leadership &{" "}
          <span className="gradient-text">
            Community
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          Beyond projects and competitions, I actively contribute
          to the robotics community through mentorship,
          workshops, technical guidance, and innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {activities.map((item, index) => (
            <div
              key={index}
              className="
                glass
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]
              "
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-violet-400 mt-3 font-semibold">
                {item.stat}
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}