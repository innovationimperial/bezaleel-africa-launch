import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, TrendingUp, Users, Zap, MapPin, Shield, Lightbulb, Building, Coins, Leaf } from "lucide-react";

const ZambiaRegistration = () => {
  const steps = [
    {
      number: "1",
      title: "Business Structure Selection",
      description: "Choose the optimal business structure for your Zambian company. Most businesses register as Private Limited Companies with PACRA (Patents and Companies Registration Agency).",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    },
    {
      number: "2", 
      title: "Company Name Reservation",
      description: "Search and reserve your company name with PACRA. We ensure your chosen name complies with Zambian naming conventions and is available for registration.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      number: "3",
      title: "Document Preparation & Submission",
      description: "Prepare all required documents including Articles of Association, company forms, and director details. All foreign documents must be notarized and authenticated.",
      image: "https://images.unsplash.com/photo-1586281010315-4aa4b26c5030?w=600&h=400&fit=crop"
    },
    {
      number: "4",
      title: "Tax Registration & Banking",
      description: "Register with Zambia Revenue Authority (ZRA) for tax purposes and assist with opening corporate bank accounts with leading Zambian banks.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
    }
  ];

  const whyZambiaReasons = [
    {
      icon: Shield,
      title: "Governance & International Standing",
      description: "Zambia maintains a stable multi-party democracy with peaceful transitions of power since 1991. The country is a member of key international organizations including the African Union, SADC, COMESA, and the Commonwealth. Zambia ranks favorably in regional governance indices and has maintained consistent diplomatic relations, making it a reliable business environment in Southern Africa."
    },
    {
      icon: Users,
      title: "Demographics & Human Capital",
      description: "Young and growing population of over 19 million people with a median age of 16.8 years, providing a dynamic workforce. English is the official language, facilitating international business communication. The government's Vision 2030 focuses on becoming a prosperous middle-income nation through economic diversification, education advancement, and infrastructure development, creating numerous business opportunities."
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation Landscape",
      description: "Zambia is experiencing rapid digital transformation with increasing mobile phone penetration (over 100%) and growing internet connectivity. The government's Smart Zambia initiative promotes ICT development and e-governance. There's significant potential in fintech, agritech, and digital services sectors, with supportive policies for technology startups and digital innovation hubs emerging across major cities."
    },
    {
      icon: MapPin,
      title: "Strategic Economic Position",
      description: "Strategic Location: Landlocked but strategically positioned as a gateway between Southern, Eastern, and Central Africa, with access to multiple regional markets through SADC and COMESA free trade agreements.",
      features: [
        "Natural Resources Hub: Rich in copper, cobalt, emeralds, and other minerals",
        "Agricultural Potential: Abundant arable land and water resources",
        "Investment Incentives: Multi-Facility Economic Zones (MFEZs) with tax incentives",
        "Banking Sector: Well-developed financial sector with international and local banks"
      ]
    }
  ];

  const businessSectors = [
    {
      title: "Mining & Manufacturing",
      items: ["Copper mining and processing", "Gemstone extraction and cutting", "Manufacturing for regional export", "Mining equipment and services"]
    },
    {
      title: "Agriculture & Agribusiness",
      items: ["Commercial farming", "Food processing and packaging", "Agricultural inputs and machinery", "Export of agricultural products"]
    },
    {
      title: "Tourism & Hospitality",
      items: ["Victoria Falls tourism", "Safari and wildlife tourism", "Hospitality services", "Tour operations"]
    },
    {
      title: "Energy & Utilities",
      items: ["Renewable energy projects", "Power generation and distribution", "Water and sanitation services", "Energy-efficient technologies"]
    },
    {
      title: "Services Sector",
      items: ["Financial services", "Logistics and transportation", "Professional services", "Education and training"]
    }
  ];

  const marketBenefits = [
    {
      icon: Globe,
      title: "Regional Market Access",
      description: "Over 600 million people across SADC and COMESA regions"
    },
    {
      icon: TrendingUp,
      title: "International Trade",
      description: "Preferential access to US, EU, and other international markets"
    },
    {
      icon: Building,
      title: "Transport Links",
      description: "Connected to major ports in South Africa, Tanzania, and Mozambique"
    },
    {
      icon: Zap,
      title: "Time Zone Advantage",
      description: "CAT (UTC+2) aligns well with European and Middle Eastern business hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
            alt="Zambia Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇿🇲</span>
              <h1 className="text-4xl md:text-6xl font-bold">
                Register Your Company in <span className="text-primary">Zambia</span>
              </h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Establish your business in Zambia's growing economy with our comprehensive company registration services.
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
              How to Register a Company in Zambia
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expert team will guide you through Zambia's business registration process
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

      {/* Why Open a Company in Zambia Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Open a Company in <span className="text-primary">Zambia</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the compelling advantages of establishing your business in Zambia's dynamic and growing economy
            </p>
          </div>

          {/* Main Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {whyZambiaReasons.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <reason.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {reason.description}
                  </CardDescription>
                  {reason.features && (
                    <ul className="space-y-2">
                      {reason.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Investment Climate */}
          <Card className="mb-16">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Coins className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Investment Climate</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Ease of Doing Business</h4>
                  <p className="text-sm text-muted-foreground">Zambia has implemented business registration reforms, reducing the time to start a business</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Currency</h4>
                  <p className="text-sm text-muted-foreground">Zambian Kwacha (ZMW) with flexible exchange rate regime</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trade Agreements</h4>
                  <p className="text-sm text-muted-foreground">Member of multiple trade blocs providing preferential market access</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Regulatory Environment</h4>
                  <p className="text-sm text-muted-foreground">Streamlined investment procedures through one-stop investment centers</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Business Sectors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Key Business Sectors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessSectors.map((sector, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{sector.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {sector.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Market Access Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Market Access Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketBenefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ZambiaRegistration;
