import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Star, TrendingUp, Users, Zap } from "lucide-react";

interface Project {
  title: string;
  company: string;
  period: string;
  role: string;
  tagline: string;
  boxOffice: string[];
  rating: number;
  reviews: string[];
  highlights: string[];
  fullDescription?: string;
}

const projects: Project[] = [
  {
    title: "The Enterprise Accelerator",
    company: "Bulkmagic",
    period: "Feb 2025 - Current",
    role: "Product Manager",
    tagline: "Fast-tracking enterprise onboarding and deployment",
    boxOffice: [
      "220+ enterprise users onboarded",
      "22% increase in sprint velocity",
      "15% improvement in customer acquisition"
    ],
    rating: 4.9,
    reviews: [
      "Streamlined deployment cycles by 2 weeks",
      "Exceptional GTM strategy execution"
    ],
    highlights: ["Agile Excellence", "GTM Strategy", "Dashboard Automation"],
    fullDescription: `Led comprehensive product management initiatives at Bulkmagic, managing complex go-live release schedules and coordinating with engineering, QA, and operations teams.

Key Achievements:
• Spearheaded Agile and Scrum ceremonies including sprint planning, backlog grooming, and roadmap prioritization using JIRA and Confluence
• Resulted in a 22% increase in sprint velocity and delivery of 30+ prioritized backlog items within targeted timelines
• Conducted extensive market research, competitor benchmarking, and customer journey analysis
• Created Go-To-Market (GTM) strategies that drove a 15% improvement in customer acquisition rates
• Developed and automated dashboards in Power BI using DAX queries and advanced Excel
• Enabled executives to monitor KPIs across 7 business units while reducing manual reporting time from 3 days to 16 hours per cycle
• Created wireframes, prototypes, and user flows using Balsamiq and Miro
• Streamlined design collaboration across 5 product teams, cutting UI/UX validation cycles by 35%
• Built quarterly product roadmaps incorporating AI and ML features including predictive maintenance and personalized recommendations
• Led the development and GTM launch of an e-commerce MVP platform with referral-based incentive models
• Successfully onboarded 600+ users in the first 3 months
• Collaborated with technical architects to define API and telemetry integration requirements
• Enabled scalability to handle 100k daily transactions while reducing latency issues by 30%`
  },
  {
    title: "The Logistics Transformer",
    company: "Firstconnect World Wide",
    period: "Feb 2024 - Feb 2025",
    role: "Product Manager",
    tagline: "Revolutionizing freight operations end-to-end",
    boxOffice: [
      "30% reduction in manual processing",
      "25% boost in satisfaction scores",
      "20% improved booking completion"
    ],
    rating: 4.8,
    reviews: [
      "Game-changing UI/UX transformation",
      "Data-driven monetization strategy"
    ],
    highlights: ["Full Lifecycle Ownership", "A/B Testing", "UX Leadership"],
    fullDescription: `Defined and executed product roadmaps and sprint backlogs in JIRA/Confluence at Firstconnect World Wide, aligning engineering, operations, and logistics stakeholders.

Key Achievements:
• Accelerated MVP delivery by 3 sprints and improved cross-functional visibility across 4 core freight workflows
• Owned the end-to-end lifecycle of a digital logistics platform serving both shippers and carriers
• Streamlined freight posting, carrier matching, booking, and payments processes
• Reduced manual processing time by 30% and improved shipper/carrier satisfaction scores by 25%
• Conducted in-depth user research, competitive benchmarking, and customer journey mapping to shape MVP scope
• Translated findings into 30+ user stories and epics with detailed acceptance criteria
• Partnered with design to lead a full UI/UX revamp
• Created high-fidelity Figma prototypes for shipper dashboards, carrier profiles, and booking flows
• Usability testing with 40+ pilot users reduced design-to-dev rework by 30%
• Boosted booking flow completion rates by 20%
• Led monetization experiments including Dedicated Lanes, dynamic pricing tiers, and fast-pay programs
• Ran A/B tests via Firebase Remote Config with performance tracked in Tableau/SQL
• Identified the highest-ROI use case that informed long-term revenue strategy
• Facilitated Agile ceremonies across engineering, ops, and QA
• Increased sprint velocity by 18% and ensured timely delivery of all high-priority backlog items
• Built interactive Tableau dashboards integrating freight, finance, and carrier data
• Enabled leadership to monitor 10+ KPIs including booking efficiency, lane profitability, and adoption metrics`
  },
  {
    title: "The Growth Engine",
    company: "Webpipl",
    period: "Jun 2020 - Dec 2022",
    role: "Associate Product Manager",
    tagline: "Driving 30% adoption uplift through strategic insights",
    boxOffice: [
      "48% of all new users in H2 FY20-21",
      "30% adoption increase within 90 days",
      "20% sprint velocity improvement"
    ],
    rating: 4.7,
    reviews: [
      "Outstanding market research and execution",
      "Exceptional stakeholder alignment"
    ],
    highlights: ["Market Research", "GTM Launch", "Conversion Optimization"],
    fullDescription: `Drove ownership of the end-to-end product roadmap at Webpipl, aligning priorities with customer needs, competitor benchmarks, and market strategy.

Key Achievements:
• Collaborated with engineering and stakeholders to define product increments
• Leveraged Scrum metrics to improve team velocity by 20% and reduce release bottlenecks
• Conducted large-scale user and market research analyzing 500+ competitor products
• Surveys from 1,000+ respondents uncovered high-value GTM opportunities
• Insights drove product-market fit, resulting in a measurable 30% uplift in adoption within 90 days of release
• Led cross-functional squads through the complete product lifecycle
• Managed backlog refinement, sprint planning, and release prioritization while ensuring stakeholder alignment
• Streamlined Agile processes that improved release predictability
• Defined pricing models and user acquisition strategies
• Collaborated with sales and marketing to refine onboarding flows and outreach campaigns
• Efforts contributed to 48% of all new users in H2 FY20-21
• Significantly improved revenue pipeline and retention
• Standardized testing frameworks for UAT and SIT across four modules
• Reduced post-release defects and increased customer confidence in stability
• Improved weekly conversions by 20% through enhanced product demos and targeted growth initiatives
• Reduced average time-to-value for clients from 30 days to 12 days
• Accelerated ROI for enterprise customers
• Directed high-impact GTM launches for SaaS products
• Partnered with marketing, sales, and leadership to define product vision, refine positioning, and optimize pricing
• Orchestrated multi-channel campaigns leading to 35% faster market penetration`
  },
  {
    title: "Enterprise DB2 Infrastructure",
    company: "Capgemini",
    period: "Aug 2018 - Mar 2020",
    role: "Product Analyst",
    tagline: "Modernizing enterprise infrastructure with cloud migration",
    boxOffice: [
      "30% improvement in system reliability",
      "20% increase in customer retention",
      "40% reduction in unplanned downtime"
    ],
    rating: 4.6,
    reviews: [
      "Exemplary infrastructure modernization",
      "Data-driven process optimization"
    ],
    highlights: ["Cloud Migration", "Process Automation", "Performance Optimization"],
    fullDescription: `Managed the end-to-end product lifecycle for enterprise DB2 infrastructure operations at Capgemini, driving significant improvements in system reliability and operational efficiency.

Key Achievements:
• Drove legacy-to-cloud migration resolving critical gaps in backup consistency, patching, and HADR configurations
• Improved system reliability by 30% and ensured long-term scalability
• Performed detailed product analytics and competitive research to identify process inefficiencies
• Benchmarked database performance resulting in optimized query execution and workflows
• Improved customer retention by 20% and reduced SLA breaches
• Standardized operating procedures and documentation frameworks across database teams
• Improved knowledge-sharing and adoption across teams
• The initiative reduced escalation tickets by 18% and cut handover time during incident management
• Led A/B testing and data-driven experiments on monitoring workflows
• Measured adoption patterns and system responsiveness
• Drove a 20% uplift in user experience and reduced unplanned downtime by 40% in four months
• Collaborated with business stakeholders and engineering leads to define product strategies
• Refined backlog priorities and translated customer pain points into functional requirements
• Ensured timely delivery of database upgrades, compliance patches, and DR test cycles
• Facilitated 7+ Joint Application Development (JAD) workshops with cross-functional stakeholders
• Aligned technical design with business goals documented in JIRA
• Directly influenced sprint planning and execution efficiency
• Created wireframes, workflows, and process maps using Lucid Charts and MS Visio
• Enabled visualization of end-to-end data flows
• Improved operational efficiency by 35% through streamlined coordination between product and engineering teams`
  }
];

const FeatureFilms = () => {
  return (
    <section id="feature-films" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Feature Films
          </h2>
          <p className="text-xl text-muted-foreground">Major Product Releases & Impact</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,20,60,0.3)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Movie Poster Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-secondary font-semibold text-lg mb-1">
                        {project.company}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {project.period} • {project.role}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary/20 px-3 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="text-secondary font-bold">{project.rating}</span>
                    </div>
                  </div>
                  <p className="text-base italic text-muted-foreground border-l-4 border-primary pl-4">
                    "{project.tagline}"
                  </p>
                </div>

                {/* Box Office Results */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    <h4 className="font-semibold text-foreground">Box Office Results</h4>
                  </div>
                  <ul className="space-y-2">
                    {project.boxOffice.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Critics' Reviews */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground">Critics' Reviews</h4>
                  </div>
                  <div className="space-y-2">
                    {project.reviews.map((review, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground italic pl-4 border-l-2 border-muted">
                        "{review}"
                      </p>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className="border-secondary/50 text-secondary bg-secondary/10 hover:bg-secondary/20"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                {/* Full Description Button */}
                {project.fullDescription && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_rgba(220,20,60,0.5)] transition-all duration-300">
                        View Full Work Description
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card border-primary/30">
                      <DialogHeader>
                        <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="prose prose-sm max-w-none text-muted-foreground whitespace-pre-line mt-4">
                        {project.fullDescription}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-gradient-to-br from-card/80 via-primary/5 to-accent/5 backdrop-blur border-primary/30 shadow-[0_0_60px_rgba(220,20,60,0.2)]">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Ready for Your Next <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Hit Product?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's collaborate to turn your product vision into a market-leading reality
            </p>
            <Button 
              size="lg"
              asChild
              className="bg-gradient-to-r from-secondary to-accent text-background hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all duration-300 text-lg px-8"
            >
              <a href="#contact">Schedule a Strategy Session</a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeatureFilms;
