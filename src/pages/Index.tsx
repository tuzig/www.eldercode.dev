
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
  Rocket
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
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-brand-700">
              Break the Limit
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-surface-600 hover:text-brand-600 transition-colors">Services</a>
              <a href="#platforms" className="text-surface-600 hover:text-brand-600 transition-colors">Platforms</a>
              <a href="#contact" className="text-surface-600 hover:text-brand-600 transition-colors">Contact</a>
              <Button size="sm" className="bg-gradient-to-r from-brand-600 to-brand-700">🔥 AI Audit</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 rounded-full px-4 py-2 text-sm text-brand-700 mb-8">
              <Rocket className="h-4 w-4 mr-2" />
              Welcome to the AI Infrastructure Era
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-surface-900 mb-6 text-balance">
              From No-Code to <span className="text-brand-600">Global-Scale</span>
            </h1>
            <p className="text-xl text-surface-600 mb-8 max-w-3xl mx-auto text-pretty">
              You shipped an MVP in days. Now you're facing real traffic, real users, and real limits. We help you rebuild with AI-native infrastructure — fast, modular, and production-grade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 group bg-gradient-to-r from-brand-600 to-brand-700">
                🔥 Run Free AI Code Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-sm text-surface-500 max-w-sm">
                Security risks. Scaling gaps. DevOps blindspots. Delivered in 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolution Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">The Revolution Is Here</h2>
            <p className="text-xl mb-8 font-medium">This isn't dev services. This is an evolution pipeline.</p>
            <blockquote className="text-2xl italic opacity-90 text-pretty">
              "We don't just replace your MVP — we upgrade your entire product genome. From UX-preserving rebuilds to CI/CD, observability, and AI-augmented workflows."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Affirmation Strip */}
      <section className="py-12 bg-surface-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {affirmations.map((affirmation, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="font-medium text-sm">{affirmation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">What We Actually Do</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

          <div className="text-center bg-surface-50 py-8 px-6 rounded-lg">
            <p className="text-xl font-medium text-surface-900 italic">
              "You don't need a full rewrite — just the right evolution."
            </p>
          </div>
        </div>
      </section>

      {/* Low-Code Platforms Section */}
      <section id="platforms" className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">Low-Code Platforms We Support</h2>
            <p className="text-xl text-surface-600 mb-8 font-medium">We know your tools. We speak your logic.</p>
            <p className="text-lg text-surface-600">
              We specialize in exporting and evolving logic, data, and UI flows from modern low-code and generative platforms:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            {/* Platforms We Migrate From */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-surface-900 mb-6">⬅️ Platforms We Liberate You From:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {lowCodePlatforms.map((platform, index) => (
                    <div key={index} className={`rounded-lg p-3 text-center text-sm font-medium ${
                      ['Lovable', 'Cursor', 'Base44'].includes(platform) 
                        ? 'bg-gradient-to-r from-brand-50 to-purple-50 border border-brand-200 text-brand-800' 
                        : 'bg-surface-100 text-surface-700'
                    }`}>
                      {platform}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-surface-600">
                  → We extract workflows, data, and backend logic — and convert to production-grade systems.
                </p>
              </CardContent>
            </Card>

            {/* Tech We Deploy To */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-surface-900 mb-6">➡️ Tech We Rebuild You Onto:</h3>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {techStack.map((tech, index) => (
                    <div key={index} className="bg-brand-50 border border-brand-200 rounded-lg p-3 text-sm font-medium text-brand-800">
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-surface-600">
                  → You get infra built like a startup from 2025. Not a prototype from 2022.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center bg-gradient-to-r from-brand-50 to-purple-50 py-8 px-6 rounded-lg border border-brand-200">
            <p className="text-lg font-medium text-surface-900 italic mb-4">
              "If you started on a modern low-code builder — we've probably already migrated from it. We don't judge your tools. We upgrade your outcomes."
            </p>
            <Button variant="outline" size="lg" className="border-brand-300 text-brand-700 hover:bg-brand-50">
              → Migrate My App →
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-brand-600 to-brand-700 text-white animate-scale-up">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">From Bubble MVP to $1.5M ARR in 90 Days</h2>
                <p className="text-lg mb-8 opacity-90 text-pretty">
                  A global B2B startup came to us with a Bubble MVP. We transitioned it into a React + Supabase system with full auth, billing, email infrastructure, and metrics observability. They closed their first Fortune 100 client within 60 days of launch.
                </p>
                <blockquote className="text-2xl font-medium italic mb-4">
                  "We thought we were just validating. Turns out we were building a real business — and these guys made it happen."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">🚨 AI Code Audit</h2>
            <p className="text-xl text-surface-600 mb-8">
              Upload your app export or give us read access — we'll return a free 24h report covering:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {auditChecklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-surface-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 group bg-gradient-to-r from-brand-600 to-brand-700">
              🔥 Run Free AI Code Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold text-surface-900 mb-6">Ready to Scale Your Vision?</h2>
              <p className="text-lg text-surface-600">
                Get a free AI code audit today and discover how to transform your prototype into enterprise-grade infrastructure.
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
                      placeholder="e.g., Lovable, Cursor, Bubble, Webflow"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-surface-900 mb-2 block">Brief App Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Tell us about your app, current challenges, and what you're hoping to achieve..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-brand-600 to-brand-700">
                    Book Free Review Call
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
              <h3 className="text-2xl font-bold mb-4">Break the Limit</h3>
              <p className="text-surface-300 text-sm mb-4">
                Built fast. Rebuilt right. Scaled forever.
              </p>
              <p className="text-surface-400 text-xs">
                We transform no-code MVPs into AI-native business infrastructure.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-surface-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#platforms" className="text-surface-300 hover:text-white transition-colors">Platforms</a></li>
                <li><a href="#contact" className="text-surface-300 hover:text-white transition-colors">Case Studies</a></li>
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
            <p>&copy; 2024 Break the Limit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
