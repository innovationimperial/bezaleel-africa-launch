
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, FileText, CreditCard, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const countries = [
    {
      name: "South Africa",
      flag: "🇿🇦",
      timeline: "5-7 business days",
      price: "From $385",
      image: "https://images.unsplash.com/photo-1577527205372-cdb7e481b37e?w=600&h=400&fit=crop",
      link: "/registration/south-africa",
      features: ["Pty Ltd Company", "CIPC Registration", "Tax Number", "VAT Registration"],
      description: "Register your private company in Africa's most developed economy"
    },
    {
      name: "Zambia", 
      flag: "🇿🇲",
      timeline: "7-10 business days",
      price: "From $450",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      link: "/registration/zambia",
      features: ["Limited Company", "PACRA Registration", "Tax Clearance", "Business License"],
      description: "Establish your business in this resource-rich nation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Company <span className="text-gradient">Registration</span> Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional company registration across two African countries. Choose your jurisdiction and let us handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Registration Country
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each country offers unique advantages. Select the jurisdiction that best fits your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {countries.map((country, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-border/50 hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-4xl">{country.flag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{country.name}</h3>
                  </div>
                </div>
                
                <CardHeader>
                  <CardDescription className="text-base">
                    {country.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {country.timeline}
                    </div>
                    <div className="font-semibold text-primary">
                      {country.price}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {country.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={country.link}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Registration Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and efficient company registration across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Document Collection", desc: "We gather all required documents" },
              { icon: MapPin, title: "Name Reservation", desc: "Reserve your company name" },
              { icon: CreditCard, title: "Registration", desc: "Submit to relevant authorities" },
              { icon: Clock, title: "Bank Account", desc: "Open corporate banking" }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Registration;
