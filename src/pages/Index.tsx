import MetricsBoard from "@/components/MetricsBoard";
import ContactSection from "@/components/ContactSection";
import AIChat from "@/components/AIChat";
import HeroMono from "@/components/mono/HeroMono";
import MonoNav from "@/components/mono/MonoNav";
import CaseStudiesMono from "@/components/mono/CaseStudiesMono";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Premium Mono Nav + Hero */}
      <MonoNav />
      <HeroMono />

      {/* Core sections: Metrics, Case Studies, Contact, Chat */}
      <main className="container mx-auto px-4 py-12">
        <MetricsBoard />
        <section id="case-studies" className="mt-12">
          <CaseStudiesMono />
        </section>
        <section id="contact" className="mt-12">
          <ContactSection />
        </section>
      </main>

      <AIChat />

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Venkat Sanhit. All rights reserved.</p>
          <p className="mt-2">Built with precision — Mono Intelligence</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
