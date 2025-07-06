
import { Card, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

const CaseStudySection = () => {
  return (
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
  );
};

export default CaseStudySection;
