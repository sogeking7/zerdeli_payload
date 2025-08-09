import ExamBanner from '@/components/exambanner-section'
import WhyZerdeliCarousel from '@/features/main/WhyZerdeliCarousel'
import LifeAtZisCarousel from '@/features/main/LifeAtZisCarousel'
import FaqSection from '@/features/main/FaqSection'
import AdditionSections from '@/features/main/AdditionSection'
import HeroSection from '@/features/main/HeroSection'
import NumbersSection from '@/features/main/NumbersSection'

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyZerdeliCarousel />
      <NumbersSection />
      <AdditionSections />
      <LifeAtZisCarousel />
      <FaqSection />
      <ExamBanner />
    </>
  )
}
