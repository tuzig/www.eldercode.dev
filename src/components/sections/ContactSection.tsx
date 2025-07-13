
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    userJourneys: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => navigate("/submission-success"))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="py-20 bg-dark-surface border-t border-dark-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-5xl font-display font-bold mb-6">Ready to Scale Your Prototype?</h2>
            <p className="text-lg text-dark-text-secondary">
              Get a free AI code audit today and discover how to transform your prototype into enterprise-grade infrastructure.
            </p>
          </div>
          
          <Card className="bg-dark-bg border-dark-border animate-scale-up hover:glow-cyan transition-all duration-300">
            <CardContent className="p-8">
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Email</label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="platform" className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">Platform Used</label>
                  <Input
                    id="platform"
                    name="platform"
                    placeholder="e.g., Lovable, Cursor, Bubble, Webflow"
                    className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan"
                    value={formData.platform}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="userJourneys" className="text-sm font-mono font-medium text-cyan mb-2 block uppercase tracking-wide">User Journeys</label>
                  <div className="mb-3 p-3 bg-dark-surface border border-dark-border rounded-lg text-xs text-dark-text-secondary space-y-2">
                    <p className="font-bold text-cyan">Describe the core user flows of your application.</p>
                    <p>This helps us understand the complexity and critical paths of your app. Please be as detailed as possible.</p>
                    <p className="font-semibold">For example:</p>
                    <ul className="list-disc list-inside pl-2 space-y-1">
                      <li><strong className="text-dark-text-primary">E-commerce:</strong> User searches for product → adds to cart → proceeds to checkout → enters shipping info → pays with credit card → receives order confirmation.</li>
                      <li><strong className="text-dark-text-primary">Social App:</strong> User signs up → completes profile → searches for friends → sends a connection request → posts a status update.</li>
                      <li><strong className="text-dark-text-primary">SaaS Tool:</strong> User creates an account → creates a new project → invites team members → assigns tasks → tracks progress on a dashboard.</li>
                    </ul>
                  </div>
                  <Textarea
                    id="userJourneys"
                    name="userJourneys"
                    placeholder="Describe the key flows in your app"
                    rows={3}
                    className="bg-dark-surface border-dark-border text-dark-text-primary focus:border-cyan resize-none"
                    value={formData.userJourneys}
                    onChange={handleChange}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-cyan to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-dark-bg font-mono uppercase tracking-wide py-6"
                  aria-label="Request Analysis and Quote"
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
