import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import HeroSection from '@/components/hero-section'
import NumbersSection from '@/components/numbers-section'
import ExamBanner from '@/components/exambanner-section'
import Footer from '@/components/footer-section'
import WhyZerdeliCarousel from '@/features/main/WhyZerdeliCarousel'
import LifeAtZisCarousel from '@/features/main/LifeAtZisCarousel'
import FaqSection from '@/features/main/FaqSection'
import AdditionSections from '@/features/main/AdditionSection'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div>
      <HeroSection />
      <WhyZerdeliCarousel />
      <NumbersSection />
      <AdditionSections />
      <LifeAtZisCarousel />
      <FaqSection />
      <ExamBanner />
      <Footer />
    </div>
  )
}
