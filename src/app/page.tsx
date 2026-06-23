import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesPreview from "@/components/ServicesPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <ServicesPreview />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
