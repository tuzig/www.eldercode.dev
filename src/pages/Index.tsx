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
  Cpu,
  Phone,
  Microscope,
  TestTube,
  FileCheck
} from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    personas: "",
    userJourneys: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Analysis Request Submitted!",
      description: "Performance issues. Security risks. Scaling blockers. Delivered in 24h.",
    });
    setFormData({ name: "", email: "", platform: "", personas: "", userJourneys: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const affirmations = [
    "AI accelerates. Architecture secures.",
    "From Lovable to unstoppable.", 
    "We've scaled products that scaled companies.",
    "The shortcut is experience.",
    "Move fast. Don't break production."
  ];

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

  const lowCodePlatforms = [
    "Lovable", "Cursor", "Base44", "Bubble", "Glide", "Adalo", "Webflow", "Softr"
  ];

  const techStack = [
    "Next.js", "React", "Supabase", "Firebase", "AWS", "Vercel", 
    "Clerk", "Stripe", "Segment", "OpenAI"
  ];

  const auditChecklist = [
    "Performance issues",
    "Security risks", 
    "Scaling blockers",
    "Migration plan",
    "Stack recommendation"
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
              <a href="#platforms" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">Stack</a>
              <a href="#contact" className="text-dark-text-secondary hover:text-cyan transition-colors font-medium">About</a>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide glow-cyan"
              >
                <Microscope className="h-4 w-4 mr-2" />
                REQUEST ANALYSIS
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
              <span className="font-mono uppercase tracking-wider">You Built Fast. Now Scale With Experience.</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-balance">
              You Built It <span className="text-gradient-cyan animate-glitch">Fast</span>. Now Make It <span className="text-gradient-purple">Unstoppable</span>.
            </h1>
            
            <p className="text-xl md:text-2xl text-dark-text-secondary mb-8 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
              Our team of senior software engineers, architects, and DevOps experts transform no-code apps into real infrastructure — fast, secure, and scalable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-8 group bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide animate-pulse-glow"
              >
                <Microscope className="h-6 w-6 mr-3" />
                REQUEST ANALYSIS & QUOTE
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-8 border-cyan/30 text-cyan hover:bg-cyan/10 font-mono uppercase tracking-wide"
              >
                <Phone className="mr-3 h-5 w-5" />
                SCHEDULE STRATEGY CALL
              </Button>
            </div>
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

      {/* Low-Code Platforms Section */}
      <section id="platforms" className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-5xl font-display font-bold mb-6">Low-Code We Know Inside-Out</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {lowCodePlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className={`rounded-lg p-4 text-center text-lg font-mono uppercase tracking-wider transition-all hover:scale-105 ${
                    ['Lovable', 'Cursor', 'Base44'].includes(platform) 
                      ? 'bg-gradient-to-r from-cyan/20 to-purple/20 border border-cyan/30 text-cyan glow-cyan' 
                      : 'bg-dark-bg border border-dark-border text-dark-text-secondary hover:text-cyan hover:border-cyan/30'
                  }`}
                >
                  ✅ {platform}
                  {platform === 'Lovable' && <span className="block text-xs mt-1 opacity-80">app exports, logic parsing, AI build-to-code mapping</span>}
                  {platform === 'Cursor' && <span className="block text-xs mt-1 opacity-80">prompt chains, AI logic workflows, VS Code-based apps</span>}
                  {platform === 'Base44' && <span className="block text-xs mt-1 opacity-80">migration to Firebase/Vercel with clean backend-first structure</span>}
                  {['Bubble', 'Glide', 'Adalo', 'Webflow', 'Softr'].includes(platform) && <span className="block text-xs mt-1 opacity-80">100+ apps evolved</span>}
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-cyan/10 to-purple/10 py-8 px-6 rounded-lg border border-cyan/20">
              <p className="text-lg font-medium italic mb-4 text-gradient-cyan font-display">
                "If you built on it, we've probably rebuilt from it. Our AI tooling can read your logic. Our engineers turn it into code your next team will thank you for."
              </p>
            </div>
          </div>

          {/* Infra We Deploy Onto */}
          <div className="max-w-7xl mx-auto">
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
                  From Bubble MVP → 7-Figure ARR → Zero Downtime Migration
                </h2>
                <p className="text-lg mb-8 text-dark-text-secondary text-pretty">
                  They came to us with traction but crashes. We rebuilt in 30 days on a clean Supabase stack, plugged in Stripe Connect, and shipped an async-notification engine. Zero downtime. First enterprise deal signed 2 weeks later.
                </p>
                <div className="bg-dark-bg border border-dark-border rounded-lg p-6 font-mono">
                  <Terminal className="h-6 w-6 text-cyan mb-2 mx-auto" />
                  <blockquote className="text-xl font-medium text-gradient-purple">
                    'They made us look like we had an engineering team of 20. We had 2.'
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Doing This Section */}
      <section className="py-20 bg-dark-surface border-y border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-display font-bold mb-12">Why We're Doing This</h2>
            
            <div className="text-left bg-dark-bg p-8 rounded-lg border border-dark-border mb-8">
              <p className="text-lg mb-4 text-dark-text-secondary">
                Because we love this sh*t.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                Benny's been coding since 1982 — back when floppy disks were high-tech and you had to earn every line of RAM. He sold a software company to HP in 2007. He's still shipping code daily.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                We've built through waterfall, agile, microservices, and now the age of AI. This is the most exciting era of software ever — and we're here to shape it.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                We believe in founders. We believe in fast. But we <em>know</em> that what wins is clean architecture, human-led strategy, and production-level discipline.
              </p>
              <p className="text-base text-dark-text-secondary">
                This isn't just work. This is craft. And AI's just the newest brush we've mastered.
              </p>
            </div>

            <blockquote className="text-3xl italic text-gradient-purple font-display">
              "We're not here to refactor your app. We're here to scale your company."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
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
              >
                <Microscope className="h-6 w-6 mr-3" />
                REQUEST ANALYSIS & QUOTE
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-8 border-cyan/30 text-cyan hover:bg-cyan/10 font-mono uppercase tracking-wide"
              >
                👨‍💻 SCHEDULE STRATEGY CALL
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-surface border-t border-dark-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-5xl font-display font-bold mb-6">Ready to Scale Your Vision?</h2>
              <p className="text-lg text-dark-text-secondary">
                Get a free AI code audit today and discover how to transform your prototype into enterprise-grade infrastructure.
              </p>
            </div>
            
            <Card className="bg-dark-bg border-dark-border animate-scale-up hover:glow-cyan transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your name"
                        className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
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
                        className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
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
                      className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Personas</label>
                    <div className="mb-3 p-3 bg-dark-surface border border-dark-border rounded-lg text-xs text-dark-text-secondary">
                      <p><strong className="text-cyan">Who are your users?</strong> (e.g., "busy professionals", "small business owners", "students")</p>
                    </div>
                    <Textarea
                      value={formData.personas}
                      onChange={(e) => handleInputChange("personas", e.target.value)}
                      placeholder="Describe your target users"
                      rows={3}
                      className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan resize-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">User Journeys</label>
                    <div className="mb-3 p-3 bg-dark-surface border border-dark-border rounded-lg text-xs text-dark-text-secondary">
                      <p><strong className="text-cyan">What steps do they take in your app?</strong> (e.g., "sign up → create profile → book appointment → pay → receive confirmation")</p>
                    </div>
                    <Textarea
                      value={formData.userJourneys}
                      onChange={(e) => handleInputChange("userJourneys", e.target.value)}
                      placeholder="Describe the key workflows in your app"
                      rows={3}
                      className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide py-6"
                  >
                    REQUEST ANALYSIS & QUOTE
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-bg border-t border-dark-border py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gradient-cyan">Break the Limit</h3>
              <p className="text-dark-text-secondary text-sm mb-4 font-mono uppercase tracking-wide">
                Built fast. Rebuilt right. Scaled forever.
              </p>
              <p className="text-dark-text-muted text-xs">
                We transform no-code MVPs into production-grade infrastructure with senior engineering expertise.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-mono uppercase tracking-wide text-cyan">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-dark-text-secondary hover:text-cyan transition-colors">Services</a></li>
                <li><a href="#platforms" className="text-dark-text-secondary hover:text-cyan transition-colors">Stack</a></li>
                <li><a href="#contact" className="text-dark-text-secondary hover:text-cyan transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 font-mono uppercase tracking-wide text-cyan">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">Privacy</a></li>
                <li><a href="#" className="text-dark-text-secondary hover:text-cyan transition-colors">Terms</a></li>
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
    </div>
  );
};

export default Index;
