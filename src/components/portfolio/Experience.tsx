import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Briefcase,
    role: "Frontend Developer",
    company: "Nidhisha Technologies",
    period: "May 2024 – Present",
    bullets: [
      "Led a 5-member team to deliver an EdTech SaaS platform using React.js and Zustand",
      "Built a scalable E-commerce food delivery platform with modular React architecture",
      "Created Figma mockups and improved MVP delivery speed by 20%",
      "Integrated REST APIs and AI-assisted development workflows (GitHub Copilot)",
      "Improved user engagement by 20% via UX refinements and micro-interactions",
      "Reduced load time by 50% using lazy loading and code splitting",
      "Achieved a Lighthouse performance score of 98",
    ],
    tags: ["React.js", "Next.js", "Zustand", "Tailwind", "REST APIs"],
  },
  {
    icon: GraduationCap,
    role: "Frontend Intern",
    company: "Shiwansh Solutions",
    period: "Jan 2024 – March 2024",
    bullets: [
      "Built responsive single-page applications with Tailwind CSS",
      "Debugged frontend issues using Chrome DevTools",
      "Created reusable UI components for the design system",
      "Improved team workflow and code organization conventions",
    ],
    tags: ["React.js", "Tailwind", "DevTools", "Components"],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A timeline of <span className="text-gradient">shipping</span></>}
      description="Hands-on roles where I shipped real products and improved real metrics."
    >
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-brand-2 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {items.map((it, i) => (
            <motion.div
              key={it.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid gap-6 md:grid-cols-2 md:gap-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                <div className="absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-brand shadow-glow md:left-1/2 md:-translate-x-1/2">
                  <it.icon className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="text-sm font-mono text-brand">{it.period}</div>
                <h3 className="mt-1 text-xl font-bold">{it.role}</h3>
                <div className="text-muted-foreground">{it.company}</div>
              </div>
              <div className="pl-12 md:pl-0">
                <div className="glass-strong rounded-2xl p-6">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {it.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
