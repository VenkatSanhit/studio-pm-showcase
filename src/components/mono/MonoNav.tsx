import React from "react";
import { Link } from "react-router-dom";

const MonoNav: React.FC = () => {
  const linkClass = "relative inline-block px-3 py-2 text-sm font-medium text-foreground";

  return (
    <nav className="w-full border-b border-border bg-background/0">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-sans tracking-tight">Venkat</Link>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/#work" className={`${linkClass} hover:text-foreground`}>
              <span className="underline-animation">Work</span>
            </Link>
            <Link to="/#case-studies" className={`${linkClass} hover:text-foreground`}>
              <span className="underline-animation">Case Studies</span>
            </Link>
            <Link to="/demo" className={`${linkClass} hover:text-foreground`}>Demo</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-xs font-mono text-muted-foreground hidden sm:block">Product · Strategy</div>
          <div className="w-8 h-8 rounded-none border border-border flex items-center justify-center">
            <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--accent))" }} />
          </div>
        </div>
      </div>

      <style>{`
        .underline-animation {
          position: relative;
        }
        .underline-animation::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          height: 2px;
          width: 0;
          background: hsl(var(--accent));
          transition: width 180ms ease-in-out;
        }
        .underline-animation:hover::after { width: 100%; }
      `}</style>
    </nav>
  );
};

export default MonoNav;
