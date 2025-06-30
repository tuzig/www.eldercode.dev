
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

  const confidenceStats = [
    "Used by startups scaling beyond Bubble & Glide",
    "Deployed on AWS, Vercel, and Firebase", 
    "Built to withstand 10k+ concurrent users from Day 1"
  ];

  const services = [
    {
      icon: Code2,
      title: "Code Rebuilds",
      description: "We convert no-code logic into structured codebases (React, Next.js, Node, Firebase, Supabase)."
    },
    {
      icon: Zap,
      title: "DevOps & CI/CD Pipelines",
      description: "Auto deploys, rollback safety, GitHub Actions, Vercel, Amplify."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "We audit your app and rebuild with OWASP, SOC2, GDPR in mind."
    },
    {
      icon: BarChart3,
      title: "Performance Scaling",
      description: "Optimize cold starts, DB queries, edge caching, queues."
    },
    {
      icon: Users,
      title: "UX-Perfect Replatforming",
      description: "Maintain design fidelity while unlocking full flexibility."
    }
  ];

  const lowCodePlatforms = [
    "Bubble", "Adalo", "Webflow", "Glide", "Softr", "Framer", "Bravo Studio", "Thunkable"
  ];

  const techStack = [
    "AWS (EC2, S3, RDS)", "Supabase", "Firebase", "Vercel", "Cloudflare", 
    "Postgres", "Stripe", "Auth0", "Clerk", "Segment", "Amplitude", "OpenAI", "GitHub CI/CD"
  ];

  const affirmations = [
    "Your MVP got you customers. Now it needs to survive them.",
    "No-code isn't a dead-end. It's your launchpad.",
    "You don't need to rewrite everything. Just the parts that matter.",
    "Start with speed. Scale with structure."
  ];

  const auditChecklist = [
    "Code architecture issues",
    "Security risks", 
    "Scaling bottlenecks",
    "Database strategy suggestions",
    "Migration pathway options"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-surface-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-brand-700">
              From Prototype to Global-Scale
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-surface-600 hover:text-brand-600 transition-colors">Services</a>
              <a href="#integrations" className="text-surface-600 hover:text-brand-600 transition-colors">Tech Stack</a>
              <a href="#contact" className="text-surface-600 hover:text-brand-600 transition-colors">Contact</a>
              <Button size="sm">Get Free Audit</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center bg-brand-50 border border-brand-200 rounded-full px-4 py-2 text-sm text-brand-700 mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Your No-Code MVP Was Just the Beginning
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-surface-900 mb-6 text-balance">
              Turn Your App Into a <span className="text-brand-600">Real Business Infrastructure</span>
            </h1>
            <p className="text-xl text-surface-600 mb-8 max-w-3xl mx-auto text-pretty">
              We help founders transition from low-code platforms to production-ready, scalable software with full DevOps, security, and performance architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6 group">
                Get a Free Code & Security Audit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Strip */}
      <section className="py-12 bg-brand-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {confidenceStats.map((stat, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <p className="font-medium">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">We Make Your Product Real</h2>
            <p className="text-lg text-surface-600">From fragile prototypes to hardened platforms — with speed, transparency, and bulletproof architecture.</p>
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
              "You built fast. Now we help you grow without breaking."
            </p>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">We Speak Both Languages: Low-Code + Full Stack</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Low-Code Platforms */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-surface-900 mb-6">Low-Code Platforms We Transition From:</h3>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {lowCodePlatforms.map((platform, index) => (
                    <div key={index} className="bg-surface-100 rounded-lg p-3 text-center text-sm font-medium">
                      {platform}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">We export, document, and migrate your app's logic and data</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">We respect your original flow, but rebuild for scale</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">We can gradually swap components (e.g., database first, then frontend)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-surface-900 mb-6">Technologies We Deploy To:</h3>
                <div className="grid grid-cols-1 gap-2 mb-6">
                  {techStack.map((tech, index) => (
                    <div key={index} className="bg-brand-50 border border-brand-200 rounded-lg p-3 text-sm font-medium text-brand-800">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">Deploy-ready infrastructure built for real traffic</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">Modern auth, observability, async flows, and API integrations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-surface-600">We document every step for internal handover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              → View Full Tech Stack Compatibility
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
                <h2 className="text-3xl font-bold mb-6">From Bubble to a 7-Figure SaaS in 90 Days</h2>
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

      {/* Affirmations Section */}
      <section className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">From Idea → Impact → Infrastructure</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {affirmations.map((affirmation, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8 text-center">
                  <p className="text-lg font-medium text-surface-900">{affirmation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-4xl font-bold text-surface-900 mb-6">Not Sure If You're Ready to Scale?</h2>
            <p className="text-xl text-surface-600 mb-8">
              Upload your app export or give us read access — we'll return a free 24h report covering:
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {auditChecklist.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-surface-50 p-4 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  <span className="text-surface-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 group">
              Run Free Code Analysis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-4xl font-bold text-surface-900 mb-6">Ready to Scale Your Vision?</h2>
              <p className="text-lg text-surface-600">
                Get a free code analysis today and discover how to transform your prototype into enterprise-grade infrastructure.
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
                    <label className="text-sm font-medium text-surface-900 mb-2 block">Brief App Description</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Tell us about your app, current challenges, and what you're hoping to achieve..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
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
              <h3 className="text-2xl font-bold mb-4">From Prototype to Global-Scale</h3>
              <p className="text-surface-300 text-sm">
                We transform no-code MVPs into real business infrastructure — fast, secure, and built to scale worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-surface-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#integrations" className="text-surface-300 hover:text-white transition-colors">Tech Stack</a></li>
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
            <p>&copy; 2024 From Prototype to Global-Scale. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
