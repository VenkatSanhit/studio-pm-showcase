import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import PageTransition from "@/components/portfolio/PageTransition";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const navigateTo = (page: number) => {
    if (page === currentPage || transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
      setTransitioning(false);
    }, 600);
  };

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar currentPage={currentPage} navigateTo={navigateTo} />

      <AnimatePresence mode="wait">
        {currentPage === 0 && (
          <motion.main
            key="page-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroSection onNavigate={navigateTo} />
            <AboutSection />
            <PageTransition onClick={() => navigateTo(1)} label="EXPERIENCE & PROJECTS" direction="next" />
          </motion.main>
        )}

        {currentPage === 1 && (
          <motion.main
            key="page-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <PageTransition onClick={() => navigateTo(0)} label="HOME & ABOUT" direction="prev" />
            <ExperienceSection />
            <ProjectsSection />
            <LeadershipSection />
            <ContactSection />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Page indicator dots */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3">
        {[0, 1].map((p) => (
          <button
            key={p}
            onClick={() => navigateTo(p)}
            className={`transition-all duration-300 ${
              currentPage === p
                ? "w-8 h-1.5 bg-accent shadow-[0_0_8px_hsl(4_100%_59%/0.8)]"
                : "w-1.5 h-1.5 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default Index;
