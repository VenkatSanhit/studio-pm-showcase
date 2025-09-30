import { Rocket, Users, Target, TrendingUp, Award, Zap } from "lucide-react";

const metrics = [
  {
    icon: Rocket,
    value: "15+",
    label: "Product Launches",
    subtitle: "Features Shipped",
    color: "from-secondary to-secondary-glow"
  },
  {
    icon: Users,
    value: "1M+",
    label: "Users Impacted",
    subtitle: "Across Platforms",
    color: "from-accent to-accent/80"
  },
  {
    icon: Target,
    value: "+22%",
    label: "Sprint Velocity",
    subtitle: "Average Improvement",
    color: "from-primary to-primary-glow"
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Adoption Lift",
    subtitle: "Avg per Release",
    color: "from-secondary to-accent"
  },
  {
    icon: Award,
    value: "25+",
    label: "KPI Wins",
    subtitle: "Exceeded Targets",
    color: "from-primary to-secondary"
  },
  {
    icon: Zap,
    value: "60%",
    label: "Time Saved",
    subtitle: "Process Efficiency",
    color: "from-accent to-primary"
  }
];

const MetricsBoard = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
            Box Office Performance
          </h2>
          <p className="text-lg text-muted-foreground">Career Highlights & Impact Metrics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/60 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${metric.color} bg-opacity-20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-foreground" style={{
                    filter: 'drop-shadow(0 0 8px currentColor)'
                  }} />
                </div>
                <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.subtitle}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MetricsBoard;
