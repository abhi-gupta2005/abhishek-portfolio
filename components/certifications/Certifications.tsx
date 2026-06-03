"use client";

import { useState } from "react";

export default function Certifications() {
  const [selected, setSelected] = useState<any>(null);

  const certificates = [
    {
      title: "AWS Generative AI",
      issuer: "Amazon Web Services",
      image: "/certificates/aws-generative-ai.jpg",
      skills: "Generative AI, Prompt Engineering, LLM Applications",
    },
    {
      title: "Oracle AI Foundations",
      issuer: "Oracle",
      image: "/certificates/oracle-ai.jpg",
      skills: "Artificial Intelligence, Machine Learning Fundamentals",
    },
    {
      title: "Tata GenAI Analytics",
      issuer: "Tata",
      image: "/certificates/tata-genai.jpg",
      skills: "Data Analytics, Generative AI Applications",
    },
    {
      title: "Infosys Deep Learning",
      issuer: "Infosys",
      image: "/certificates/infosys-deep-learning.jpg",
      skills: "Neural Networks, CNN, Deep Learning",
    },
    {
      title: "Infosys Big Data",
      issuer: "Infosys",
      image: "/certificates/infosys-big-data.jpg",
      skills: "Big Data, Hadoop Ecosystem, Data Processing",
    },
    {
      title: "IIT Patna Micromouse",
      issuer: "IIT Patna",
      image: "/certificates/iit-patna-micromouse.jpg",
      skills: "Robotics, Autonomous Navigation, Embedded Systems",
    },
  ];

  return (
    <section id="certifications" className="py-28 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Professional{" "}
          <span className="gradient-text">
            Certifications
          </span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Industry certifications and professional learning
          achievements in AI, Cloud Computing, Robotics,
          and Data Science.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">

          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelected(cert)}
              className="
                glass
                rounded-3xl
                overflow-hidden
                cursor-pointer
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(139,92,246,0.35)]
              "
            >
              <div className="h-52 overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

              </div>

              <div className="p-5">

                <h3 className="font-bold text-lg">
                  {cert.title}
                </h3>

                <p className="text-violet-400 mt-2">
                  {cert.issuer}
                </p>

                <p className="text-gray-500 text-sm mt-3">
                  Click to View
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

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
                top-5
                right-5
                text-2xl
                text-gray-400
                hover:text-white
              "
            >
              ✕
            </button>

            <h3 className="text-3xl font-bold">
              {selected.title}
            </h3>

            <p className="text-violet-400 mt-2">
              {selected.issuer}
            </p>

            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">

              <img
                src={selected.image}
                alt={selected.title}
                className="
                  w-full
                  max-h-[600px]
                  object-contain
                "
              />

            </div>

            <div className="glass rounded-2xl p-6 mt-8">

              <h4 className="font-semibold text-xl mb-4">
                Skills Learned
              </h4>

              <p className="text-gray-300">
                {selected.skills}
              </p>

            </div>

          </div>

        </div>
      )}

    </section>
  );
}