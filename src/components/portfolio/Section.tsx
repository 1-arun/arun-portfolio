import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        {eyebrow && (
          <div className="glass mx-auto mb-4 inline-flex rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
            {eyebrow}
          </div>
        )}
        <h2 className="text-balance text-3xl font-bold sm:text-5xl">{title}</h2>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-balance text-muted-foreground">{description}</p>
        )}
      </motion.div>
      {children}
    </section>
  );
}
