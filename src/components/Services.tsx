
import { Building2, CreditCard, FileText, Globe, ShoppingCart, Calculator, Users, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Company Registration",
      description: "Complete business registration in South Africa, Zambia, and Zimbabwe",
      features: ["Certificate of Incorporation", "Tax Registration", "CIPC/Registrar Filing"]
    },
    {
      icon: CreditCard,
      title: "Corporate Banking",
      description: "Open corporate bank accounts with major banks in all three countries",
      features: ["FNB, Standard Bank", "Online Banking Setup", "Multi-currency Accounts"]
    },
    {
      icon: Calculator,
      title: "Tax & Accounting",
      description: "Complete tax registration and ongoing accounting compliance",
      features: ["VAT Registration", "PAYE Setup", "Monthly Returns"]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites and e-commerce stores for your business",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Stores",
      description: "Full-featured online stores with payment processing",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking"]
    },
    {
      icon: FileText,
      title: "Annual Compliance",
      description: "Ongoing compliance and annual return filings",
      features: ["Annual Returns", "CIPC Filings", "Compliance Monitoring"]
    },
    {
      icon: Users,
      title: "Public Officer",
      description: "Professional public officer appointment services",
      features: ["Qualified Officers", "Legal Compliance", "Ongoing Support"]
    },
    {
      icon: Shield,
      title: "Legal Support",
      description: "Ongoing legal and regulatory support for your business",
      features: ["Contract Review", "Regulatory Advice", "Legal Documentation"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Business Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to start, run, and grow your business across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
