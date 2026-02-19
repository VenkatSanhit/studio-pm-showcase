interface PageTransitionProps {
  onClick: () => void;
  label: string;
  direction: "next" | "prev";
}

const PageTransition = ({ onClick, label, direction }: PageTransitionProps) => (
  <div className="relative py-16 flex items-center justify-center overflow-hidden">
    {/* Decorative lines */}
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>

    <button
      onClick={onClick}
      className="relative z-10 group flex items-center gap-4 px-8 py-4 border border-border/50 bg-background/80 backdrop-blur-sm hover:border-accent/60 transition-all duration-500 hover:shadow-[0_0_30px_hsl(4_100%_59%/0.15)]"
    >
      {direction === "prev" && (
        <span className="font-mono text-accent text-sm group-hover:-translate-x-1 transition-transform duration-300">←</span>
      )}
      <div className="flex flex-col items-center">
        <span className="font-mono text-[10px] text-muted-foreground tracking-[0.4em] uppercase mb-1">
          {direction === "next" ? "CONTINUE TO" : "BACK TO"}
        </span>
        <span className="font-terminal text-xl text-foreground tracking-widest group-hover:text-accent transition-colors duration-300">
          {label}
        </span>
      </div>
      {direction === "next" && (
        <span className="font-mono text-accent text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
      )}

      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent/0 group-hover:border-accent/80 transition-colors duration-500" />
      <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent/0 group-hover:border-accent/80 transition-colors duration-500" />
      <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent/0 group-hover:border-accent/80 transition-colors duration-500" />
      <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent/0 group-hover:border-accent/80 transition-colors duration-500" />
    </button>
  </div>
);

export default PageTransition;
