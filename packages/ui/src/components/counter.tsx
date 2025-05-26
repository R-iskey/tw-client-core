'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  initial?: number;
  step?: number;
  interval?: number;
  format?: (n: number) => string;
  children?: React.ReactNode;
}

export const Counter = ({
  initial = 1000000,
  step = 7,
  interval = 50,
  format = (n: number) => n.toLocaleString(),
  children,
}: CounterProps) => {
  const [value, setValue] = useState(initial);
  const running = useRef(true);

  useEffect(() => {
    running.current = true;
    const timer = setInterval(() => {
      if (running.current) {
        setValue((v) => v + step);
      }
    }, interval);

    return () => {
      running.current = false;
      clearInterval(timer);
    };
  }, [step, interval]);

  return <span className="font-bold text-2xl tracking-wider drop-shadow">
    {format(value)}
    {children}
  </span>;
};
