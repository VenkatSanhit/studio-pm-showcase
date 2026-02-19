const EXPERIENCES = [
  {
    role: "Senior Technical Product Manager",
    company: "BulkMagic",
    location: "New York, USA",
    period: "Feb 2024 – Present",
    status: "active",
    description: "Led the end-to-end product lifecycle for a headless, credit-driven social commerce platform empowering group purchasing and referral-based growth for campus vendors.",
    achievements: [
      "Defined product vision & roadmap from <span class='metric-highlight'>0→1</span> for a cloud-based, credit-driven marketplace built on Saleor (GraphQL commerce)",
      "Designed MVPs for credit-engine, referral-system, pricing engine, and transaction workflows using Figma & Miro",
      "Collaborated with architects to design API contracts for pricing, payments, authentication, and order management",
      "Conducted A/B testing on transaction flows validating credit rules, discount logic & post-order financials",
      "Tracked GMV, AOV, conversion behavior, referral activation using analytics to guide product decisions",
    ],
    tags: ["GraphQL", "AWS", "Python", "Agile", "A/B Testing", "Figma"],
  },
  {
    role: "Technical Product Manager",
    company: "First Connect Worldwide",
    location: "New Jersey, USA",
    period: "Aug 2023 – Dec 2024",
    status: "inactive",
    description: "Founding PM for a 3PL logistics platform, transforming manual operations into scalable digital experiences for shippers and carriers.",
    achievements: [
      "Defined MVP scope and OKR-driven roadmap via stakeholder discovery; drove <span class='metric-highlight'>200% traffic growth</span> & <span class='metric-highlight'>60% revenue increase</span>",
      "Launched 'Dedicated Lanes' premium service using dynamic pricing — doubled service-based sales in one year",
      "Led hypothesis-driven experiments across 4 use cases to identify highest-revenue Hero use case",
      "Partnered with design on full UX overhaul — <span class='metric-highlight'>20% booking completion</span> ↑ & <span class='metric-highlight'>30% drop-off</span> ↓",
      "Increased team velocity <span class='metric-highlight'>18%</span> and cut sprint spillovers <span class='metric-highlight'>40%</span>",
    ],
    tags: ["SAFe", "REST APIs", "Power BI", "Figma", "SQL", "Product Analytics"],
  },
  {
    role: "Product Manager",
    company: "WebPipl",
    location: "India",
    period: "Jun 2020 – Dec 2022",
    status: "inactive",
    description: "Managed a suite of AI-enabled talent acquisition products — myATS (ATS), i-Verified (Video Interview), and AI-powered Candidate Sourcing Tool.",
    achievements: [
      "Drove <span class='metric-highlight'>4.5x sales growth</span> Q4'21 to Q4'22; increased user activation rate by <span class='metric-highlight'>66%</span>",
      "Reduced time-to-value from <span class='metric-highlight'>30 days → 12 days</span> through platform optimization",
      "Contributed <span class='metric-highlight'>47.62%</span> of total users/candidates for Q3 & Q4 FY20-21",
      "Optimized NLP-based resume parsing to <span class='metric-highlight'>98% accuracy</span> at &lt;1s latency",
      "Led competitive benchmarking of 500+ products & 1,000+ respondents for GTM; boosted adoption <span class='metric-highlight'>30%</span>",
      "Secured <span class='metric-highlight'>85.71%↓ time-to-market</span> for product onboarding",
    ],
    tags: ["AI/NLP", "Python", "A/B Testing", "Agile", "Figma", "SQL", "Kanban"],
  },
  {
    role: "Product Analyst / Scrum Coordinator",
    company: "Capgemini (Client: MetLife)",
    location: "India",
    period: "Aug 2018 – Mar 2020",
    status: "inactive",
    description: "Managed product lifecycle and Agile coordination for mission-critical insurance and compliance systems, bridging product strategy and system reliability.",
    achievements: [
      "Owned enterprise DB2 infrastructure operations — improved system reliability by <span class='metric-highlight'>30%</span>",
      "Reduced unplanned downtime by <span class='metric-highlight'>40%</span> via A/B testing on monitoring workflows (4 months)",
      "Improved UX <span class='metric-highlight'>20%</span> and operational efficiency <span class='metric-highlight'>35%</span> via wireframes & process maps",
      "Validated data retention, encryption & access controls for sensitive financial data compliance",
    ],
    tags: ["IBM DB2", "Agile-Scrum", "Lucidchart", "JIRA", "Power BI", "SQL"],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-12">
        <span className="section-label">// 02</span>
        <div className="flex-1 h-px bg-border" />
        <h2 className="font-terminal text-4xl md:text-5xl text-foreground tracking-wider">EXPERIENCE</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Timeline */}
      <div className="relative pl-6 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

        <div className="space-y-10">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[25px] md:-left-[41px] top-3 w-3 h-3 border transition-all duration-300 rotate-45 ${
                  exp.status === "active"
                    ? "border-accent bg-accent glow-red"
                    : "border-silver bg-background group-hover:border-accent group-hover:bg-accent/20"
                }`}
              />

              {/* Card */}
              <div className="card-terminal p-5 md:p-6 group-hover:border-accent/30 transition-colors duration-300">
                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {exp.status === "active" && (
                        <span className="status-dot active" />
                      )}
                      <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                        {exp.company} // {exp.location}
                      </span>
                    </div>
                    <h3 className="font-terminal text-xl md:text-2xl text-foreground tracking-wide">
                      {exp.role}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-accent border border-accent/30 px-2 py-1 shrink-0">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-1.5 mb-4">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-foreground/70">
                      <span className="text-accent font-mono mt-0.5 shrink-0">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: ach }} />
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
