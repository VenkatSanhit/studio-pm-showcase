import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Senior Technical Product Manager",
    company: "BulkMagic",
    location: "New York, USA",
    period: "Feb 2024 – Present",
    status: "active",
    description: "Led end-to-end product lifecycle for a headless, credit-driven social commerce platform empowering group purchasing and referral-based growth.",
    achievements: [
      "Defined product vision & roadmap from <span class='metric-highlight'>0→1</span> for a cloud-based, credit-driven marketplace built on Saleor (GraphQL commerce)",
      "Designed MVPs for credit-engine, referral-system, pricing engine, and transaction workflows using Figma & Miro",
      "Collaborated with architects to design API contracts for pricing, payments, authentication & order management",
      "Conducted A/B testing on transaction flows validating credit rules, discount logic & post-order financials",
      "Tracked GMV, AOV, conversion behavior, referral activation using analytics to guide product decisions",
    ],
    tags: ["GraphQL", "AWS", "Python", "Agile", "A/B Testing", "Figma"],
    index: "01",
  },
  {
    role: "Technical Product Manager",
    company: "First Connect Worldwide",
    location: "New Jersey, USA",
    period: "Aug 2023 – Dec 2024",
    status: "inactive",
    description: "Founding PM for a 3PL logistics platform, transforming manual operations into scalable digital experiences for shippers and carriers.",
    achievements: [
      "Defined MVP scope and OKR-driven roadmap; drove <span class='metric-highlight'>200% traffic growth</span> & <span class='metric-highlight'>60% revenue increase</span>",
      "Launched 'Dedicated Lanes' premium service using dynamic pricing — doubled service-based sales in one year",
      "Led hypothesis-driven experiments across 4 use cases to identify highest-revenue Hero use case",
      "Partnered with design on full UX overhaul — <span class='metric-highlight'>20% booking completion</span> ↑ & <span class='metric-highlight'>30% drop-off</span> ↓",
      "Increased team velocity <span class='metric-highlight'>18%</span> and cut sprint spillovers <span class='metric-highlight'>40%</span>",
    ],
    tags: ["SAFe", "REST APIs", "Power BI", "Figma", "SQL", "Product Analytics"],
    index: "02",
  },
  {
    role: "Product Manager",
    company: "WebPipl",
    location: "India",
    period: "Jun 2020 – Dec 2022",
    status: "inactive",
    description: "Managed a suite of AI-enabled talent acquisition products — myATS, i-Verified (Video Interview), and AI-powered Candidate Sourcing Tool.",
    achievements: [
      "Drove <span class='metric-highlight'>4.5x sales growth</span> Q4'21 to Q4'22; increased user activation rate by <span class='metric-highlight'>66%</span>",
      "Reduced time-to-value from <span class='metric-highlight'>30 days → 12 days</span> through platform optimization",
      "Contributed <span class='metric-highlight'>47.62%</span> of total users/candidates for Q3 & Q4 FY20-21",
      "Optimized NLP-based resume parsing to <span class='metric-highlight'>98% accuracy</span> at &lt;1s latency",
      "Led competitive benchmarking of 500+ products & 1,000+ respondents for GTM; boosted adoption <span class='metric-highlight'>30%</span>",
    ],
    tags: ["AI/NLP", "Python", "A/B Testing", "Agile", "Figma", "SQL", "Kanban"],
    index: "03",
  },
  {
    role: "Product Analyst / Scrum Coordinator",
    company: "Capgemini (Client: MetLife)",
    location: "India",
    period: "Aug 2018 – Mar 2020",
    status: "inactive",
    description: "Managed product lifecycle and Agile coordination for mission-critical insurance and compliance systems.",
    achievements: [
      "Owned enterprise DB2 infrastructure operations — improved system reliability by <span class='metric-highlight'>30%</span>",
      "Reduced unplanned downtime by <span class='metric-highlight'>40%</span> via A/B testing on monitoring workflows",
      "Improved UX <span class='metric-highlight'>20%</span> and operational efficiency <span class='metric-highlight'>35%</span> via wireframes & process maps",
      "Validated data retention, encryption & access controls for sensitive financial data compliance",
    ],
    tags: ["IBM DB2", "Agile-Scrum", "Lucidchart", "JIRA", "Power BI", "SQL"],
    index: "04",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 grid-lines opacity-10" />
    <div
      className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none opacity-[0.04]"
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
        <span className="section-label">// 02</span>
        <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        <h2 className="font-terminal text-5xl md:text-6xl text-foreground tracking-wider">EXPERIENCE</h2>
        <div className="flex-1 h-px bg-gradient-to-l from-border to-transparent" />
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-14">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/20 to-transparent" />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: "easeOut" }}
              className="relative group"
            >
              {/* Timeline node */}
              <div className="absolute -left-[33px] md:-left-[57px] top-4 flex flex-col items-center gap-1">
                <div
                  className={`w-3.5 h-3.5 border rotate-45 transition-all duration-300 ${
                    exp.status === "active"
                      ? "border-accent bg-accent"
                      : "border-silver/40 bg-background group-hover:border-accent group-hover:bg-accent/20"
                  }`}
                  style={exp.status === "active" ? { boxShadow: "0 0 12px hsl(4 100% 59% / 0.8)" } : {}}
                />
              </div>

              {/* Card */}
              <div
                className="relative overflow-hidden border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-400 group-hover:border-accent/25"
                style={{ background: "linear-gradient(135deg, hsl(0 0% 7% / 0.8) 0%, hsl(0 0% 5% / 0.6) 100%)" }}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-500" />

                {/* Index number background */}
                <div
                  className="absolute right-6 top-4 font-terminal text-7xl text-border/30 pointer-events-none select-none leading-none"
                  style={{ lineHeight: 1 }}
                >
                  {exp.index}
                </div>

                {/* Card header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {exp.status === "active" && <span className="status-dot active" />}
                      <span className="font-mono text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
                        {exp.company} // {exp.location}
                      </span>
                    </div>
                    <h3 className="font-terminal text-2xl md:text-3xl text-foreground tracking-wide group-hover:text-accent/90 transition-colors duration-300">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className="font-mono text-xs text-accent border border-accent/30 px-3 py-1"
                      style={{ background: "hsl(4 100% 59% / 0.05)" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed relative z-10 max-w-2xl">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2.5 mb-5 relative z-10">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs text-foreground/70">
                      <span className="text-accent font-mono mt-0.5 shrink-0 text-xs">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: ach }} />
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="skill-tag group-hover:border-accent/20 transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
