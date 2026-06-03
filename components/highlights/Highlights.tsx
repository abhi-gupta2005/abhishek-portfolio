"use client";

import { useState } from "react";

const certificates = [
  {
    title: "AWS Academy Graduate - Generative AI Foundations",
    image: "/certificates/aws-generative-ai.jpg",
    issuer: "AWS Academy",
    icon: "☁️",
  },

  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    image: "/certificates/oracle-ai.jpg",
    issuer: "Oracle",
    icon: "🤖",
  },

  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    image: "/certificates/tata-genai.jpg",
    issuer: "Tata Group",
    icon: "📊",
  },

  {
    title: "Infosys Deep Learning for Developers",
    image: "/certificates/infosys-deep-learning.jpg",
    issuer: "Infosys",
    icon: "🧠",
  },

  {
    title: "Infosys Certified Big Data Professional",
    image: "/certificates/infosys-big-data.jpg",
    issuer: "Infosys",
    icon: "📈",
  },

  {
    title: "IIT Patna Micromouse Competition Champion",
    image: "/certificates/iit-patna-micromouse.jpg",
    issuer: "IIT Patna",
    icon: "🏆",
  },
];

export default function Highlights() {
  const [selected, setSelected] = useState<
    (typeof certificates)[number] | null
  >(null);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="text-center mb-12">

          <p className="text-violet-400 tracking-[0.3em] font-semibold">
            ACHIEVEMENTS & CERTIFICATIONS
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Professional Credentials
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Industry certifications, AI credentials, cloud technologies,
            and robotics competition achievements.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((item) => (
            <button
              key={item.title}
              onClick={() => setSelected(item)}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-6
                text-left
                transition-all
                hover:scale-[1.03]
                hover:border-violet-500/50
                hover:bg-violet-500/10
                hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]
              "
            >

              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-violet-400">
                {item.issuer}
              </p>

              <div className="mt-5 text-sm text-gray-400">
                Click to view certificate →
              </div>

            </button>
          ))}

        </div>

      </section>

      {/* CERTIFICATE MODAL */}

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-lg
            p-4
          "
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-6xl
              h-[90vh]
              rounded-[32px]
              border
              border-violet-500/20
              bg-[#090613]
              overflow-hidden
              shadow-[0_0_80px_rgba(139,92,246,0.25)]
            "
          >

            {/* CLOSE BUTTON */}

            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                top-5
                right-5
                z-50
                h-12
                w-12
                rounded-full
                bg-red-500
                text-white
                text-2xl
                font-bold
                transition
                hover:scale-110
              "
            >
              ×
            </button>

            {/* HEADER */}

            <div className="border-b border-white/10 p-8">

              <p className="uppercase tracking-[0.3em] text-violet-400">
                {selected.issuer}
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                {selected.title}
              </h2>

            </div>

            {/* CERTIFICATE IMAGE */}

            <div
              className="
                h-[calc(90vh-140px)]
                overflow-auto
                flex
                items-center
                justify-center
                p-6
              "
            >

              <img
                src={selected.image}
                alt={selected.title}
                className="
                  max-w-full
                  max-h-full
                  object-contain
                  rounded-2xl
                  border
                  border-white/10
                  shadow-2xl
                "
              />

            </div>

          </div>

        </div>
      )}
    </>
  );
}