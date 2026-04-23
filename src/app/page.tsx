import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AppDevSection from "@/components/AppDevSection";
import WebDesignSection from "@/components/WebDesignSection";
import GraphicsSection from "@/components/GraphicsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <ServicesSection />
      <AppDevSection />
      <WebDesignSection />
      <GraphicsSection />
    </main>
  );
}
