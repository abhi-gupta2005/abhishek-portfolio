"use client";

export default function Particles() {
  const particles = Array.from({ length: 40 });

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((_, i) => (
        <div
          key={i}
          className="
            absolute
            h-2
            w-2
            rounded-full
            bg-violet-400/30
            animate-pulse
          "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}