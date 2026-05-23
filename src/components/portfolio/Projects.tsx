import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, Timer, Trophy, Activity } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    name: "Cogni Track",
    tag: "Study Tracker Web App",
    description:
      "An interactive study tracker with dashboards, session logging, productivity insights and real-time analytics charts.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "from-brand to-brand-3",
    preview: "dashboard",
  },
  {
    name: "Coding Quiz",
    tag: "Coding Quiz Platform",
    description:
      "A timer-based coding quiz platform with real-time score tracking, instant feedback and a polished interactive UI.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    accent: "from-brand-2 to-brand",
    preview: "quiz",
  },
];

function MockupDashboard() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-destructive/70" />
          <div className="h-2 w-2 rounded-full bg-amber-400/70" />
          <div className="h-2 w-2 rounded-full bg-brand-3/70" />
        </div>
        <div className="text-[10px] text-muted-foreground font-mono">cognitrack.app</div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { l: "Focus", v: "4h 12m", i: Timer },
          { l: "Streak", v: "12 days", i: Trophy },
          { l: "Sessions", v: "28", i: Activity },
        ].map((c) => (
          <div key={c.l} className="glass rounded-lg p-2">
            <c.i className="h-3 w-3 text-brand" />
            <div className="mt-1 text-[10px] text-muted-foreground">{c.l}</div>
            <div className="text-xs font-bold">{c.v}</div>
          </div>
        ))}
      </div>
      <div className="glass mt-3 rounded-lg p-3">
        <div className="mb-2 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Weekly Productivity</span>
          <BarChart3 className="h-3 w-3 text-brand" />
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {[40, 65, 50, 80, 45, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              className="flex-1 rounded-t bg-gradient-to-t from-brand to-brand-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MockupQuiz() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="flex items-center justify-between">
        <div className="glass rounded-full px-2 py-0.5 text-[10px] font-mono text-brand">Q 03 / 10</div>
        <div className="glass flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px]">
          <Timer className="h-3 w-3 text-brand-2" />
          <span className="font-mono">00:24</span>
        </div>
      </div>
      <div className="glass-strong mt-4 rounded-lg p-3">
        <div className="text-[11px] font-medium">What does <span className="font-mono text-brand">useMemo</span> return?</div>
        <div className="mt-3 space-y-1.5">
          {["A memoized value", "A side effect", "A ref object", "A new render"].map((o, i) => (
            <div key={o} className={`rounded-md px-2 py-1.5 text-[10px] ${i === 0 ? "bg-gradient-brand text-primary-foreground" : "bg-secondary"}`}>
              {o}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px]">
        <span className="text-muted-foreground">Score</span>
        <span className="font-bold text-gradient">820 pts</span>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title={<>Projects I'm <span className="text-gradient">proud</span> of</>}
      description="Selected projects that showcase my approach to architecture, UX and performance."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass-strong group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-glow"
          >
            <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />

            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-background/40">
              <div className="absolute inset-0 bg-hero-radial opacity-60" />
              {p.preview === "dashboard" ? <MockupDashboard /> : <MockupQuiz />}
            </div>

            <div className="relative mt-6">
              <div className="text-xs font-mono uppercase tracking-wider text-brand">{p.tag}</div>
              <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-brand px-3 py-1.5 text-xs font-semibold text-primary-foreground transition hover:scale-[1.03]">
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
                <a href="#" className="glass inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition hover:bg-secondary">
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
