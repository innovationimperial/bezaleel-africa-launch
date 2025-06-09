
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, FileText, Globe, Users, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const registrationGallery = [
    {
      type: "video",
      title: "Company Registration Process",
      description: "Watch our step-by-step company registration process in South Africa",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
      icon: <Building className="w-6 h-6" />
    },
    {
      type: "image",
      title: "CIPC Registration Certificate",
      description: "Official company registration certificates from CIPC",
      thumbnail: "https://images.unsplash.com/photo-1586280704329-ac43b4f4d278?w=600&h=400&fit=crop",
      icon: <FileText className="w-6 h-6" />
    },
    {
      type: "video",
      title: "Banking Setup Process",
      description: "How we help you open corporate bank accounts across Africa",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      icon: <Building className="w-6 h-6" />
    },
    {
      type: "image",
      title: "Client Success Stories",
      description: "Real companies we've helped establish across Southern Africa",
      thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const technicalGallery = [
    {
      type: "website",
      title: "E-Commerce Platform",
      description: "Modern online store with payment integration and inventory management",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      link: "https://example-store.com",
      tech: "React, Node.js, Stripe"
    },
    {
      type: "video",
      title: "CRM System Demo",
      description: "Custom customer relationship management system for growing businesses",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: "Vue.js, Laravel, MySQL"
    },
    {
      type: "website",
      title: "Corporate Website",
      description: "Professional business website with content management system",
      thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      link: "https://example-corporate.com",
      tech: "React, Tailwind CSS"
    },
    {
      type: "video",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for business management",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: "React Native, Firebase"
    },
    {
      type: "website",
      title: "Booking System",
      description: "Online appointment and booking management system",
      thumbnail: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      link: "https://example-booking.com",
      tech: "Next.js, PostgreSQL"
    },
    {
      type: "video",
      title: "Payment Gateway Integration",
      description: "Secure payment processing solutions for African businesses",
      thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tech: "Stripe, PayFast, Ozow"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop" 
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Work <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Explore our portfolio of successful company registrations and cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Registration Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Company Registration Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how we help businesses establish themselves across South Africa, Zambia, and Zimbabwe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {registrationGallery.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fadeInUp hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                      {item.icon}
                      <span className="text-sm font-medium">{item.type.toUpperCase()}</span>
                    </div>
                  </div>
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Gallery */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technology Solutions Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of websites, systems, and digital solutions built for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalGallery.map((item, index) => (
              <Card 
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 animate-slideInRight hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <div className="bg-primary/90 text-white px-3 py-1 rounded-full flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.type.toUpperCase()}</span>
                    </div>
                  </div>
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-white/30 transition-colors duration-300">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                  {item.link && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 group-hover:bg-white/30 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mb-3">
                    {item.description}
                  </CardDescription>
                  <div className="text-sm text-primary font-medium">
                    Tech: {item.tech}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {item.link ? (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                      asChild
                    >
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    >
                      Watch Demo <Play className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&h=1080&fit=crop" 
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you register your company or build your next digital solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4 h-auto"
                asChild
              >
                <Link to="/contact">
                  Contact Us Today
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto"
                asChild
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
