import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Code, Database, TrendingUp } from "lucide-react";

const skills = [
  {
    category: "Product Strategy & Execution",
    icon: Briefcase,
    skills: [
      "Roadmapping",
      "Product Requirements (PRDs)",
      "Agile & Scrum",
      "User Story Mapping",
      "Sprint Planning",
      "Go-to-Market Strategy",
      "Cross-functional Collaboration",
      "Stakeholder Communication"
    ]
  },
  {
    category: "Product Analytics & Experimentation",
    icon: TrendingUp,
    skills: [
      "SQL",
      "Python (Pandas, NumPy)",
      "R",
      "A/B Testing",
      "Funnel Analysis",
      "Retention & Churn Metrics",
      "Feature Adoption",
      "Cohort Analysis",
      "KPI Tracking"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Code,
    skills: [
      "JIRA",
      "Confluence",
      "Productboard",
      "Tableau",
      "Power BI",
      "Amplitude",
      "Mixpanel",
      "Google Analytics",
      "Figma",
      "Miro"
    ]
  },
  {
    category: "Data & Statistical Methods",
    icon: Database,
    skills: [
      "Hypothesis Testing",
      "Regression Analysis",
      "Statistical Significance",
      "SQL Window Functions",
      "Time Series Analysis",
      "Data Visualization",
      "Dashboarding"
    ]
  }
];

const BehindTheScenes = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Behind the Scenes
          </h2>
          <p className="text-xl text-muted-foreground">The Director's Toolkit & Methodologies</p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Director's Commentary */}
        <Card className="mb-12 p-8 bg-card/80 backdrop-blur border-accent/30 hover:border-accent/60 transition-all duration-300 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0">
              <Code className="w-6 h-6 text-background" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Director's Commentary</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My approach to product management combines rigorous data analysis with user empathy. 
                I believe in the power of <span className="text-accent font-semibold">OKRs</span> to align teams, 
                <span className="text-accent font-semibold"> A/B testing</span> to validate hypotheses, 
                and <span className="text-accent font-semibold"> Agile methodologies</span> to deliver value iteratively.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From <span className="text-primary font-semibold">journey mapping</span> and 
                <span className="text-primary font-semibold"> persona development</span> to 
                <span className="text-primary font-semibold"> RICE prioritization</span> and 
                <span className="text-primary font-semibold"> Kanban workflows</span>, 
                every project is a carefully crafted story of problem-solving and innovation.
              </p>
            </div>
          </div>
        </Card>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skills.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,188,212,0.2)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-muted/50 hover:bg-accent/20 hover:text-accent hover:border-accent/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Production Journey */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-card/80 to-muted/30 backdrop-blur border-secondary/30">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Production Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "Discovery", desc: "User Research & Market Analysis" },
                { step: "Planning", desc: "Roadmap & Sprint Definition" },
                { step: "Execution", desc: "Agile Development & Testing" },
                { step: "Launch", desc: "GTM Strategy & Adoption" }
              ].map((phase, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-background font-bold flex items-center justify-center mx-auto mb-3 text-lg">
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.step}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
