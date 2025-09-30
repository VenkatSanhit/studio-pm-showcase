import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 201-526-5663",
    link: "tel:+12015265663"
  },
  {
    icon: Mail,
    label: "Email",
    value: "venkat.sanhit4us@gmail.com",
    link: "mailto:venkat.sanhit4us@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "venkat-sanhit-pm",
    link: "https://www.linkedin.com/in/venkat-sanhit-pm/"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York (Open to Relocate)",
    link: null
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">Let's discuss your next big product</p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6" />
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index}
                  className="group p-6 bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(220,20,60,0.2)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          target={contact.link.startsWith('http') ? '_blank' : undefined}
                          rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-lg font-semibold text-foreground">
                          {contact.value}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-card/80 to-accent/10 backdrop-blur border-primary/30 shadow-[0_0_60px_rgba(220,20,60,0.3)] text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Product?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a product strategist, a data-driven PM, or someone to lead your next big launch, 
              let's create something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_40px_rgba(220,20,60,0.6)] transition-all duration-300"
              >
                <a href="mailto:venkat.sanhit4us@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/venkat-sanhit-pm/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <div className="text-6xl text-primary/20 mb-4">"</div>
          <p className="text-xl text-muted-foreground italic leading-relaxed">
            Great products aren't built in isolation. They're the result of collaboration, 
            data-driven decisions, and a relentless focus on user needs.
          </p>
          <div className="text-6xl text-primary/20 mt-4 rotate-180">"</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
