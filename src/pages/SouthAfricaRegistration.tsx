
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, TrendingUp, Users, Zap } from "lucide-react";

const SouthAfricaRegistration = () => {
  const steps = [
    {
      number: "1",
      title: "Choosing an optimum business structure to register company in South Africa",
      description: "Prior to company formation, it is essential to choose the correct type of company. Generally, the most common type of business in South Africa is the private company (\"Pty Ltd\"), which is also known as a company limited by shares.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    },
    {
      number: "2", 
      title: "Reservation of company name",
      description: "Bezaleel Consultants will search and reserve your company name with the CIPC website. Our team will reserve your company's name for up to 6 months. Each application for company name registration allows you to submit up to 4 names.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      number: "3",
      title: "Preparation and submission of relevant documents",
      description: "All companies in South Africa require a Memorandum of Incorporation (MOI) to be registered. Bezaleel Consultants will assist in drafting the documents required to register company in South Africa, which includes certified identity copies, name confirmation certificate (COR9.4) and Power of attorney if applicable.",
      image: "https://images.unsplash.com/photo-1586281010315-4aa4b26c5030?w=600&h=400&fit=crop"
    },
    {
      number: "4",
      title: "Corporate bank account opening",
      description: "Depending on your business structure, the documents required will be slightly different. Bezaleel Consultants will help in consolidating the documents and opening a corporate account with a reputable bank.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
    }
  ];

  const whyRegister = [
    {
      icon: Globe,
      title: "Political Stability",
      description: "South Africa is part of many international organisations including WTO, IMF and G20. The country ranks 32/180 on Press Freedom Index and scores 79/100 on Global Freedom Scores.",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Social Advantages", 
      description: "Diverse population with 95% literacy rate. The National Development Plan (NDP) aims to eliminate poverty, reduce inequality and strengthen democracy.",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Technological Opportunity",
      description: "South Africa is undergoing digital reinvention. Many corporations are in early stages of digital strategy implementation, creating opportunities for digital talent investment.",
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Economic Gateway",
      description: "Second-largest economy in Africa, upper-middle-income emerging market with top 20 stock exchange globally. Gateway to Sub-Saharan markets and African Continental Free Trade Area.",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1577527205372-cdb7e481b37e?w=1920&h=1080&fit=crop" 
            alt="South Africa Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇿🇦</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Register Your Company in <span className="text-primary">South Africa</span>
              </h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Bezaleel Consultants will complete your South Africa company formation through a seamless and fuss-free procedure.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
              Start Registration Process
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Register a Company in South Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined 4-step process makes company registration simple and efficient
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/2 animate-slideInRight">
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </Card>
                </div>
                
                <div className="lg:w-1/2 animate-fadeInUp">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Register Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Register a Company in South Africa?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              South Africa offers unique advantages for international businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyRegister.map((reason, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${reason.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Register Your South African Company?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our experts handle the entire registration process while you focus on building your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
                  Start Registration Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  Download Requirements
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default SouthAfricaRegistration;
