
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Bezaleel Consultants</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#countries" className="text-foreground hover:text-primary transition-colors">Countries</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Talk to Expert
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Start My Company
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">Services</a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary">Pricing</a>
              <a href="#countries" className="block px-3 py-2 text-foreground hover:text-primary">Countries</a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">About</a>
              <div className="pt-4 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  Talk to Expert
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Start My Company
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
