import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "EXP", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
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

  return (
    <nav
      className={`fixed top-0.5 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "card-glass border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className="font-terminal text-xl text-foreground tracking-[0.2em] hover:text-accent transition-colors"
        >
          VS<span className="text-accent">_</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.href)}
              className="font-mono text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors relative group"
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
        <div className="md:hidden card-glass border-t border-border px-6 py-4 flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
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
