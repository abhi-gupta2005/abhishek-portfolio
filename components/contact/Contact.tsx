import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">

        <p className="tracking-[0.3em] text-violet-400 font-semibold">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold text-white mt-4">
          Let's Build Something Amazing Together
        </h2>

        <p className="mt-6 text-gray-400">
          Robotics • Embedded Systems • AI
        </p>

      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">

        <a
          href="mailto:abhishekgupta140205@gmail.com"
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            p-8
            text-center
            hover:border-violet-500/50
          "
        >
          <FaEnvelope className="mx-auto text-4xl text-violet-400" />

          <h3 className="mt-4 text-xl text-white">
            Email
          </h3>

          <p className="mt-2 text-gray-400">
            abhishekgupta140205@gmail.com
          </p>
        </a>

        <a
          href="https://github.com/abhi-gupta2005"
          target="_blank"
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            p-8
            text-center
          "
        >
          <FaGithub className="mx-auto text-4xl text-violet-400" />

          <h3 className="mt-4 text-xl text-white">
            GitHub
          </h3>
        </a>

        <a
          href="https://www.linkedin.com/in/abhishek-kumar-gupta-28612730b"
          target="_blank"
          className="
            rounded-3xl
            border border-white/10
            bg-white/5
            p-8
            text-center
          "
        >
          <FaLinkedin className="mx-auto text-4xl text-violet-400" />

          <h3 className="mt-4 text-xl text-white">
            LinkedIn
          </h3>
        </a>

      </div>
    </section>
  );
}