import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const OpeningCredits = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />
      
      {/* Film Strip Border Animation */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-border opacity-20 border-y border-border" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-border opacity-20 border-y border-border" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Opening Credits Typography */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="text-sm uppercase tracking-[0.5em] text-secondary font-light">
            Product Manager Studio Presents
          </div>
          
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
            <span className="block text-foreground mb-2">Starring</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Venkat Sanhit
            </span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Srinivasula
            </span>
          </h1>

          <div className="text-2xl md:text-3xl text-muted-foreground font-light tracking-wide">
            as <span className="text-primary font-semibold">The Product Innovator</span>
          </div>

          <div className="relative w-48 h-48 mx-auto my-12 rounded-full overflow-hidden ring-4 ring-primary/50 ring-offset-8 ring-offset-background animate-glow-pulse">
            <img 
              src={profileImage} 
              alt="Venkat Sanhit Srinivasula"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-xl md:text-2xl text-secondary font-semibold tracking-wide italic">
            "Transforming Ideas into Impact"
          </p>

          <div className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8">
            A cinematic journey through 5+ years of product innovation, featuring successful launches,
            cross-functional collaboration, and data-driven decision-making across B2B and B2C SaaS platforms.
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection('feature-films')}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_rgba(220,20,60,0.6)] transition-all duration-300"
            >
              View Feature Films
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

// OpeningCredits removed — no-op component to clear film visuals.
const OpeningCredits = () => null;

export default OpeningCredits;
