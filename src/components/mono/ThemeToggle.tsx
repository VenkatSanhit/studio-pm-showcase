import React, { useEffect, useState } from "react";
import { getInitialTheme, applyTheme, Theme } from "@/lib/theme";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "cinema" ? "mono" : "cinema"));

  return (
    <div className="flex items-center gap-4">
      <div className="text-sm text-muted-foreground">Theme</div>
      <button
        aria-pressed={theme === "mono"}
        onClick={toggle}
        className="relative inline-flex items-center justify-between w-20 h-8 mono-btn bg-transparent px-1 py-0 border-border text-foreground"
      >
        {/* Indicator */}
        <span
          className={`absolute top-0 bottom-0 my-auto w-7 h-6 transition-transform duration-200 ease-in-out bg-foreground`} 
          style={{ transform: theme === "mono" ? "translateX(52%)" : "translateX(-4%)" }}
          aria-hidden
        />

        <span className="relative z-10 w-full px-1 flex items-center justify-between text-xs font-mono">
          <span className={`ml-1 ${theme === "cinema" ? "text-foreground" : "text-muted-foreground"}`}>CIN</span>
          <span className={`mr-1 ${theme === "mono" ? "text-foreground" : "text-muted-foreground"}`}>MONO</span>
        </span>
      </button>
    </div>
  );
};

export default ThemeToggle;
