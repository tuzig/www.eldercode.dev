
const WhyUsSection = () => {
  return (
    <section className="py-20 bg-dark-surface border-y border-dark-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-display font-bold mb-12">Why We're Doing This</h2>
          
          <div className="text-left bg-dark-bg p-8 rounded-lg border border-dark-border mb-8 relative overflow-hidden">
            {/* Animated Spiral Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="spiral-bg animate-spin-slow"></div>
            </div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10">
              <p className="text-lg mb-4 text-dark-text-secondary">
                Because we love this sh*t.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                Benny's been coding since 1982 — back when you soldered cables to transfer files between Unix stations and every byte of memory had to be earned. He's lived through the evolution from those early computing days to helping startups scale up with proper testing infrastructure.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                Back in the last millennium, Benny developed a software testing tool called "The Cloud" and built a company around it, which was later sold. A testing tools company that helped teams ship reliable code faster. He's still shipping code daily, still obsessed with quality.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                We've worked on mainframe VMS, Unix, Mac, Windows, Docker, cloud platforms, and now AI. This is the most exciting era of software ever — and we're here to shape it.
              </p>
              <p className="text-base mb-4 text-dark-text-secondary">
                We believe in founders. We believe in fast. But we <em>know</em> that what wins is clean architecture, human-led strategy, and production-level discipline.
              </p>
              <p className="text-base text-dark-text-secondary">
                This isn't just work. This is craft. And AI's just the newest brush we've mastered.
              </p>
            </div>
          </div>

          <blockquote className="text-3xl italic text-gradient-purple font-display">
            "We're not here to refactor your app. We're here to scale your company."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
