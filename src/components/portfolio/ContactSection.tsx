import { useState } from "react";

const CONTACT_LINKS = [
  {
    label: "EMAIL",
    value: "sanhit567@gmail.com",
    href: "mailto:sanhit567@gmail.com",
    prefix: "$ mail",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/sanhit",
    href: "https://linkedin.com/in/sanhit",
    prefix: "$ open",
  },
  {
    label: "GITHUB",
    value: "github.com/sanhit",
    href: "https://github.com/sanhit",
    prefix: "$ git",
  },
];

const ContactSection = () => {
  const [input, setInput] = useState("");
  const [lines, setLines] = useState<string[]>([
    "SYSTEM READY. TYPE A MESSAGE OR PRESS ENTER.",
  ]);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (input.trim()) {
        setLines((l) => [
          ...l,
          `> ${input}`,
          "MSG RECEIVED. I'LL GET BACK TO YOU SOON.",
        ]);
      }
      setInput("");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-label">// 05</span>
          <div className="flex-1 h-px bg-border" />
          <h2 className="font-terminal text-4xl md:text-5xl text-foreground tracking-wider">CONTACT</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact links */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Open to <span className="text-foreground">PM roles</span>,{" "}
              <span className="text-foreground">advisory opportunities</span>, and{" "}
              <span className="text-foreground">product conversations</span>.
              Let's build something meaningful.
            </p>

            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-outline flex items-center gap-4 p-4 group no-underline"
              >
                <div className="w-1 h-8 bg-border group-hover:bg-accent transition-colors duration-300" />
                <div className="flex-1">
                  <div className="font-mono text-xs text-muted-foreground tracking-widest mb-0.5">
                    {link.prefix}
                  </div>
                  <div className="font-mono text-sm text-foreground group-hover:text-accent transition-colors duration-300">
                    {link.value}
                  </div>
                </div>
                <span className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </a>
            ))}
          </div>

          {/* Right: Terminal input */}
          <div className="card-terminal p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <div className="w-2 h-2 rounded-full bg-silver" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
              <span className="font-mono text-xs text-muted-foreground ml-2">message.terminal</span>
            </div>

            {/* Terminal output */}
            <div className="h-36 overflow-y-auto mb-3 space-y-1">
              {lines.map((line, i) => (
                <div key={i} className={`font-mono text-xs ${line.startsWith(">") ? "text-accent" : "text-muted-foreground"}`}>
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal input */}
            <div className="flex items-center gap-2 border-t border-border pt-3">
              <span className="font-mono text-xs text-accent">{">"}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="type your message..."
                className="flex-1 bg-transparent font-mono text-xs text-foreground outline-none placeholder:text-muted-foreground/40"
              />
              <span className="cursor-blink" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground/50 tracking-widest">
            © 2025 VENKAT SANHIT SRINIVASULA
          </span>
          <span className="font-mono text-xs text-muted-foreground/50 tracking-widest">
            BUILT WITH PRECISION // PM v6.0
          </span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
