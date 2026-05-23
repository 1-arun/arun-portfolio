import { useEffect, useState } from "react";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, oklch(0.72 0.18 200 / 0.10), transparent 60%)`,
      }}
    />
  );
}
