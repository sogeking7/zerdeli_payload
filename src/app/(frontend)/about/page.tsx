import AboutHeroSection from '@/features/about/AboutHeroSection'
import AchivementsSection from '@/features/about/AchivementsSection'
import FoodSection from '@/features/about/FoodsSection'
import MissionSection from '@/features/about/MissionSection'
import StandardsSection from '@/features/about/StandardsSection'
import ZerdeliPoint from '@/features/about/ZerdeliPoint'
import AdditionSections from '@/features/main/AdditionSection'
import FaqSection from '@/features/main/FaqSection'

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <AchivementsSection />
      <StandardsSection />
      <AdditionSections />
      <ZerdeliPoint />
      <FoodSection />
      <FaqSection />
      <div></div>
    </>
  )
}
