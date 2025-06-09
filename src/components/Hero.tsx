
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-fadeInUp">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by 100+ International Founders
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            Register Your Company in{" "}
            <span className="text-gradient">South Africa</span>,{" "}
            <span className="text-gradient">Zambia</span>, or{" "}
            <span className="text-gradient">Zimbabwe</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fadeInUp">
            100% Online Process
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto animate-fadeInUp">
            Fast-track your business setup with expert-led company registration, bank account opening, and tax compliance. 
            Get started from anywhere in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto group">
              Start My Company
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              See Pricing
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto text-center animate-fadeInUp">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Fast 5-7 Day Setup</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">3 Countries Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">100% Legal Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
