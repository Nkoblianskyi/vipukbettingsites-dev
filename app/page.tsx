import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { OurChoiceSection } from "@/components/our-choice-section"
import { RatingSection } from "@/components/rating-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { InfoSections } from "@/components/info-sections"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background" aria-label="VIP UK Betting Sites — Homepage">
      <Header />
      <Hero />
      <RatingSection />
      <HowItWorksSection />
      <InfoSections />
      <OurChoiceSection />
    </main>
  )
}
