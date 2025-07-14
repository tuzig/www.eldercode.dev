
import "@/index.css";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AffirmationStrip from "@/components/sections/AffirmationStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import PlatformsSection from "@/components/sections/PlatformsSection";
import CaseStudySection from "@/components/sections/CaseStudySection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import LeadMagnetSection from "@/components/sections/LeadMagnetSection";
import RFQSection from "@/components/sections/RFQSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
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

      <Header />
      <HeroSection />
      <AffirmationStrip />
      <ServicesSection />
      <PlatformsSection />
      <CaseStudySection />
      <WhyUsSection />
      <LeadMagnetSection />
      <RFQSection />
      <Footer />
    </div>
  );
};

export default Index;
