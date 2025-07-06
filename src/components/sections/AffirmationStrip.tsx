
const AffirmationStrip = () => {
  const affirmations = [
    "AI accelerates. Architecture secures.",
    "From Lovable to unstoppable.", 
    "We've scaled products that scaled companies.",
    "The shortcut is experience.",
    "Move fast. Don't break production."
  ];

  return (
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
  );
};

export default AffirmationStrip;
