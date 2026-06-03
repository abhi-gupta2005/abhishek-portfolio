"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        flex-col
        items-center
        justify-center
        overflow-hidden
        bg-[#05010f]
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-500/20
          blur-[140px]
          animate-pulse
        "
      />

      {/* Logo */}

      <div className="relative z-10 text-center">
        <h1
          className="
            text-7xl
            md:text-9xl
            font-black
            gradient-text
            tracking-wider
            animate-pulse
          "
        >
          AG
        </h1>

        <p
          className="
            mt-4
            text-lg
            md:text-xl
            text-white
            font-semibold
          "
        >
          Welcome to My Portfolio
        </p>

        <p
          className="
            mt-2
            text-sm
            md:text-base
            text-gray-400
            tracking-widest
          "
        >
          Robotics • AI • Embedded Systems
        </p>
      </div>

      {/* Loading Bar */}

      <div
        className="
          relative
          z-10
          mt-10
          h-2
          w-72
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        <div
          className="
            h-full
            animate-[loading_3s_linear]
            rounded-full
            bg-gradient-to-r
            from-violet-500
            via-cyan-400
            to-pink-500
          "
          style={{ width: "100%" }}
        />
      </div>

      {/* Boot Message */}

      <p
        className="
          relative
          z-10
          mt-6
          text-xs
          text-gray-500
          tracking-[0.25em]
          uppercase
        "
      >
        Initializing Engineering Portfolio...
      </p>
    </div>
  );
}