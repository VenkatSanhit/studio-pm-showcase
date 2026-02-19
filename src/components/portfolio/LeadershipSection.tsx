const LEADERSHIP = [
  {
    role: "NGO Leadership",
    org: "Dream Camp Initiative",
    period: "2017 – 2018",
    icon: "◈",
    achievements: [
      "Mentored underprivileged students achieving 100% graduation rate",
      "Raised ₹50,000+ for Dream Camp through community outreach campaigns",
      "Coordinated cross-functional volunteer teams across 3 districts",
    ],
  },
  {
    role: "Vice President",
    org: "Stevens Origins Club",
    period: "2024 – Present",
    icon: "◆",
    achievements: [
      "Increased event attendance by 50% through strategic programming",
      "Improved event satisfaction scores by 35% with structured feedback loops",
      "Built inclusive community for 200+ international students at Stevens",
    ],
  },
];

const INTERESTS = [
  { icon: "⬡", label: "Parkour", sub: "Urban Athletics" },
  { icon: "◉", label: "Wildlife", sub: "Tiger Census & Birdwatching" },
  { icon: "◈", label: "Indic History", sub: "Geopolitics" },
  { icon: "◆", label: "Automobiles", sub: "F1 & Model Collecting" },
];

const LeadershipSection = () => (
  <section id="leadership" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="section-label">// 04</span>
        <div className="flex-1 h-px bg-border" />
        <h2 className="font-terminal text-4xl md:text-5xl text-foreground tracking-wider">LEADERSHIP</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Leadership cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {LEADERSHIP.map((item, i) => (
          <div key={i} className="card-outline p-6 group hover:border-accent/40 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <span className="font-terminal text-3xl text-accent group-hover:glow-text-red transition-all duration-300">
                {item.icon}
              </span>
              <div>
                <h3 className="font-terminal text-xl text-foreground tracking-wide">{item.role}</h3>
                <p className="font-mono text-xs text-accent">{item.org}</p>
                <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {item.achievements.map((ach, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                  <span className="text-accent font-mono shrink-0 mt-0.5">▸</span>
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Interests */}
      <div>
        <div className="section-label mb-6 text-center">INTERESTS & PURSUITS</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-border/30">
          {INTERESTS.map((interest, i) => (
            <div
              key={i}
              className="bg-card/50 p-6 text-center group hover:bg-accent/5 transition-colors duration-300 border-r border-border/30 last:border-r-0"
            >
              <div className="font-terminal text-4xl text-accent mb-3 group-hover:glow-text-red transition-all duration-300">
                {interest.icon}
              </div>
              <div className="font-terminal text-lg text-foreground tracking-wider">{interest.label}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{interest.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LeadershipSection;
