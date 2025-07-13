
import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, CheckCircle2 } from "lucide-react";

const LeadMagnetSection = () => {
  const auditChecklist = [
    "Performance issues",
    "Security risks", 
    "Scaling blockers",
    "Migration plan",
    "Stack recommendation"
  ];

  return (
    <section className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-5xl font-display font-bold mb-6">
            <Microscope className="inline-block h-12 w-12 mr-4 text-purple" />
            <span className="text-gradient-purple">AI-Powered Code & Risk Audit</span> — Free, in 24h
          </h2>
          
          <p className="text-xl text-dark-text-secondary mb-8">
            Upload your no-code app or link your repo. We'll return a real architectural breakdown:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {auditChecklist.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 bg-dark-surface p-4 rounded-lg border border-dark-border hover:border-cyan/30 transition-colors"
              >
                <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0" />
                <span className="font-medium font-mono text-sm uppercase tracking-wide">{item}</span>
              </div>
            ))}
          </div>
          
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
                👨‍💻 SCHEDULE A STRATEGY CALL
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
