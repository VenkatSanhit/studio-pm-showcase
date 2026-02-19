import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
      style={{
        transition: "opacity 0.5s ease",
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? "none" : "all",
      }}
    >
      <div className="dot-grid absolute inset-0 opacity-30" />
      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="font-terminal text-6xl text-foreground glow-text-red tracking-widest">
          SYS://INIT
        </div>
        <div className="w-64 h-px bg-border relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-accent transition-all duration-100"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="font-mono text-xs text-muted-foreground tracking-widest">
          {`LOADING_PORTFOLIO... ${Math.min(Math.round(progress), 100)}%`}
        </div>
        <div className="font-mono text-xs text-muted-foreground/50 tracking-wider">
          VENKAT SANHIT SRINIVASULA // PM v6.0
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
