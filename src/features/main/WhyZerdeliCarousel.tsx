'use client'

import * as React from 'react'
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
import Review1 from '@/../public/review-1.webp'
import Review2 from '@/../public/review-2.webp'
import Review3 from '@/../public/review-3.webp'
import Review4 from '@/../public/review-4.webp'
import Container from '@/components/custom/Container'

interface Review {
  title: string
  img: StaticImageData
  description: string
}
const reviews: Review[] = [
  {
    img: Review1,
    title: 'Прозрачная система, контроль качества ',
    description: 'Система ежемесячной оценки и контроля качества',
  },
  {
    img: Review2,
    title: 'Лучшие учителя — ключ к качественному образованию',
    description: 'Выпускники Болашак',
  },
  {
    img: Review3,
    title: 'Be the best, win the grant!',
    description: 'Система мотивации лучших учеников',
  },
  {
    img: Review4,
    title: 'Авторская программа и книги',
    description: 'Сильная математика, углубленная  логика',
  },
]

export default function WhyZerdeliCarousel() {
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
      <div>
        <h2 className="font-normal mt-10 mb-6 max-md:text-left text-2xl md:text-5xl">
          Почему <span>Zerdeli</span>?
        </h2>{' '}
      </div>
      <Carousel setApi={setApi} className="relative">
        <CarouselContent className="-ml-2 md:-ml-4">
          {reviews.map((i, idx) => (
            <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4 pl-2 md:pl-4 ">
              <div className="space-y-4 h-full flex flex-col">
                <Image
                  src={i.img}
                  alt={'review'}
                  width={600}
                  className="rounded-2xl"
                  height={300}
                />
                <h3 className="text-black w-full font-normal">{i.title}</h3>
                <p className=" text-black/60 w-full text-sm">{i.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -top-10 left-[calc(100%-32px-32px-8px)]" />
        <CarouselNext className="absolute -top-10 right-0" />
      </Carousel>
      <div className="mx-auto flex py-6 gap-2 lg:hidden justify-center">
        {reviews.map((_, idx) => (
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
  )
}
