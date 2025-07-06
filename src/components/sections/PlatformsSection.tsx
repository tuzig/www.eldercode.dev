
const PlatformsSection = () => {
  const lowCodePlatforms = [
    "Lovable", "Cursor", "Base44", "Bubble", "Glide", "Adalo", "Webflow", "Softr"
  ];

  return (
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
      </div>
    </section>
  );
};

export default PlatformsSection;
