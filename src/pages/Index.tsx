import OpeningCredits from "@/components/OpeningCredits";
import MetricsBoard from "@/components/MetricsBoard";
import FeatureFilms from "@/components/FeatureFilms";
import BehindTheScenes from "@/components/BehindTheScenes";
import AwardsAndAccolades from "@/components/AwardsAndAccolades";
import ComingSoon from "@/components/ComingSoon";
import ContactSection from "@/components/ContactSection";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Film strip decorative borders */}
      <div className="fixed top-0 left-0 right-0 h-4 bg-border/30 z-50 pointer-events-none" />
      <div className="fixed bottom-0 left-0 right-0 h-4 bg-border/30 z-50 pointer-events-none" />
      
      <OpeningCredits />
      <MetricsBoard />
      <FeatureFilms />
      <BehindTheScenes />
      <AwardsAndAccolades />
      <ComingSoon />
      <ContactSection />
      <AIChat />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© 2025 Venkat Sanhit Srinivasula. All rights reserved.</p>
          <p className="mt-2 italic">A Product Manager Studio Production</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
