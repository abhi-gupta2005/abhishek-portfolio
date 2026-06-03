"use client";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      z-50
      w-[92%]
      max-w-7xl
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      shadow-[0_0_30px_rgba(139,92,246,0.15)]
    "
    >
      <div className="flex items-center justify-between px-8 py-4">

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            font-bold
            text-white
          "
          >
            AG
          </div>

          <div>
            <h1 className="font-bold text-white">
              Abhishek Gupta
            </h1>

            <p className="text-xs text-gray-400">
              Robotics Engineer
            </p>
          </div>

        </div>

        <div className="hidden gap-8 md:flex">

          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>

          <a href="#journey" className="text-gray-300 hover:text-white">
            Journey
          </a>

          <a href="#expertise" className="text-gray-300 hover:text-white">
            Expertise
          </a>

          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>

          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}