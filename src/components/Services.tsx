
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      title: "Company Registration",
      description: "Complete business registration in South Africa and Zambia",
      features: ["Certificate of Incorporation", "Tax Registration", "CIPC/Registrar Filing"]
    },
    {
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      title: "Corporate Banking",
      description: "Open corporate bank accounts with major banks in both countries",
      features: ["FNB, Standard Bank", "Online Banking Setup", "Multi-currency Accounts"]
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      title: "Tax & Accounting",
      description: "Complete tax registration and ongoing accounting compliance",
      features: ["VAT Registration", "PAYE Setup", "Monthly Returns"]
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Website Development",
      description: "Professional websites and e-commerce stores for your business",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized"]
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "E-Commerce Stores",
      description: "Full-featured online stores with payment processing",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking"]
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      title: "Annual Compliance",
      description: "Ongoing compliance and annual return filings",
      features: ["Annual Returns", "CIPC Filings", "Compliance Monitoring"]
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      title: "Public Officer",
      description: "Professional public officer appointment services",
      features: ["Qualified Officers", "Legal Compliance", "Ongoing Support"]
    },
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop",
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
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <CardHeader>
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
