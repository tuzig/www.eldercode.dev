
import { Button } from "@/components/ui/button";
import { Microscope } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-dark-border bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-display font-bold text-gradient-cyan">
            Break the Limit
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Services</a>
            <a href="#platforms" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Stack</a>
            <a href="#contact" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">About</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
