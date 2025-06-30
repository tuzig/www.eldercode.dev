
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
  BarChart3,
  Brain,
  Rocket,
  Terminal,
  Database,
  Lock,
  Cpu
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
      title: "AI Code Audit Submitted!",
      description: "Security risks. Scaling gaps. DevOps blindspots. Delivered in 24h.",
    });
    setFormData({ name: "", email: "", platform: "", description: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const affirmations = [
    "You built it fast. We'll make it last.",
    "From Lovable to unstoppable.", 
    "AI isn't here to replace you. It's here to scale you.",
    "Your Glide app was a spark. Now let's light the fire.",
    "The MVP was proof. This is product-market domination."
  ];

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Code Migration",
      description: "From visual logic to maintainable codebases in React, Node, Supabase."
    },
    {
      icon: Zap,
      title: "Infra & Deployment Pipelines",
      description: "GitHub Actions, Vercel, Amplify. Scalable by default."
    },
    {
      icon: Shield,
      title: "Security + Compliance",
      description: "We audit and harden for OWASP, SOC2, GDPR."
    },
    {
      icon: BarChart3,
      title: "Performance Re-Architecture",
      description: "Optimize APIs, databases, and async tasks."
    },
    {
      icon: Code2,
      title: "AI-Enhanced UX/Logic",
      description: "Add OpenAI or LangChain into core workflows."
    }
  ];

  const lowCodePlatforms = [
    "Lovable", "Cursor", "Base44", "Bubble", "Webflow", "Glide", "Adalo", "Softr", "Thunkable", "Bravo"
  ];

  const techStack = [
    "React", "Next.js", "Supabase", "Firebase", "Vercel", "AWS", 
    "Stripe", "Clerk", "Segment", "LangChain", "OpenAI"
  ];

  const auditChecklist = [
    "Security risks",
    "Scaling gaps", 
    "DevOps blindspots",
    "AI integration opportunities",
    "Migration pathway analysis"
  ];

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text-primary relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-20 pointer-events-none"></div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan rounded-full animate-float opacity-30"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-cyan rounded-full animate-float opacity-25" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <header className="border-b border-dark-border bg-dark-bg/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-display font-bold text-gradient-cyan">
              Break the Limit
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Services</a>
              <a href="#platforms" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Platforms</a>
              <a href="#contact" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Contact</a>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide glow-cyan"
              >
                🔥 AI AUDIT
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center bg-dark-surface border border-dark-border rounded-full px-4 py-2 text-sm text-cyan mb-8 animate-pulse-glow">
              <Rocket className="h-4 w-4 mr-2" />
              <span className="font-mono uppercase tracking-wider">Welcome to the AI Infrastructure Era</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-balance">
              From No-Code to <span className="text-gradient-cyan animate-glitch">Global-Scale</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-8 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
              You shipped an MVP in days. Now you're facing real traffic, real users, and real limits. We help you rebuild with AI-native infrastructure — fast, modular, and production-grade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-8 group bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide animate-pulse-glow"
              >
                🔥 RUN FREE AI CODE AUDIT
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <div className="text-center">
                <p className="text-sm text-dark-text-muted font-mono uppercase tracking-wider">
                  Security risks. Scaling gaps. DevOps blindspots.
                </p>
                <p className="text-xs text-cyan font-mono">
                  Delivered in 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolution Section */}
      <section className="py-20 bg-gradient-to-r from-dark-surface via-dark-bg to-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-6 text-gradient-purple">The Revolution Is Here</h2>
            <p className="text-2xl mb-8 font-medium text-cyan font-mono uppercase tracking-wide">
              This isn't dev services. This is an evolution pipeline.
            </p>
            <blockquote className="text-3xl italic opacity-90 text-pretty font-light">
              "We don't just replace your MVP — we upgrade your entire product genome. From UX-preserving rebuilds to CI/CD, observability, and AI-augmented workflows."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Affirmation Strip */}
      <section className="py-12 bg-dark-surface border-b border-dark-border overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {affirmations.map((affirmation, index) => (
              <div 
                key={index} 
                className="animate-fade-up font-mono text-sm uppercase tracking-wider text-dark-text-secondary hover:text-cyan transition-colors cursor-default" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p>{affirmation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-5xl font-display font-bold mb-6">What We Actually Do</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
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

          <div className="text-center bg-dark-surface py-8 px-6 rounded-lg border border-dark-border">
            <p className="text-2xl font-medium italic text-gradient-purple font-display">
              "You don't need a full rewrite — just the right evolution."
            </p>
          </div>
        </div>
      </section>

      {/* Low-Code Platforms Section */}
      <section id="platforms" className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-5xl font-display font-bold mb-6">Low-Code Platforms We Support</h2>
            <p className="text-2xl mb-8 font-medium text-cyan font-mono uppercase tracking-wide">
              We know your tools. We speak your logic.
            </p>
            <p className="text-lg text-dark-text-secondary">
              We specialize in exporting and evolving logic, data, and UI flows from modern low-code and generative platforms:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-12">
            {/* Platforms We Migrate From */}
            <Card className="bg-dark-bg border-dark-border hover:border-purple/50 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-gradient-purple">
                  ⬅️ Platforms We Liberate You From:
                </h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {lowCodePlatforms.map((platform, index) => (
                    <div 
                      key={index} 
                      className={`rounded-lg p-3 text-center text-sm font-mono uppercase tracking-wider transition-all hover:scale-105 ${
                        ['Lovable', 'Cursor', 'Base44'].includes(platform) 
                          ? 'bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 text-cyan glow-cyan' 
                          : 'bg-dark-surface border border-dark-border text-dark-text-secondary hover:text-cyan hover:border-cyan/30'
                      }`}
                    >
                      {platform}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-dark-text-muted font-mono">
                  → We extract workflows, data, and backend logic — and convert to production-grade systems.
                </p>
              </CardContent>
            </Card>

            {/* Tech We Deploy To */}
            <Card className="bg-dark-bg border-dark-border hover:border-cyan/50 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold mb-6 text-gradient-cyan">
                  ➡️ Tech We Rebuild You Onto:
                </h3>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {techStack.map((tech, index) => (
                    <div 
                      key={index} 
                      className="bg-gradient-to-r from-cyan/10 to-purple/10 border border-cyan/20 rounded-lg p-3 text-sm font-mono text-cyan hover:border-cyan/50 transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-dark-text-muted font-mono">
                  → You get infra built like a startup from 2025. Not a prototype from 2022.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-cyan/10 to-purple/10 py-8 px-6 rounded-lg border border-cyan/20">
            <p className="text-lg font-medium italic mb-4 text-gradient-cyan font-display">
              "If you started on a modern low-code builder — we've probably already migrated from it. We don't judge your tools. We upgrade your outcomes."
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-cyan/30 text-cyan hover:bg-cyan/10 font-mono uppercase tracking-wide"
            >
              → MIGRATE MY APP →
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-r from-dark-surface via-dark-bg to-dark-surface border border-cyan/20 animate-scale-up glow-cyan">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-display font-bold mb-6 text-gradient-cyan">
                  From Bubble MVP to $1.5M ARR in 90 Days
                </h2>
                <p className="text-lg mb-8 text-dark-text-secondary text-pretty">
                  A global B2B startup came to us with a Bubble MVP. We transitioned it into a React + Supabase system with full auth, billing, email infrastructure, and metrics observability. They closed their first Fortune 100 client within 60 days of launch.
                </p>
                <blockquote className="text-2xl font-medium italic mb-4 text-gradient-purple font-display">
                  "We thought we were just validating. Turns out we were building a real business — and these guys made it happen."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-5xl font-display font-bold mb-6">
              🚨 <span className="text-gradient-purple">AI Code Audit</span>
            </h2>
            <p className="text-xl text-dark-text-secondary mb-8">
              Upload your app export or give us read access — we'll return a free 24h report covering:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {auditChecklist.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-dark-bg p-4 rounded-lg border border-dark-border hover:border-cyan/30 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-cyan flex-shrink-0" />
                  <span className="font-medium font-mono text-sm uppercase tracking-wide">{item}</span>
                </div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="text-lg px-10 py-8 group bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide animate-pulse-glow"
            >
              🔥 RUN FREE AI CODE AUDIT
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-5xl font-display font-bold mb-6">Ready to Scale Your Vision?</h2>
              <p className="text-lg text-dark-text-secondary">
                Get a free AI code audit today and discover how to transform your prototype into enterprise-grade infrastructure.
              </p>
            </div>
            
            <Card className="bg-dark-surface border-dark-border animate-scale-up hover:glow-cyan transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        className="bg-dark-bg border-dark-border text-dark-text-primary focus:border-cyan"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Email</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className="bg-dark-bg border-dark-border text-dark-text-primary focus:border-cyan"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Platform Used</label>
                    <Input
                      value={formData.platform}
                      onChange={(e) => handleInputChange("platform", e.target.value)}
                      placeholder="e.g., Lovable, Cursor, Bubble, Webflow"
                      className="bg-dark-bg border-dark-border text-dark-text-primary focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Brief App Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Tell us about your app, current challenges, and what you're hoping to achieve..."
                      rows={4}
                      className="bg-dark-bg border-dark-border text-dark-text-primary focus:border-cyan resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide py-6"
                  >
                    BOOK FREE REVIEW CALL
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-dark-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient-cyan">Break the Limit</h3>
              <p className="text-dark-text-secondary text-sm mb-4 font-mono uppercase tracking-wide">
                Built fast. Rebuilt right. Scaled forever.
              </p>
              <p className="text-dark-text-muted text-xs">
                We transform no-code MVPs into AI-native business infrastructure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-mono uppercase tracking-wide text-cyan">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-dark-text-secondary hover:text-cyan transition-colors">Services</a></li>
                <li><a href="#platforms" className="text-dark-text-secondary hover:text-cyan transition-colors">Platforms</a></li>
                <li><a href="#contact" className="text-dark-text-secondary hover:text-cyan transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-mono uppercase tracking-wide text-cyan">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-mono uppercase tracking-wide text-cyan">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-dark-border pt-8 text-center text-sm text-dark-text-muted">
            <p>&copy; 2024 Break the Limit. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide animate-pulse-glow shadow-2xl"
          size="lg"
        >
          🔥 FREE AUDIT
        </Button>
      </div>
    </div>
  );
};

export default Index;
