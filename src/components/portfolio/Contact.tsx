import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

const info = [
  { icon: Mail, label: "Email", value: "chauhanaruniit9936@gmail.com" },
  { icon: Phone, label: "Phone", value: "+919336634563" },
  { icon: MapPin, label: "Location", value: "Bengaluru, Karnataka, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section
      id="contact"
      eyebrow="Let's talk"
      title={
        <>
          Have a project in <span className="text-gradient">mind</span>?
        </>
      }
      description="I'm currently open to frontend roles and freelance collaborations. Drop a message."
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {info.map((i) => (
            <motion.div
              key={i.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-strong flex items-center gap-4 rounded-2xl p-4 transition hover:shadow-glow"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                <i.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {i.label}
                </div>
                <div className="text-sm font-medium">{i.value}</div>
              </div>
            </motion.div>
          ))}
          <div className="glass-strong flex items-center justify-around rounded-2xl p-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="group grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground transition hover:bg-gradient-brand hover:text-primary-foreground hover:shadow-glow"
              >
                <s.icon className="h-4 w-4 transition group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setTimeout(() => setSent(false), 3000);
          }}
          className="glass-strong relative overflow-hidden rounded-2xl p-6 lg:col-span-3"
        >
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" id="name" placeholder="Your name" />
            <Field label="Email" id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="mt-4">
            <Field label="Subject" id="subject" placeholder="What's this about?" />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor="msg">
              Message
            </label>
            <textarea
              id="msg"
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
            />
          </div>
          <button
            type="submit"
            className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.01]"
          >
            {sent ? (
              "Message sent! ✨"
            ) : (
              <>
                Send Message <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  id,
  ...rest
}: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        required
        {...rest}
        className="w-full rounded-xl border border-glass-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}
