
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
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

  return (
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
  );
};

export default ContactSection;
