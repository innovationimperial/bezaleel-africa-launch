
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop" 
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Ready to start your business journey? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="animate-fadeInUp">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input type="tel" placeholder="+27 11 123 4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Service Interested In</label>
                    <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
                      <option>Company Registration</option>
                      <option>Website Development</option>
                      <option>E-Commerce Store</option>
                      <option>Mobile App Development</option>
                      <option>Corporate Banking</option>
                      <option>Tax & Accounting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project or how we can help you..."
                      rows={5}
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="animate-slideInRight">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">General Inquiries</p>
                  <p className="font-medium">info@bezaleelconsultants.com</p>
                  <p className="text-muted-foreground mb-2 mt-4">Support</p>
                  <p className="font-medium">support@bezaleelconsultants.com</p>
                </CardContent>
              </Card>

              <Card className="animate-slideInRight" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">South Africa</p>
                  <p className="font-medium">+27 11 123 4567</p>
                  <p className="text-muted-foreground mb-2 mt-4">Zambia</p>
                  <p className="font-medium">+260 21 123 4567</p>
                  <p className="text-muted-foreground mb-2 mt-4">Zimbabwe</p>
                  <p className="font-medium">+263 4 123 4567</p>
                </CardContent>
              </Card>

              <Card className="animate-slideInRight" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Head Office</p>
                  <p className="font-medium">123 Business District<br />Johannesburg, South Africa</p>
                </CardContent>
              </Card>

              <Card className="animate-slideInRight" style={{ animationDelay: "0.3s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Monday - Friday</p>
                  <p className="font-medium">8:00 AM - 6:00 PM (SAST)</p>
                  <p className="text-muted-foreground mb-2 mt-4">Saturday</p>
                  <p className="font-medium">9:00 AM - 2:00 PM (SAST)</p>
                </CardContent>
              </Card>

              <Card className="animate-slideInRight bg-primary text-white" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">Get instant support via WhatsApp</p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-primary hover:bg-white/90"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
