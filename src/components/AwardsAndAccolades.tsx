import { Card } from "@/components/ui/card";
import { Award, TrendingUp, Users, Heart, Target } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Project Star Award",
    year: "2019",
    description: "Recognized for demonstrating core values, ownership of DB upgrades, and exceptional teamwork at Capgemini",
    color: "from-secondary to-yellow-600"
  },
  {
    icon: Users,
    title: "VP Stevens Origins Club",
    year: "2024",
    description: "Coordinated strategic planning, boosted event satisfaction by 35%, and increased attendance by 50%",
    color: "from-accent to-blue-600"
  },
  {
    icon: Heart,
    title: "NGO Leadership",
    year: "2017-2018",
    description: "Mentored students with 100% graduation rate and raised Rs 50,000+ for Dream Camp at Make a Difference NGO",
    color: "from-primary to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Product Impact",
    year: "2020-2025",
    description: "Delivered 30%+ improvements across adoption, retention, and customer satisfaction in multiple product launches",
    color: "from-purple-600 to-primary"
  }
];

const interests = [
  { icon: "🏃", name: "Parkour", desc: "Intermediate level urban athletics" },
  { icon: "🐯", name: "Wildlife", desc: "Tiger census & birdwatching" },
  { icon: "🏛️", name: "History", desc: "Indic history & geopolitics" },
  { icon: "🏎️", name: "Automobiles", desc: "F1 enthusiast & model collector" }
];

const AwardsAndAccolades = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Awards & Accolades
          </h2>
          <p className="text-xl text-muted-foreground">Recognition & Impact Metrics</p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto mt-6" />
        </div>

        {/* Major Awards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden p-8 bg-card/80 backdrop-blur border-border hover:border-secondary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-secondary transition-colors">
                          {achievement.title}
                        </h3>
                        <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Interests & Passions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-3 text-foreground flex items-center justify-center gap-3">
              <Target className="w-8 h-8 text-accent" />
              Interests & Passions
            </h3>
            <p className="text-muted-foreground">Beyond Product Management</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {interests.map((interest, idx) => (
              <Card 
                key={idx}
                className="p-6 bg-card/60 backdrop-blur border-border hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,188,212,0.2)] text-center group cursor-default"
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="font-bold text-foreground mb-2">{interest.name}</h4>
                <p className="text-sm text-muted-foreground">{interest.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { number: "5+", label: "Years Experience" },
            { number: "220+", label: "Users Onboarded" },
            { number: "30%", label: "Avg. Improvement" },
            { number: "15+", label: "Product Launches" }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="text-center p-6 rounded-xl bg-gradient-to-br from-card/80 to-muted/30 backdrop-blur border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsAndAccolades;
