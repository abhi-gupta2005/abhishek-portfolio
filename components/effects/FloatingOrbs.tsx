"use client";

export default function FloatingOrbs() {
  return (
    <>
      {/* Purple Orb */}

      <div
        className="
          fixed
          top-20
          left-20
          h-80
          w-80
          rounded-full
          bg-violet-500/15
          blur-[140px]
          animate-pulse
          pointer-events-none
          z-0
        "
      />

      {/* Cyan Orb */}

      <div
        className="
          fixed
          bottom-20
          right-20
          h-80
          w-80
          rounded-full
          bg-cyan-500/15
          blur-[140px]
          animate-pulse
          pointer-events-none
          z-0
        "
      />

      {/* Pink Orb */}

      <div
        className="
          fixed
          top-1/2
          right-1/4
          h-72
          w-72
          rounded-full
          bg-pink-500/10
          blur-[120px]
          animate-pulse
          pointer-events-none
          z-0
        "
      />
    </>
  );
}