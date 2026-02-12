import React from "react";
import ThemeToggle from "./ThemeToggle";

const HeroMono: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center dot-matrix bg-background text-foreground">
      <div className="container mx-auto px-4 py-20 grid grid-cols-12 gap-8">
        <div className="col-span-12 flex items-start justify-between">
          <div className="flex items-center gap-6">
            <div className="text-sm font-mono tracking-widest text-muted-foreground">/home/venkat</div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--accent))" }} aria-hidden />
              <div className="text-xs font-mono text-muted-foreground">● LIVE</div>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <div className="col-span-12 lg:col-span-7 mt-12">
          <h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight font-sans">
            Venkat Sanhit
            <span className="inline-block ml-3 text-sm text-muted-foreground font-mono"> — Product + Strategy</span>
            <span className="mono-cursor inline-block ml-2 w-4 h-7 align-bottom bg-foreground" style={{ animation: "mono-blink 1s steps(2, start) infinite" }} />
          </h1>

          <p className="mt-6 max-w-prose text-muted-foreground">
            Precision-engineered product strategy, AI infrastructure, and design systems.
          </p>

          <div className="mt-8 flex gap-4">
            <a className="mono-btn inline-flex items-center border-border px-4 py-2 text-sm font-medium" href="#work">
              View Work
            </a>
            <a className="mono-btn inline-flex items-center border-border px-4 py-2 text-sm font-medium" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 mt-12">
          {/* Right column: quick stats / technical card */}
          <div className="mono-card border-border p-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono text-muted-foreground">STATUS</div>
              <div className="text-xs font-mono text-muted-foreground">UP 99.99%</div>
            </div>
            <div className="mt-3 text-sm">Design systems · Product Strategy · AI infra</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroMono;
