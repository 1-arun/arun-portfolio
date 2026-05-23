import { motion } from "framer-motion";
import { Award, Gauge, Zap, TrendingUp, Users } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: Award, value: "2+", label: "Years Experience", glow: "from-brand to-brand-2" },
  { icon: Gauge, value: "98", label: "Lighthouse Score", glow: "from-brand-3 to-brand" },
  { icon: Zap, value: "50%", label: "Performance Optimization", glow: "from-brand-2 to-brand-3" },
  { icon: TrendingUp, value: "20%", label: "Productivity Improvement", glow: "from-brand to-brand-3" },
  { icon: Users, value: "5", label: "Member Team Leadership", glow: "from-brand-2 to-brand" },
];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Impact"
      title={<>Numbers that <span className="text-gradient">matter</span></>}
      description="The metrics behind the work — performance, leadership and measurable improvements."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong group relative overflow-hidden rounded-2xl p-6 text-center transition hover:-translate-y-1"
          >
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.glow} opacity-0 blur-2xl transition group-hover:opacity-30`} />
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
              <s.icon className="h-5 w-5" />
            </div>
            <div className="mt-4 text-4xl font-bold text-gradient">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
