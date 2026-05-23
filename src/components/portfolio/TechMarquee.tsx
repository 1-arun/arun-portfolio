const items = [
  "React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Zustand",
  "Redux", "TanStack Query", "Framer Motion", "shadcn/ui", "Vite", "Webpack",
  "GitHub", "Vercel", "Firebase", "Netlify", "Lighthouse", "GitHub Copilot",
];

export function TechMarquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Tech stack" className="relative overflow-hidden border-y border-border py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {row.map((t, i) => (
          <div
            key={`${t}-${i}`}
            className="glass shrink-0 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition hover:shadow-glow"
          >
            <span className="text-gradient font-mono mr-2">/</span>
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}
