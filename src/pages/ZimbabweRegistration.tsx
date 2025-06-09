
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, TrendingUp, Users, Zap } from "lucide-react";

const ZimbabweRegistration = () => {
  const steps = [
    {
      number: "1",
      title: "Business Structure Selection",
      description: "Choose between Private Limited Company, Public Limited Company, or Branch Office. Most foreign investors opt for Private Limited Companies for flexibility and limited liability.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop"
    },
    {
      number: "2", 
      title: "Company Name Search & Reservation",
      description: "Conduct a comprehensive name search with the Registrar of Companies and reserve your preferred company name. Names must comply with Zimbabwe's company naming regulations.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      number: "3",
      title: "Document Preparation & Filing",
      description: "Prepare Memorandum and Articles of Association, director and shareholder details, and all required forms. Submit to the Registrar of Companies for approval.",
      image: "https://images.unsplash.com/photo-1586281010315-4aa4b26c5030?w=600&h=400&fit=crop"
    },
    {
      number: "4",
      title: "Tax Registration & Compliance",
      description: "Register with ZIMRA (Zimbabwe Revenue Authority) for tax purposes, obtain necessary licenses, and set up corporate banking with authorized dealers.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&h=1080&fit=crop" 
            alt="Zimbabwe Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇿🇼</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Register Your Company in <span className="text-primary">Zimbabwe</span>
              </h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Access Zimbabwe's emerging market opportunities with our professional company registration services.
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
              How to Register a Company in Zimbabwe
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Navigate Zimbabwe's business registration process with our experienced team
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

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ZimbabweRegistration;
