import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { TechMarquee } from "@/components/portfolio/TechMarquee";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { MouseGlow } from "@/components/portfolio/MouseGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arun Chauhan — Frontend Engineer | React & Next.js Portfolio" },
      {
        name: "description",
        content:
          "Arun Chauhan is a Frontend Engineer with 2+ years of experience building high-performance React.js and Next.js applications focused on UX, performance and modern architecture.",
      },
      { property: "og:title", content: "Arun Chauhan — Frontend Engineer Portfolio" },
      { property: "og:description", content: "High-performance React & Next.js web experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <LoadingScreen />
      <ScrollProgress />
      <ParticleBackground />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TechMarquee />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
