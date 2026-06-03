"use client";

import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
}

export default function Counter({
  target,
  suffix = "",
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += 1;

      if (start >= target) {
        start = target;
        clearInterval(timer);
      }

      setCount(start);
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}