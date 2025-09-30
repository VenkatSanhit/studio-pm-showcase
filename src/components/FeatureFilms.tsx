import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
}

const projects: Project[] = [
  {
    title: "The Emotiles Revolution",
    company: "Current Project",
    period: "2025 - Present",
    role: "Lead Product Manager",
    tagline: "Bringing emotions to life, one subtitle at a time",
    boxOffice: [
      "Multilingual AI-powered subtitle platform",
      "Enhanced cinema accessibility globally",
      "Real-time emotion detection & visualization"
    ],
    rating: 5.0,
    reviews: [
      "Revolutionary approach to subtitle technology",
      "Seamlessly blends AI with human emotion"
    ],
    highlights: ["AI/ML Integration", "Global Impact", "Innovation Award"]
  },
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
    highlights: ["Agile Excellence", "GTM Strategy", "Dashboard Automation"]
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
    highlights: ["Full Lifecycle Ownership", "A/B Testing", "UX Leadership"]
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
    highlights: ["Market Research", "GTM Launch", "Conversion Optimization"]
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
                <div className="flex flex-wrap gap-2">
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureFilms;
