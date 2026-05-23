import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand text-xs font-bold text-primary-foreground">A</span>
          <span>© {new Date().getFullYear()} Arun Chauhan. Built with <Heart className="inline h-3 w-3 text-destructive" /> & React.</span>
        </div>
        <div className="flex items-center gap-2">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="glass grid h-9 w-9 place-items-center rounded-lg text-muted-foreground transition hover:bg-gradient-brand hover:text-primary-foreground">
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
