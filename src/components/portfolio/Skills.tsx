import { motion } from "framer-motion";
import { Code, Layers, Wrench, Bot } from "lucide-react";
import { Section } from "./Section";

const categories = [
  {
    icon: Code,
    title: "Languages",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "HTML", level: 98 },
      { name: "CSS", level: 95 },
    ],
  },
  {
    icon: Layers,
    title: "Frontend",
    items: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Zustand", level: 85 },
      { name: "Redux", level: 80 },
      { name: "Context API", level: 90 },
      { name: "TanStack Query", level: 82 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "GitHub", level: 92 },
      { name: "Vercel", level: 88 },
      { name: "Firebase", level: 80 },
      { name: "Netlify", level: 85 },
      { name: "Lighthouse", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Webpack", level: 75 },
      { name: "DevTools", level: 90 },
    ],
  },
  {
    icon: Bot,
    title: "AI Tools",
    items: [
      { name: "GitHub Copilot", level: 92 },
      { name: "ChatGPT", level: 95 },
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title={<>The <span className="text-gradient">stack</span> I build with</>}
      description="A curated set of languages, frameworks and tools I use to ship modern web experiences."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:shadow-glow"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-10 blur-2xl transition group-hover:opacity-30" />
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>
            <div className="space-y-3">
              {cat.items.map((s, i) => (
                <div key={s.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className="text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-brand"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
