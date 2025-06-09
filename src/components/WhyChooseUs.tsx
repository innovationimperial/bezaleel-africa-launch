
import { Shield, Users, Zap, Award, Clock, Globe } from "lucide-react";

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "Chartered accountants and legal professionals handle every step"
    },
    {
      icon: Users,
      title: "100+ Satisfied Clients",
      description: "Trusted by international founders and local entrepreneurs"
    },
    {
      icon: Zap,
      title: "Fast Setup Process",
      description: "Get your company registered in just 5-14 business days"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Qualified professionals with years of African business experience"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your business journey"
    },
    {
      icon: Globe,
      title: "Multi-Country Expertise",
      description: "Deep knowledge of regulations across South Africa, Zambia & Zimbabwe"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Bezaleel Consultants?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're not just another business registration service. We're your partners 
              in building a successful African business presence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Companies Registered</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">5-7</div>
              <div className="text-sm text-muted-foreground">Days Average Setup</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
