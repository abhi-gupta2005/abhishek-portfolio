"use client";

export default function Projects() {
  const projects = [
    {
      title: "STM32 Micromouse Robot",
      icon: "🤖",
      status: "Competition Ready",
      color: "text-green-400",
      tech: [
        "STM32 Nucleo G070RB",
        "VL53L0X Sensors",
        "A* Path Planning",
        "PID Control",
        "TB6612FNG Driver",
      ],
      description:
        "Autonomous maze-solving robot designed for national-level Micromouse competitions.",
    },

    {
      title: "Autonomous Drone",
      icon: "🚁",
      status: "Under Development",
      color: "text-yellow-400",
      tech: [
        "Brushless Motors",
        "Flight Controller",
        "GPS Navigation",
        "Telemetry",
        "Payload System",
      ],
      description:
        "Intelligent autonomous drone focused on navigation and mission-based tasks.",
    },

    {
      title: "RC Aircraft",
      icon: "✈️",
      status: "Testing Phase",
      color: "text-cyan-400",
      tech: [
        "Fixed Wing Design",
        "Aerodynamics",
        "ESC Integration",
        "Radio Control",
        "Flight Optimization",
      ],
      description:
        "Long-range fixed-wing aircraft designed for stability and endurance.",
    },

    {
      title: "Robotics Club Leadership",
      icon: "🎓",
      status: "Active",
      color: "text-violet-400",
      tech: [
        "Mentorship",
        "Workshops",
        "Technical Sessions",
        "Project Guidance",
        "Team Management",
      ],
      description:
        "Conducting workshops and mentoring students in robotics and embedded systems.",
    },

    {
      title: "Portfolio Website",
      icon: "💻",
      status: "Live",
      color: "text-pink-400",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "Modern UI/UX",
      ],
      description:
        "Personal engineering portfolio showcasing projects, achievements and certifications.",
    },

    {
      title: "Embedded AI Research",
      icon: "🧠",
      status: "Research",
      color: "text-orange-400",
      tech: [
        "AI Models",
        "Edge Computing",
        "Embedded Systems",
        "Computer Vision",
        "Optimization",
      ],
      description:
        "Exploring AI deployment on resource-constrained embedded platforms.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Featured{" "}
          <span className="gradient-text">
            Projects
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Engineering projects focused on robotics,
          autonomous systems, embedded technologies,
          AI and innovation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project, index) => (
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
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p
                className={`mt-2 font-semibold ${project.color}`}
              >
                ● {project.status}
              </p>

              <p className="text-gray-400 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      bg-white/5
                      border
                      border-white/10
                      text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}