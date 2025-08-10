'use client'

import Container from '@/components/custom/Container'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import useCarousel from '@/hooks/useCarousel'
import { useTranslations } from 'next-intl'
import { News } from '@/payload-types'
import NewsCard from '@/features/news/NewsCard'

export default function LifeAtZisCarousel({ news }: { news: News[] }) {
  const { setApi, current } = useCarousel()
  const t = useTranslations('HomePage')

  return (
    <section id="life-at-zis">
      <Container>
        <div className="relative flex flex-col gap-6 items-end mb-6">
          <div className="text-center w-full">
            <h2 className="text-2xl md:text-5xl">
              <span className="text-black">{t('life.heading')}</span>
            </h2>
            <p className="md:text-2xl font-light mt-2">{t('life.subheading')}</p>
          </div>
          <Link href="/news">
            <Button variant="link">
              <span>{t('life.allNewsButton')}</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>
        <Carousel setApi={setApi}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {news.map((article, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2  pl-2 md:pl-4 ">
                <NewsCard news={article} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mx-auto flex py-6 gap-2 justify-center">
          {news.map((_, idx) => (
            <div
              key={idx}
              className={cn(
                'rounded-full size-2',
                current === idx + 1 ? 'bg-[#4AA30A]' : 'bg-[#E3E3E3]',
              )}
            ></div>
          ))}
        </div>
      </Container>
    </section>
  )
}
