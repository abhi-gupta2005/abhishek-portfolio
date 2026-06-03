"use client";

import Counter from "./Counter";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="text-violet-400 font-semibold tracking-[0.3em]">
            ROBOTICS • EMBEDDED SYSTEMS • AI
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-white">
            Hi, I'm

            <span
              className="
                block
                bg-gradient-to-r
                from-violet-400
                via-cyan-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Abhishek Gupta
            </span>
          </h1>

          {/* TYPING ROLE */}

          <div className="mt-4">
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
          </div>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl">
            Engineering student passionate about Robotics,
            Embedded Systems, Artificial Intelligence,
            and Autonomous Systems.

            <br />
            <br />

            National-level Micromouse competitor with
            achievements at IIT Patna, IIT BHU,
            and IIT Guwahati.

            <br />
            <br />

            Building intelligent robots, autonomous drones,
            RC aircraft and next-generation embedded systems.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/Abhishek_Resume-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-violet-600
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                hover:scale-105
                hover:bg-violet-500
              "
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="
                rounded-xl
                border
                border-white/20
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                hover:border-violet-400
                hover:bg-white/5
              "
            >
              Contact Me
            </a>

          </div>

          {/* SOCIALS */}

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="https://github.com/abhi-gupta2005"
              target="_blank"
              className="
                flex items-center gap-3
                rounded-xl
                border border-white/10
                bg-white/5
                px-5 py-3
                text-gray-300
                transition-all
                hover:border-violet-400
                hover:text-white
                hover:scale-105
              "
            >
              <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-kumar-gupta-28612730b"
              target="_blank"
              className="
                flex items-center gap-3
                rounded-xl
                border border-white/10
                bg-white/5
                px-5 py-3
                text-gray-300
                transition-all
                hover:border-cyan-400
                hover:text-white
                hover:scale-105
              "
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            <a
              href="mailto:abhishekgupta140205@gmail.com"
              className="
                flex items-center gap-3
                rounded-xl
                border border-white/10
                bg-white/5
                px-5 py-3
                text-gray-300
                transition-all
                hover:border-pink-400
                hover:text-white
                hover:scale-105
              "
            >
              <FaEnvelope size={20} />
              Email
            </a>

            <a
              href="https://www.instagram.com/ak_gupta.14"
              target="_blank"
              className="
                flex items-center gap-3
                rounded-xl
                border border-white/10
                bg-white/5
                px-5 py-3
                text-gray-300
                transition-all
                hover:border-purple-400
                hover:text-white
                hover:scale-105
              "
            >
              <FaInstagram size={20} />
              Instagram
            </a>

          </div>

          {/* ACHIEVEMENTS */}

          <div className="mt-12 flex flex-wrap gap-3">

            <span className="rounded-full bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 text-yellow-300 text-sm">
              🏆 IIT Patna - 1st Place
            </span>

            <span className="rounded-full bg-slate-500/10 border border-slate-400/30 px-4 py-2 text-slate-300 text-sm">
              🥈 IIT BHU - 2nd Place
            </span>

            <span className="rounded-full bg-orange-500/10 border border-orange-400/30 px-4 py-2 text-orange-300 text-sm">
              🎯 IIT Guwahati - 7th Place
            </span>

          </div>

          {/* STATS */}

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="glass rounded-2xl p-5 text-center hover:scale-105 transition-all">
              <h3 className="text-4xl font-bold text-violet-400">
                <Counter target={3} />
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                National Competitions
              </p>
            </div>

            <div className="glass rounded-2xl p-5 text-center hover:scale-105 transition-all">
              <h3 className="text-4xl font-bold text-cyan-400">
                <Counter target={6} />
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Industry Certifications
              </p>
            </div>

            <div className="glass rounded-2xl p-5 text-center hover:scale-105 transition-all">
              <h3 className="text-4xl font-bold text-pink-400">
                <Counter target={10} suffix="+" />
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Engineering Projects
              </p>
            </div>

            <div className="glass rounded-2xl p-5 text-center hover:scale-105 transition-all">
              <h3 className="text-4xl font-bold text-green-400">
                2028
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Graduation
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-[550px] w-[550px] rounded-full bg-gradient-to-r from-violet-500/30 via-cyan-500/20 to-pink-500/30 blur-[140px] animate-pulse" />

          <div className="absolute h-[460px] w-[460px] rounded-full border border-violet-500/20 rotate-slow" />

          <div className="absolute h-[520px] w-[520px] rounded-full border border-cyan-500/10 rotate-reverse" />

          <img
            src="/profile.jpg"
            alt="Abhishek Gupta"
            className="
              relative
              z-10
              h-[400px]
              w-[400px]
              md:h-[470px]
              md:w-[470px]
              rounded-full
              object-cover
              object-[center_15%]
              border-4
              border-white/10
              hero-glow
              transition-all
              duration-500
              hover:scale-105
            "
          />

        </div>

      </div>
    </section>
  );
}