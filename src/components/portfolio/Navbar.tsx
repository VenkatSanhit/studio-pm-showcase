import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  currentPage: number;
  navigateTo: (page: number) => void;
}

const PAGE_0_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
];

const PAGE_1_ITEMS = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "LEADERSHIP", href: "#leadership" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = ({ currentPage, navigateTo }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = currentPage === 0 ? PAGE_0_ITEMS : PAGE_1_ITEMS;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => navigateTo(0)}
          className="font-terminal text-xl text-foreground tracking-[0.2em] hover:text-accent transition-colors duration-300 group"
        >
          VS<span className="text-accent group-hover:opacity-70 transition-opacity">_</span>
        </button>

        {/* Page toggle pills */}
        <div className="hidden md:flex items-center gap-1 border border-border/50 p-0.5 bg-card/30 backdrop-blur-sm">
          {[
            { label: "PAGE I", page: 0 },
            { label: "PAGE II", page: 1 },
          ].map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigateTo(page)}
              className={`font-mono text-[10px] tracking-[0.25em] px-3 py-1 transition-all duration-300 ${
                currentPage === page
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop Nav items */}
        <div className="hidden md:flex items-center gap-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            href="mailto:sanhit567@gmail.com"
            className="btn-retro-primary text-xs py-1.5 px-4"
          >
            HIRE ME
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 flex flex-col gap-3">
          <div className="flex gap-2 mb-2">
            {[{ label: "PAGE I", page: 0 }, { label: "PAGE II", page: 1 }].map(({ label, page }) => (
              <button
                key={page}
                onClick={() => { navigateTo(page); setMenuOpen(false); }}
                className={`font-mono text-xs tracking-widest px-3 py-1 border transition-all duration-200 ${
                  currentPage === page ? "border-accent text-accent bg-accent/10" : "border-border text-muted-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="font-mono text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground text-left py-1 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
