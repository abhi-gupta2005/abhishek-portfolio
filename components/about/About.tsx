export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-32"
    >
      <div className="mb-12">
        <p className="text-violet-400 font-semibold">
          ABOUT ME
        </p>

        <h2 className="mt-2 text-5xl font-bold text-white">
          My Journey Into Robotics
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">

        <div>
          <p className="text-lg leading-relaxed text-gray-400">
            I am Abhishek Kumar Gupta, an Information Technology
            undergraduate at Rustamji Institute of Technology
            (RJIT), Gwalior.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            My interests revolve around Robotics, Embedded Systems,
            Autonomous Navigation, Artificial Intelligence,
            Drones, and Real-Time Control Systems.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Over the years I have worked on Micromouse robots,
            autonomous drones, utility robots, RC aircraft,
            STM32 development, ESP32 projects, and AI-powered systems.
          </p>
        </div>

        <div className="grid gap-6">

          <div className="rounded-2xl border border-violet-500/20 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-violet-400">
              Education
            </h3>

            <p className="mt-3 text-gray-400">
              B.Tech Information Technology
            </p>

            <p className="text-gray-500">
              Rustamji Institute of Technology
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-cyan-400">
              Robotics Focus
            </h3>

            <p className="mt-3 text-gray-400">
              Micromouse, Drones, Embedded Systems,
              Sensor Fusion, Path Planning,
              Autonomous Navigation
            </p>
          </div>

          <div className="rounded-2xl border border-pink-500/20 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-pink-400">
              Current Goal
            </h3>

            <p className="mt-3 text-gray-400">
              Building world-class autonomous robotics
              systems and contributing to cutting-edge
              AI and embedded technologies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}