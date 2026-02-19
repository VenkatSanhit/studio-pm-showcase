const PROJECTS = [
  {
    id: "01",
    name: "The Emotiles Revolution",
    tagline: "Advanced AI subtitle enhancement platform for global cinema accessibility",
    description:
      "Emotiles detects emotion, tone, and dialogue nuance in real-time to transform how subtitles engage global cinema audiences. Built from the ground up as a 0→1 AI product that bridges NLP research with seamless UX — making international content more emotionally resonant and accessible.",
    features: [
      "Real-time emotion detection from dialogue audio/text",
      "Tone-aware subtitle rendering with visual cues",
      "Multi-language dialogue nuance preservation",
      "Accessibility-first design for global cinema",
    ],
    tags: ["AI", "NLP", "Product Strategy", "UX Innovation", "0→1"],
    status: "LIVE",
    gradient: "from-accent/10 to-transparent",
  },
  {
    id: "02",
    name: "FAANG Jobs Portal",
    tagline: "Real-time job aggregation platform for top-tier tech companies",
    description:
      "A pet project born from the frustration of hunting across 20+ portals. Aggregates live job listings from FAANG and top tech companies, updating within seconds. Clean filtering, zero noise — just the signal that matters for senior IC and PM roles.",
    features: [
      "Real-time job scraping from FAANG + 50+ top tech cos",
      "Sub-second listing updates via event-driven architecture",
      "Smart filtering by role, level, location & stack",
      "Roadmap: AI-powered match scoring & alert system",
    ],
    tags: ["Real-time", "API Integration", "Product Engineering", "Pet Project"],
    status: "IN DEV",
    gradient: "from-silver/5 to-transparent",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="absolute inset-0 dot-grid opacity-20" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="section-label">// 03</span>
        <div className="flex-1 h-px bg-border" />
        <h2 className="font-terminal text-4xl md:text-5xl text-foreground tracking-wider">PROJECTS</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div key={project.id} className="card-terminal group hover:border-accent/30 transition-all duration-300 overflow-hidden">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative p-6 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-terminal text-5xl text-border group-hover:text-accent/20 transition-colors duration-300">
                  {project.id}
                </span>
                <span className={`font-mono text-xs px-2 py-1 border ${
                  project.status === "LIVE"
                    ? "border-accent text-accent"
                    : "border-silver/50 text-silver"
                }`}>
                  {project.status === "LIVE" && <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse" />}
                  {project.status}
                </span>
              </div>

              <h3 className="font-terminal text-2xl md:text-3xl text-foreground tracking-wide mb-2 group-hover:text-accent transition-colors duration-300">
                {project.name}
              </h3>
              <p className="font-mono text-xs text-accent mb-4">{project.tagline}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">{project.description}</p>

              {/* Features */}
              <ul className="space-y-1.5 mb-5 flex-1">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-foreground/60">
                    <span className="text-accent font-mono shrink-0">▸</span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Architecture placeholder */}
              <div className="border border-dashed border-border/50 p-3 mb-4 text-center">
                <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">
                  [ ARCHITECTURE DIAGRAM ]
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag group-hover:border-accent/30 transition-colors duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
