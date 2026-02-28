import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import AboutSection from "@/components/home/AboutSection";
import AcademicsSection from "@/components/home/AcademicsSection";
import AdmissionsSection from "@/components/home/AdmissionsSection";
import InstitutionsSection from "@/components/home/InstitutionsSection";
import PlacementsSection from "@/components/home/PlacementsSection";
import ResearchSection from "@/components/home/ResearchSection";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GallerySection from "@/components/home/GallerySection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <AcademicsSection />
      <AdmissionsSection />
      <InstitutionsSection />
      <PlacementsSection />
      <ResearchSection />
      <NewsSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </Layout>
  );
};

export default Index;
