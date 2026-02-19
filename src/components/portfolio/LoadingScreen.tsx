import { useEffect, useState } from "react";

const BOOT_LINES = [
  "INITIALIZING SYSTEM KERNEL...",
  "LOADING PRODUCT MODULES...",
  "MOUNTING AI SUBSYSTEMS...",
  "CALIBRATING INTERFACE...",
  "PORTFOLIO READY.",
];

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [bootLine, setBootLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12 + 3;
        const clamped = Math.min(next, 100);
        // Update boot line based on progress
        const lineIdx = Math.floor((clamped / 100) * BOOT_LINES.length);
        setBootLine(Math.min(lineIdx, BOOT_LINES.length - 1));
        if (clamped >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 600);
        }
        return clamped;
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      style={{
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1)",
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      {/* Background */}
      <div className="dot-grid absolute inset-0 opacity-25" />
      <div className="grid-lines absolute inset-0 opacity-10" />

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 40% at 50% 50%, hsl(4 100% 59% / 0.06), transparent)" }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-accent/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-accent/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-accent/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-accent/30" />

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-8">
        {/* Logo */}
        <div
          className="font-terminal text-7xl text-foreground tracking-[0.15em]"
          style={{ textShadow: "0 0 40px hsl(4 100% 59% / 0.5), 0 0 80px hsl(4 100% 59% / 0.2)" }}
        >
          SYS://INIT
        </div>

        {/* Progress bar */}
        <div className="w-full space-y-2">
          <div className="w-full h-px bg-border relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 transition-all duration-150"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "hsl(var(--accent))",
                boxShadow: "0 0 12px hsl(4 100% 59% / 0.8), 0 0 4px hsl(4 100% 59%)",
              }}
            />
          </div>
          <div className="flex justify-between">
            <div className="font-mono text-[10px] text-muted-foreground/60 tracking-widest">
              {BOOT_LINES[bootLine]}
            </div>
            <div className="font-mono text-[10px] text-accent tracking-widest">
              {Math.round(Math.min(progress, 100))}%
            </div>
          </div>
        </div>

        {/* Identity */}
        <div className="text-center space-y-1">
          <div className="font-terminal text-xl text-foreground/60 tracking-[0.3em]">
            VENKAT SANHIT SRINIVASULA
          </div>
          <div className="font-mono text-[10px] text-muted-foreground/40 tracking-[0.4em]">
            PRODUCT MANAGER // PM v6.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
