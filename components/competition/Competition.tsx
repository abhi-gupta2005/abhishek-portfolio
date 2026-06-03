"use client";

import { useState } from "react";

export default function Competition() {
  const [selected, setSelected] = useState<any>(null);

  const competitions = [
    {
      title: "IIT Patna",
      position: "🥇 1st Place",
      event: "Micromouse Competition",
      year: "2026",
      certificate: "/competitions/iit-patna.jpg",
      description:
        "Secured 1st Place in the IIT Patna Micromouse Competition through autonomous maze solving, optimized path planning and embedded control systems.",
    },

    {
      title: "IIT Guwahati",
      position: "🎯 7th Place",
      event: "Micromouse Competition",
      year: "2026",
      certificate: "/competitions/iit-guwahati.jpg",
      description:
        "Ranked among the top teams at IIT Guwahati in a highly competitive robotics event focused on speed and autonomous navigation.",
    },
  ];

  return (
    <section
      id="competition"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Competition{" "}
          <span className="gradient-text">
            Achievements
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          National-level robotics competitions and
          Micromouse achievements across premier IITs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {competitions.map((comp, index) => (
            <div
              key={index}
              onClick={() => setSelected(comp)}
              className="
                glass
                cursor-pointer
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:scale-105
                hover:rotate-1
                hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]
              "
            >
              <div className="text-6xl mb-6">
                {comp.position.split(" ")[0]}
              </div>

              <h3 className="text-2xl font-bold">
                {comp.title}
              </h3>

              <p className="mt-3 text-violet-400 font-semibold">
                {comp.position}
              </p>

              <p className="mt-3 text-gray-400">
                {comp.event}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Click to View Certificate
              </p>

            </div>
          ))}

        </div>

      </div>

      {/* MODAL */}

      {selected && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelected(null)}
        >

          <div
            className="
              glass
              max-w-5xl
              w-full
              rounded-3xl
              p-8
              relative
              max-h-[90vh]
              overflow-y-auto
            "
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelected(null)}
              className="
                absolute
                right-6
                top-6
                text-2xl
                text-gray-400
                hover:text-white
              "
            >
              ✕
            </button>

            <h3 className="text-4xl font-bold">
              {selected.title}
            </h3>

            <p className="text-violet-400 font-semibold text-xl mt-2">
              {selected.position}
            </p>

            <p className="text-gray-400 mt-2">
              {selected.event}
            </p>

            <p className="text-gray-500 mb-8">
              Year: {selected.year}
            </p>

            {/* CERTIFICATE */}

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-black/20
                p-4
                mb-8
              "
            >
              <img
                src={selected.certificate}
                alt={selected.title}
                className="
                  w-full
                  h-[500px]
                  object-contain
                  rounded-xl
                "
              />
            </div>

            <div className="glass rounded-2xl p-6">

              <h4 className="text-xl font-semibold mb-4">
                Achievement Details
              </h4>

              <p className="text-gray-300 leading-relaxed">
                {selected.description}
              </p>

            </div>

          </div>

        </div>
      )}
    </section>
  );
}
