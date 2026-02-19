const SKILLS = [
  "Product Roadmap Planning", "PRD & User Story Creation", "MVP Design", "OKRs/KPIs",
  "Go-to-Market Strategy", "RICE / MoSCoW / Kano", "Agile / SAFe / Scrum",
  "A/B Testing", "Feature Telemetry", "Figma & Miro", "SQL & Python",
  "Power BI & Tableau", "REST & GraphQL APIs", "AI Product Strategy",
  "LLM Integration", "Prompt Engineering", "Cross-functional Leadership",
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="absolute inset-0 dot-grid-subtle opacity-20" />
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="section-label">// 01</span>
        <div className="flex-1 h-px bg-border" />
        <h2 className="font-terminal text-4xl md:text-5xl text-foreground tracking-wider">ABOUT</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Terminal card */}
        <div className="card-terminal p-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-2 h-2 rounded-full bg-silver" />
            <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            <span className="font-mono text-xs text-muted-foreground ml-2 tracking-wider">profile.json</span>
          </div>
          <div className="font-mono text-xs space-y-2 text-foreground/80">
            <div><span className="text-accent">"name"</span><span className="text-muted-foreground">: </span><span className="text-silver">"Venkat Sanhit Srinivasula"</span></div>
            <div><span className="text-accent">"role"</span><span className="text-muted-foreground">: </span><span className="text-silver">"Senior Product Manager"</span></div>
            <div><span className="text-accent">"location"</span><span className="text-muted-foreground">: </span><span className="text-silver">"New York, USA"</span></div>
            <div><span className="text-accent">"experience"</span><span className="text-muted-foreground">: </span><span className="text-foreground">"6+ years"</span></div>
            <div><span className="text-accent">"education"</span><span className="text-muted-foreground">: [</span></div>
            <div className="ml-4"><span className="text-silver">"M.S. MIS — Stevens Institute of Technology"</span><span className="text-muted-foreground">,</span></div>
            <div className="ml-4"><span className="text-silver">"B.Tech CS — JNTUH India"</span></div>
            <div><span className="text-muted-foreground">]</span></div>
            <div><span className="text-accent">"certifications"</span><span className="text-muted-foreground">: [</span></div>
            <div className="ml-4"><span className="text-silver">"CSPO"</span><span className="text-muted-foreground">,</span></div>
            <div className="ml-4"><span className="text-silver">"AI Certified Scrum PO"</span><span className="text-muted-foreground">,</span></div>
            <div className="ml-4"><span className="text-silver">"Databricks Spark 3.0"</span></div>
            <div><span className="text-muted-foreground">]</span></div>
            <div><span className="text-accent">"email"</span><span className="text-muted-foreground">: </span><span className="text-accent underline">"sanhit567@gmail.com"</span></div>
          </div>
        </div>

        {/* Right: Bio + skills */}
        <div className="space-y-6">
          <div className="card-outline p-6">
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Product Manager with <span className="text-foreground font-medium">6+ years</span> building SaaS solutions
              across logistics, talent acquisition, and e-commerce. Proven expertise in{" "}
              <span className="text-accent font-mono">0→1</span> and{" "}
              <span className="text-accent font-mono">1→N</span> product initiatives, from concept through scaled deployment.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Specializing in <span className="text-foreground">AI-driven platforms</span>,{" "}
              <span className="text-foreground">data analytics</span>, and{" "}
              <span className="text-foreground">cross-functional leadership</span> — turning market insights into
              modular, API-first products that drive measurable business outcomes.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Proficient in Agile (Scrum, SAFe, Kanban) with a strong command of product telemetry,
              experimentation design, and stakeholder alignment across engineering, design, and business.
            </p>
          </div>

          {/* Skills */}
          <div>
            <p className="section-label mb-3">CORE SKILLS</p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
