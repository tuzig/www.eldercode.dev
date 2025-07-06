
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
