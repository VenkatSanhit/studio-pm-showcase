import { useEffect, useState } from "react";

const TITLES = [
  "Product Manager",
  "Technical Product Owner",
  "AI Platform Builder",
  "0→1 Product Strategist",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = TITLES[titleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Red accent corner glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at top right, hsl(4 100% 59%), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 opacity-8 pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom left, hsl(4 100% 59%), transparent 70%)",
        }}
      />

      {/* Scan line effect */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none animate-scan-line"
        style={{ top: "30%" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* System label */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <span className="status-dot active" />
          <span className="font-mono text-xs text-muted-foreground tracking-[0.3em] uppercase">
            SYSTEM ONLINE // PORTFOLIO v6.0
          </span>
          <span className="status-dot active" />
        </div>

        {/* Name */}
        <div className="mb-3 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="font-terminal text-7xl md:text-9xl text-foreground tracking-wider leading-none">
            VENKAT SANHIT
          </h1>
        </div>
        <div className="mb-6 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
          <h1 className="font-terminal text-7xl md:text-9xl text-accent tracking-wider leading-none glow-text-red">
            SRINIVASULA
          </h1>
        </div>

        {/* Animated title */}
        <div className="mb-3 h-8 flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <span className="font-mono text-base md:text-lg text-silver tracking-widest">
            {displayed}
            <span className="cursor-blink" />
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mb-10 font-sans text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          Building scalable digital products from{" "}
          <span className="text-accent font-mono">0→1</span> and{" "}
          <span className="text-accent font-mono">1→N</span> — at the intersection of{" "}
          AI, strategy, and cross-functional execution.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.9s", opacity: 0 }}
        >
          <button
            onClick={() => handleNav("#projects")}
            className="btn-retro-primary"
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => handleNav("#experience")}
            className="btn-retro-outline"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => handleNav("#contact")}
            className="btn-retro-outline"
          >
            CONTACT
          </button>
        </div>

        {/* Stats strip */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px border border-border/50 animate-fade-in"
          style={{ animationDelay: "1.1s", opacity: 0 }}
        >
          {[
            { value: "6+", label: "YEARS EXP" },
            { value: "0→N", label: "INITIATIVES" },
            { value: "60%", label: "REV GROWTH" },
            { value: "200%", label: "TRAFFIC ↑" },
          ].map((stat) => (
            <div key={stat.label} className="bg-card/50 py-4 px-6 text-center border-r border-border/50 last:border-r-0">
              <div className="font-terminal text-3xl text-accent glow-text-red">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent/60" />
          <div className="w-2 h-2 border-r border-b border-accent rotate-45" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
