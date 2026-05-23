import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun, Github, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all sm:px-6",
        scrolled ? "glass-strong shadow-elegant" : "glass",
      )}
    >
      <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-glow">
          A
        </span>
        <span className="hidden sm:inline">
          Arun<span className="text-gradient">.dev</span>
        </span>
      </a>

      <nav className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={cn(
              "relative rounded-lg px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground",
              active === l.id && "text-foreground",
            )}
          >
            {l.label}
            {active === l.id && (
              <motion.span
                layoutId="nav-active"
                className="absolute inset-0 -z-10 rounded-lg bg-gradient-brand opacity-20"
              />
            )}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground sm:grid"
        >
          <Github className="h-4 w-4" />
        </a>
        <a
          href="https://x.com/1Arun_"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className="hidden h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground sm:grid"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-secondary hover:text-foreground md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground",
                active === l.id && "bg-secondary text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
