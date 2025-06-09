
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-xl">Bezaleel Consultants</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full">All Services</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/registration" className="w-full">Company Registration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/technology" className="w-full">Technology Services</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Registration Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-colors">
                Registration <ChevronDown className="w-4 h-4 ml-1" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/registration" className="w-full">All Countries</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/registration/south-africa" className="w-full">🇿🇦 South Africa</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/registration/zambia" className="w-full">🇿🇲 Zambia</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/registration/zimbabwe" className="w-full">🇿🇼 Zimbabwe</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                All Services
              </Link>
              <Link to="/registration" className="text-foreground hover:text-primary transition-colors">
                Company Registration
              </Link>
              <Link to="/registration/south-africa" className="text-foreground hover:text-primary transition-colors pl-4">
                🇿🇦 South Africa
              </Link>
              <Link to="/registration/zambia" className="text-foreground hover:text-primary transition-colors pl-4">
                🇿🇲 Zambia
              </Link>
              <Link to="/registration/zimbabwe" className="text-foreground hover:text-primary transition-colors pl-4">
                🇿🇼 Zimbabwe
              </Link>
              <Link to="/technology" className="text-foreground hover:text-primary transition-colors">
                Technology Services
              </Link>
              <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
                Gallery
              </Link>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Button className="bg-primary hover:bg-primary/90 w-fit">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
