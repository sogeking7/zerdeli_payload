import ExamBanner from '@/components/exambanner-section'
import WhyZerdeliCarousel from '@/features/main/WhyZerdeliCarousel'
import FaqSection from '@/features/main/FaqSection'
import AdditionSections from '@/features/main/AdditionSection'
import HeroSection from '@/features/main/HeroSection'
import NumbersSection from '@/features/main/NumbersSection'
import LifeAtZisWrapper from '@/features/main/LifeAtZisWrapper'
import { Suspense } from 'react'
import NewsListSkeleton from '@/features/news/NewsListSkeletons'

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyZerdeliCarousel />
      <NumbersSection />
      <AdditionSections />
      <Suspense fallback={<NewsListSkeleton length={3} />}>
        <LifeAtZisWrapper />
      </Suspense>
      <FaqSection />
      <ExamBanner />
    </>
  )
}
