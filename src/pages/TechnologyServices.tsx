
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Smartphone, Cloud, Search, Palette, Code, Zap } from "lucide-react";

const TechnologyServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional, responsive websites that convert visitors into customers",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456789", // Replace with actual video
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
      link: "/website-development",
      price: "From $890"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Stores",
      description: "Full-featured online stores with payment processing and inventory management",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456790",
      features: ["Payment Gateway", "Inventory System", "Order Management", "Analytics"],
      link: "/ecommerce-development",
      price: "From $1,290"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456791",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Deployment"],
      link: "/mobile-development",
      price: "From $2,500"
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Reliable, secure cloud hosting solutions with 99.9% uptime guarantee",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456792",
      features: ["99.9% Uptime", "SSL Certificates", "Daily Backups", "24/7 Support"],
      link: "/cloud-hosting",
      price: "From $29/month"
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456793",
      features: ["SEO Optimization", "Social Media", "Google Ads", "Content Marketing"],
      link: "/digital-marketing",
      price: "From $450/month"
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Complete brand identity design including logos, business cards, and marketing materials",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      video: "https://player.vimeo.com/video/123456794",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Marketing Materials"],
      link: "/brand-design",
      price: "From $690"
    }
  ];

  const techStack = [
    { name: "React", logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop" },
    { name: "Node.js", logo: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop" },
    { name: "Python", logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop" },
    { name: "AWS", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop" },
    { name: "MongoDB", logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop" },
    { name: "WordPress", logo: "https://images.unsplash.com/photo-1591267990532-204d8d62589a?w=100&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Technology <span className="text-primary">Services</span>
              </h1>
            </div>
            <p className="text-xl mb-8 opacity-90">
              Cutting-edge digital solutions to transform your business and accelerate growth across Africa
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From websites to mobile apps, we provide comprehensive technology services to digitize your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-border/50 hover:border-primary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 group-hover:bg-primary/90 transition-colors">
                      Get Quote
                    </Button>
                    <Button variant="outline" size="icon">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Technology Stack
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and performant solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <Card 
                key={index}
                className="group text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to deployment, we follow a proven methodology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Search, title: "Discovery", desc: "Understanding your requirements and goals" },
              { icon: Palette, title: "Design", desc: "Creating intuitive and engaging user experiences" },
              { icon: Code, title: "Development", desc: "Building robust and scalable solutions" },
              { icon: Zap, title: "Launch", desc: "Deployment and ongoing support" }
            ].map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your technology needs and create a solution that drives growth and success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4 h-auto">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                  View Portfolio
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

export default TechnologyServices;
