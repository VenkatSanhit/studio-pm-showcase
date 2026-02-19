import LoadingScreen from "@/components/portfolio/LoadingScreen";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <LeadershipSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
