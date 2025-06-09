
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { PricingPlans } from "@/components/PricingPlans";
import { Services } from "@/components/Services";
import { CountrySelector } from "@/components/CountrySelector";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <PricingPlans />
      <CountrySelector />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
