'use client'
import * as React from 'react'

import Container from '@/components/custom/Container'
import { NewsCard } from '@/components/cards/NewsCard'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'
import Image, { StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'

const newsData = [
  {
    bgColor: 'bg-[#edffd6]',
    childImageSrc: '/news-img1.png',
    description:
      'В благотворительной ярмарке, прошедшей в первую неделю Рамадана, приняли участие 17 классов.',
  },
  {
    bgColor: 'bg-[#fffbe5]',
    childImageSrc: '/news-img2.png',
    description:
      'В благотворительной ярмарке, прошедшей в первую неделю Рамадана, приняли участие 17 классов.',
  },
]
export default function LifeAtZisCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Container>
      <div className="relative flex flex-col gap-6 items-end mb-6">
        <div className="text-center w-full">
          <h2 className="text-2xl md:text-5xl">
            <span className="text-black">Жизнь в </span>
            <span className="text-[#4aa30a]">ZIS</span>
          </h2>
          <p className="md:text-2xl font-light mt-2">Новости, анонсы, мероприятия</p>
        </div>
        <Link href="/news">
          <Button variant="link">
            <span>Все новости</span>
            <ArrowRight />
          </Button>
        </Link>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {newsData.map((news, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2  pl-2 md:pl-4 ">
              <NewsCard
                key={idx}
                index={idx}
                childImageSrc={news.childImageSrc}
                description={news.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-auto flex py-6 gap-2 justify-center">
        {newsData.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              'rounded-full size-2',
              current === idx + 1 ? 'bg-[#4AA30A]' : 'bg-[#E3E3E3]',
            )}
          ></div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mb-12"></div>
    </Container>
  )
}
