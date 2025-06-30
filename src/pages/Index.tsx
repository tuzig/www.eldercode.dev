import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle2,
  Code2,
  Shield,
  Cloud,
  Zap,
  Users,
  BarChart3
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Analysis Request Submitted!",
      description: "We'll get back to you within 24 hours with your free code analysis.",
    });
    setFormData({ name: "", email: "", platform: "", description: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stats = [
    { number: "100+", label: "no-code MVPs transformed into scalable global platforms" },
    { number: "99.9%", label: "uptime guaranteed — enterprise-grade reliability from day one" },
    { number: "$50M+", label: "in funding raised by our clients after transformation" }
  ];

  const services = [
    {
      icon: Code2,
      title: "Code Refactoring",
      description: "From visual logic to maintainable codebases — we translate your logic into React, Node, or your stack of choice."
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD Setup",
      description: "Automated deploys, rollback safety, test environments — engineered with GitHub Actions, AWS Amplify, or Vercel pipelines."
    },
    {
      icon: Shield,
      title: "Security Hardening",
      description: "We audit your app against OWASP Top 10 and common low-code platform vulnerabilities. Everything from auth misconfigurations to insecure data flows."
    },
    {
      icon: Cloud,
      title: "Cloud Migration & API Integration",
      description: "Move your data and logic from limited app builders to AWS, Supabase, Firebase, or other modern stacks — fully documented."
    },
    {
      icon: Users,
      title: "Product-Led Engineering",
      description: "We work alongside your PMs and designers to ensure the transition retains UX fidelity, while unlocking performance and observability."
    }
  ];

  const integrations = [
    { name: "Stripe", description: "Global Payments + Billing" },
    { name: "Auth0", description: "Enterprise-Grade Security" },
    { name: "Airtable", description: "Scale Your Data Operations" },
    { name: "Firebase", description: "Real-time Global Infrastructure" },
    { name: "HubSpot", description: "Enterprise Sales & Marketing" },
    { name: "OpenAI", description: "AI-Powered Business Intelligence" },
    { name: "AWS S3", description: "Global Content Delivery" },
    { name: "Amplitude", description: "Enterprise Analytics" },
    { name: "Vercel", description: "Global Edge Deployment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-brand-700">
              No-Code → Global Scale
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-surface-600 hover:text-brand-600 transition-colors">Services</a>
              <a href="#integrations" className="text-surface-600 hover:text-brand-600 transition-colors">Integrations</a>
              <a href="#contact" className="text-surface-600 hover:text-brand-600 transition-colors">Contact</a>
              <Button size="sm">Start Free Audit</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center bg-brand-50 border border-brand-200 rounded-full px-4 py-2 text-sm text-brand-700 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Your No-Code MVP → Global Business Success
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-surface-900 mb-6 text-balance">
              Get a Free <span className="text-brand-600">Code Analysis</span> — Transform Your Vision Into Reality
            </h1>
            <p className="text-xl text-surface-600 mb-8 max-w-3xl mx-auto text-pretty">
              Your no-code prototype proves the concept. Now let's build the infrastructure that scales globally. We'll identify optimization opportunities, enterprise-grade improvements, and pathways to million-user success.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 group">
              Run Free Code Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">
              No-Code Validates Your Idea. We Scale It to the World.
            </h2>
            <p className="text-lg text-surface-600 text-pretty">
              Every global business started with an idea. Your no-code MVP proves that idea works. Now it's time to build the foundation that supports millions of users, handles enterprise customers, and scales across continents. We transform promising prototypes into market-leading platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow animate-scale-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="pt-8 pb-6">
                  <div className="text-3xl font-bold text-brand-600 mb-2">{stat.number}</div>
                  <p className="text-surface-600 text-sm">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">What We Do Best</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-brand-600 mb-4" />
                  <h3 className="text-xl font-semibold text-surface-900 mb-3">{service.title}</h3>
                  <p className="text-surface-600 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">Enterprise Integrations for Global Success</h2>
            <p className="text-xl text-surface-600 mb-4">From startup to IPO — we connect everything you need.</p>
            <p className="text-lg text-surface-600 text-pretty">
              No-code platforms get you started, but global businesses need enterprise integrations. We connect your platform to payment processors, CRMs, analytics, AI services, and infrastructure that Fortune 500 companies rely on.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {integrations.map((integration, index) => (
              <Card key={index} className="border border-surface-200 hover:border-brand-300 transition-all duration-300 hover:shadow-md animate-scale-up" style={{ animationDelay: `${index * 50}ms` }}>
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-surface-900 mb-1">{integration.name}</h4>
                  <p className="text-xs text-surface-600">{integration.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">From No-Code MVP to $10M Series A</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty">
              A fintech startup came to us with a Bubble prototype handling 100 users. Within 6 months, we transformed it into a React + Firebase platform serving 50,000+ users across 15 countries. They closed their Series A three months later.
            </p>
            <blockquote className="text-2xl font-medium italic mb-4">
              "They didn't just migrate our code — they gave us the infrastructure to become a global business. Our investors were blown away by our technical foundation."
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <CheckCircle2 key={i} className="h-5 w-5 text-yellow-300" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold text-surface-900 mb-6">Ready to Scale Your Vision Globally?</h2>
              <p className="text-lg text-surface-600">
                Get a free code analysis today and discover how to transform your no-code MVP into enterprise-grade infrastructure that scales worldwide.
              </p>
            </div>
            
            <Card className="border-0 shadow-xl animate-scale-up">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-surface-900 mb-2 block">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-surface-900 mb-2 block">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-surface-900 mb-2 block">Platform Used</label>
                    <Input
                      value={formData.platform}
                      onChange={(e) => handleInputChange("platform", e.target.value)}
                      placeholder="e.g., Bubble, Webflow, Adalo, Custom"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-surface-900 mb-2 block">Describe Your App</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Tell us about your app, current challenges, and what you're hoping to achieve..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Start My Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">No-Code → Global Scale</h3>
              <p className="text-surface-300 text-sm">
                We transform no-code MVPs into global businesses — fast, secure, and built to scale worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-surface-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#integrations" className="text-surface-300 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#contact" className="text-surface-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-surface-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-surface-300 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-surface-300 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-surface-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-surface-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-surface-800 pt-8 text-center text-sm text-surface-400">
            <p>&copy; 2024 No-Code to Global Scale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
