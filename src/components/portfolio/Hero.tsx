import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

const badges = ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Zustand", "GitHub Copilot"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-4 pt-32 sm:px-6"
    >
      <div className="absolute inset-0 -z-10 bg-hero-radial" />
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl animate-blob" />
      <div
        className="absolute right-1/4 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-brand-2/30 blur-3xl animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-3 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-3" />
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance text-2xl font-bold leading-snug tracking-tight sm:text-4xl md:text-5xl"
        >
          Frontend Engineer Crafting <span className="text-gradient">High-Performance</span>
          <br />
          Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Frontend Engineer with 2+ years of experience building scalable React.js and Next.js
          applications focused on performance, UX, and modern frontend architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1eQPiObpdo_H4nhD-bQe3zH0KPJE_DMmy"
            target="_blank"
            rel="noreferrer"
            className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
        </motion.div>

        {/* glowing profile area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative mx-auto mt-16 h-48 w-48 sm:h-56 sm:w-56"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-40 blur-2xl animate-pulse-glow" />
          <div className="glass-strong relative grid h-full w-full place-items-center rounded-full">
            <div className="grid h-[88%] w-[88%] place-items-center rounded-full bg-gradient-brand text-5xl font-bold text-primary-foreground shadow-glow-violet">
              AC
            </div>
          </div>
          <div
            className="absolute -inset-4 animate-spin rounded-full border border-dashed border-brand/30"
            style={{ animationDuration: "30s" }}
          />

          {/* floating badges */}
          {badges.map((b, i) => {
            const angle = (i / badges.length) * Math.PI * 2;
            const radius = 170;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.08 }}
                className="glass absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium text-foreground shadow-elegant md:block animate-float"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                <Sparkles className="mr-1 inline h-3 w-3 text-brand" />
                {b}
              </motion.div>
            );
          })}
        </motion.div>

        {/* mobile badge row */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 md:hidden">
          {badges.map((b) => (
            <span key={b} className="glass rounded-full px-3 py-1 text-xs font-medium">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
