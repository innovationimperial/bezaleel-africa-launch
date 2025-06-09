
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-semibold">Bezaleel Consultants</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted partner for company registration and business services across Africa.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Company Registration</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corporate Banking</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Tax & Accounting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">E-Commerce Stores</a></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-semibold mb-4">Countries</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">🇿🇦 South Africa</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">🇿🇲 Zambia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">🇿🇼 Zimbabwe</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@bezaleelconsultants.com</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+27 11 123 4567</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Bezaleel Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
