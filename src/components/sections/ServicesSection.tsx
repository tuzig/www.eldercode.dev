
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, TestTube, Shield, FileCheck } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Code Cleanup & Refactoring",
      description: "Remove unneeded packages and imports, eliminate inline CSS, break down long functions, and improve overall code readability for maintainable production systems"
    },
    {
      icon: Cloud,
      title: "DevOps Setup & Scaling",
      description: "Production-ready hosting that scales on Google Cloud, complete CI/CD pipelines, automated deployments, and infrastructure that grows with your business"
    },
    {
      icon: TestTube,
      title: "Comprehensive Testing Suite",
      description: "Unit tests for backend functionality, end-to-end adaptive testing for user workflows, automated test coverage, and quality assurance protocols"
    },
    {
      icon: Shield,
      title: "GDPR Compliance & Security",
      description: "Full GDPR compliance implementation, data protection protocols, privacy policy integration, cookie management, and regulatory compliance audit"
    },
    {
      icon: FileCheck,
      title: "Complete Documentation Package",
      description: "All code delivered with comprehensive maintenance instructions, deployment guides, API documentation, and team handover materials for seamless transitions"
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
          <h2 className="text-5xl font-display font-bold mb-6">What We Actually Do</h2>
          <div className="bg-dark-surface py-8 px-6 rounded-lg border border-dark-border mb-8">
            <p className="text-lg text-dark-text-secondary mb-4">
              This isn't freelance. This is engineering.
            </p>
            <p className="text-base text-dark-text-secondary">
              Every project is led by senior developers and infrastructure architects — people who've scaled real platforms, rebuilt fragile MVPs, and deployed software that holds under pressure. We use AI tools, yes — but they don't replace experience. They multiply it.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-dark-surface border-dark-border hover:border-cyan/50 transition-all duration-300 hover:-translate-y-2 animate-scale-up group hover:glow-cyan" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <service.icon className="h-12 w-12 text-cyan mb-4 group-hover:animate-float" />
                <h3 className="text-xl font-display font-semibold mb-3 text-gradient-cyan">{service.title}</h3>
                <p className="text-dark-text-secondary text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
