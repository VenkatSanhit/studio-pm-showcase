import React from "react";
import ThemeToggle from "@/components/mono/ThemeToggle";
import ButtonMono from "@/components/mono/ButtonMono";
import CardMono from "@/components/mono/CardMono";

const Swatch = ({ label, hsl }: { label: string; hsl: string }) => (
  <div className="flex items-center gap-4">
    <div style={{ background: `hsl(${hsl})` }} className="w-20 h-12 border border-border" />
    <div className="text-sm">
      <div className="font-mono text-xs text-muted-foreground">{label}</div>
      <div className="text-sm">{`hsl(${hsl})`}</div>
    </div>
  </div>
);

const ThemeShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Theme Showcase</h2>
          <ThemeToggle />
        </div>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <CardMono>
            <h3 className="font-mono text-xs text-muted-foreground">Palette</h3>
            <div className="mt-4 flex flex-col gap-3">
              <Swatch label="Background" hsl="0 0% 0%" />
              <Swatch label="Surface / Card" hsl="0 0% 6%" />
              <Swatch label="Foreground" hsl="0 0% 100%" />
              <Swatch label="Accent" hsl="358 79% 47%" />
            </div>
          </CardMono>

          <CardMono>
            <h3 className="font-mono text-xs text-muted-foreground">Components</h3>
            <div className="mt-4 flex flex-col gap-4">
              <ButtonMono>Primary</ButtonMono>
              <ButtonMono variant="ghost">Ghost</ButtonMono>
              <CardMono featured>
                <div className="text-sm">Featured Case Study</div>
              </CardMono>
            </div>
          </CardMono>

          <CardMono>
            <h3 className="font-mono text-xs text-muted-foreground">Micro-interactions</h3>
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: "hsl(var(--accent))" }} />
                <div className="mono-pulse text-sm">● ACTIVE (pulse)</div>
              </div>
              <div className="mono-cursor w-6 h-6 bg-foreground" style={{ animation: "mono-blink 1s steps(2, start) infinite" }} />
            </div>
          </CardMono>
        </section>
      </div>
    </div>
  );
};

export default ThemeShowcase;
