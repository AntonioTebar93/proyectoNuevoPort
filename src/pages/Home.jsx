import { ChevronDown, ChevronUp } from "lucide-react";
import { useVisibleSection } from "../hooks/useVisibleSection";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection"
import { useScrollToHero } from "../hooks/useScrollToHero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export const Home = () => {
   useScrollToHero();
  const sectionIds = ["hero", "about", "skills", "projects", "contact", "footer"];
  const { activeSection, isInView } = useVisibleSection(sectionIds);

  const getNextSection = (id) => {
    const index = sectionIds.indexOf(id);
    return index < sectionIds.length - 1 ? sectionIds[index + 1] : id;
  };

  const getPreviousSection = (id) => {
    const index = sectionIds.indexOf(id);
    return index > 0 ? sectionIds[index - 1] : id;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="fixed inset-0 overflow-y-scroll snap-y snap-proximity scroll-smooth scroll-snap-duration-400">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
        </div>
      </main>

      {/* Chevrons Condicionales */}
      {isInView && activeSection !== "footer" && (
        <a
          href={`#${getNextSection(activeSection)}`}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce cursor-pointer transition-opacity duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
        </a>
      )}

      {isInView && activeSection !== "hero" && (
        <a
          href={`#${getPreviousSection(activeSection)}`}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce cursor-pointer transition-opacity duration-300"
          aria-label="Scroll up"
        >
          <ChevronUp className="h-10 w-10 text-primary hover:drop-shadow-[0_0_6px_#00ff88]" />
        </a>
      )}

        {/* Botón WhatsApp */}
      <a
        href="https://wa.me/34658431719"
        target="_blank"
        rel="noopener noreferrer"
        className="wh"
        aria-label="WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: "44px" }} />
      </a>
    </div>

    
  );
};
