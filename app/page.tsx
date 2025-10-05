import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { WorkingProcessSection } from "@/components/working-process-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <CTASection />
        <CaseStudiesSection />
        <WorkingProcessSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
