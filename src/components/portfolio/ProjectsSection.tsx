import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "01",
    name: "The Emotiles Revolution",
    tagline: "Advanced AI subtitle enhancement for global cinema accessibility",
    description:
      "Emotiles detects emotion, tone, and dialogue nuance in real-time to transform how subtitles engage global cinema audiences. A 0→1 AI product bridging NLP research with seamless UX — making international content emotionally resonant and accessible.",
    features: [
      "Real-time emotion detection from dialogue audio/text",
      "Tone-aware subtitle rendering with visual cues",
      "Multi-language dialogue nuance preservation",
      "Accessibility-first design for global cinema",
    ],
    tags: ["AI", "NLP", "Product Strategy", "UX Innovation", "0→1"],
    status: "LIVE",
    accentColor: "hsl(4 100% 59%)",
    archType: "NLP PIPELINE → EMOTION CLASSIFIER → SUBTITLE RENDERER",
  },
  {
    id: "02",
    name: "FAANG Jobs Portal",
    tagline: "Real-time job aggregation platform for top-tier tech companies",
    description:
      "Born from the frustration of hunting across 20+ portals. Aggregates live job listings from FAANG and top tech companies, updating within seconds. Clean filtering, zero noise — just the signal that matters for senior IC and PM roles.",
    features: [
      "Real-time job scraping from FAANG + 50+ top tech companies",
      "Sub-second listing updates via event-driven architecture",
      "Smart filtering by role, level, location & stack",
      "Roadmap: AI-powered match scoring & alert system",
    ],
    tags: ["Real-time", "API Integration", "Product Engineering", "Pet Project"],
    status: "IN DEV",
    accentColor: "hsl(0 0% 70%)",
    archType: "SCRAPERS → EVENT BUS → AGGREGATOR → SEARCH API → UI",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 dot-grid opacity-15" />
    <div
      className="absolute right-0 bottom-0 w-96 h-96 pointer-events-none opacity-[0.05]"
      style={{ background: "radial-gradient(circle, hsl(4 100% 59%), transparent 70%)" }}
    />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="section-label">// 03</span>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <h2 className="font-terminal text-5xl md:text-6xl text-foreground tracking-wider">PROJECTS</h2>
        <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: i * 0.15 }}
            className="relative group"
          >
            <div
              className="relative border border-border/60 overflow-hidden flex flex-col h-full transition-all duration-500 group-hover:border-accent/30"
              style={{
                background: "linear-gradient(145deg, hsl(0 0% 8% / 0.9) 0%, hsl(0 0% 5% / 0.7) 100%)",
              }}
            >
              {/* Top colored line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                  opacity: 0.4,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                }}
              />

              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${project.accentColor}08, transparent)` }}
              />

              <div className="relative p-8 flex flex-col h-full">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-terminal text-6xl leading-none transition-all duration-300"
                    style={{ color: `${project.accentColor}18`, lineHeight: 0.9 }}
                  >
                    {project.id}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.status === "LIVE" && (
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ background: project.accentColor, boxShadow: `0 0 6px ${project.accentColor}` }}
                      />
                    )}
                    <span
                      className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 border"
                      style={{
                        borderColor: `${project.accentColor}50`,
                        color: project.accentColor,
                        background: `${project.accentColor}08`,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-terminal text-2xl md:text-3xl tracking-wide mb-2 transition-all duration-300"
                  style={{ color: "hsl(var(--foreground))" }}
                >
                  {project.name}
                </h3>
                <p className="font-mono text-xs mb-4" style={{ color: project.accentColor }}>
                  {project.tagline}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-foreground/65">
                      <span className="font-mono shrink-0 mt-0.5" style={{ color: project.accentColor }}>▸</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Architecture diagram */}
                <div
                  className="border border-dashed p-4 mb-5 relative overflow-hidden"
                  style={{ borderColor: `${project.accentColor}20` }}
                >
                  <div className="font-mono text-[10px] text-muted-foreground/30 tracking-[0.2em] mb-2 text-center">
                    ARCHITECTURE
                  </div>
                  <div className="font-mono text-[10px] text-center leading-relaxed" style={{ color: `${project.accentColor}50` }}>
                    {project.archType}
                  </div>
                  {/* Animated scan line */}
                  <div
                    className="absolute left-0 right-0 h-px opacity-20 animate-scan-line"
                    style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
                  />
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 border border-border/60 text-muted-foreground transition-all duration-300 group-hover:border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
