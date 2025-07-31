import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import SchoolHeader from '@/components/school-header'
import HeroSection from '@/components/hero-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Description } from '@radix-ui/react-dialog'
import NumbersSection from '@/components/numbers-section'
import AdditionSections from '@/components/addition-sections'
import LifeAtZisSection from '@/components/lifeatziscction'
import FaqSection from '@/components/faq-section'
import ExamBanner from '@/components/exambanner-section'
import Footer from '@/components/footer-section'

interface Review {
  title: string
  description: string
}
const reviews: Review[] = [
  {
    title: 'Прозрачная система, контроль качества ',
    description: 'Система ежемесячной оценки и контроля качества',
  },
  {
    title: 'Лучшие учителя — ключ к качественному образованию',
    description: 'Выпускники Болашак',
  },
  {
    title: 'Be the best, win the grant!',
    description: 'Система мотивации лучших учеников',
  },
  {
    title: 'Авторская программа и книги',
    description: 'Сильная математика, углубленная  логика',
  },
]

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div>
      <HeroSection />
      <TestimonialsSection reviews={reviews} />
      <NumbersSection />
      <AdditionSections />
      <LifeAtZisSection/>
      <FaqSection/>
      <ExamBanner/>
      <Footer/>
    </div>
  )
}
