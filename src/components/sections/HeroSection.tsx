
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Microscope, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center bg-dark-surface border border-dark-border rounded-full px-4 py-2 text-sm text-cyan mb-8 animate-pulse-glow">
            <Rocket className="h-4 w-4 mr-2" />
            <span className="font-mono uppercase tracking-wider">You Built Fast Now Scale With Experience</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-balance">
            You Built It <span className="text-gradient-cyan animate-glitch">Fast</span>,<br />Now Make It <span className="text-gradient-purple">Unstoppable</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-dark-text-secondary mb-8 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
            Our team of senior software engineers, architects, and DevOps experts transform no-code prototypes to quality services — fast, secure and scalable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-10 py-8 group bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide animate-pulse-glow"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <Microscope className="h-6 w-6 mr-3" />
              REQUEST ANALYSIS & QUOTE
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <a href="https://calendly.com/daonb/half-an-hour" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-8 border-cyan/30 text-cyan hover:bg-cyan/10 font-mono uppercase tracking-wide"
              >
                <Phone className="mr-3 h-5 w-5" />
                SCHEDULE A STRATEGY CALL
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
