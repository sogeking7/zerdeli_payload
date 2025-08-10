import ExamBanner from '@/components/exambanner-section'
import WhyZerdeliCarousel from '@/features/main/WhyZerdeliCarousel'
import FaqSection from '@/features/main/FaqSection'
import AdditionSections from '@/features/main/AdditionSection'
import HeroSection from '@/features/main/HeroSection'
import NumbersSection from '@/features/main/NumbersSection'
import LifeAtZisWrapper from '@/features/main/LifeAtZisWrapper'

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyZerdeliCarousel />
      <NumbersSection />
      <AdditionSections />
      <LifeAtZisWrapper />
      <FaqSection />
      <ExamBanner />
    </>
  )
}
