import { About } from "@/components/portfolio/About";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { MouseGlow } from "@/components/portfolio/MouseGlow";
import { Navbar } from "@/components/portfolio/Navbar";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Projects } from "@/components/portfolio/Projects";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Skills } from "@/components/portfolio/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollProgress />
      <div className="relative overflow-hidden">
        <ParticleBackground />
        <MouseGlow />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
