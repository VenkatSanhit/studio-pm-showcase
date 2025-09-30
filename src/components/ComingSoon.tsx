import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Rocket, Brain, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const upcomingGoals = [
  {
    icon: Brain,
    title: "AI Product Leadership",
    description: "Deep diving into AI/ML product strategy and responsible AI implementation",
    status: "In Development"
  },
  {
    icon: Rocket,
    title: "Scale-Up Expertise",
    description: "Mastering hyper-growth product strategies for 0-to-1 and 1-to-100 journeys",
    status: "Coming Q2 2025"
  },
  {
    icon: Globe,
    title: "Global Product Expansion",
    description: "Leading international product rollouts and localization strategies",
    status: "Roadmap 2025"
  }
];

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll be notified about new releases and updates.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      {/* Animated background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Coming Soon
            </h2>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground">Upcoming Features & Future Goals</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6" />
        </div>

        {/* Upcoming Goals */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingGoals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <Card 
                  key={index}
                  className="group p-8 bg-card/60 backdrop-blur border-border hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(220,20,60,0.25)] animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {goal.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {goal.description}
                    </p>
                    
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                      {goal.status}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur border-secondary/30 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Stay Updated on New Releases
            </h3>
            <p className="text-muted-foreground">
              Subscribe to get notified about new product launches, case studies, and insights
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background/50 border-border focus:border-secondary"
            />
            <Button 
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-secondary to-yellow-600 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 text-background font-semibold"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Join the community of product enthusiasts and industry leaders
          </p>
        </Card>

        {/* Teaser Text */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground italic">
            "The best products are yet to come. Stay tuned for more innovative solutions, 
            data-driven insights, and user-centered designs that transform industries."
          </p>
          <div className="mt-6 text-secondary font-bold text-xl">
            - Venkat Sanhit Srinivasula
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
