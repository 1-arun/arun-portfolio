import { motion } from "framer-motion";
import { Gauge, Code2, Rocket, Sparkles } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: Code2, label: "Years Experience", value: "2+" },
  { icon: Rocket, label: "Projects Shipped", value: "15+" },
  { icon: Gauge, label: "Lighthouse Score", value: "98" },
  { icon: Sparkles, label: "Performance Mindset", value: "100%" },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title={<>Building <span className="text-gradient">pixel-perfect</span> web apps</>}
    >
      <div className="grid items-start gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-2xl p-8 lg:col-span-3"
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dynamic Frontend Engineer with <span className="text-foreground font-medium">2+ years of experience</span> building
            high-performance, pixel-perfect web applications. Skilled in React.js, Next.js, and modern
            frontend architecture with focus on UX, Core Web Vitals, and responsive design.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experienced in developing scalable SPAs, optimizing performance using lazy loading and
            code-splitting, and leveraging AI-assisted tools like <span className="text-foreground font-medium">GitHub Copilot</span> to
            accelerate development workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Performance", "Accessibility", "UX", "Core Web Vitals", "Clean Code"].map((t) => (
              <span key={t} className="glass rounded-full px-3 py-1 text-xs font-medium">{t}</span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-5 transition hover:bg-secondary/40"
            >
              <s.icon className="h-6 w-6 text-brand transition group-hover:scale-110" />
              <div className="mt-4 text-3xl font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
