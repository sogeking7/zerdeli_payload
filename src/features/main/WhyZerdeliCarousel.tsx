'use client'

import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Container from '@/components/custom/Container'
import useCarousel from '@/hooks/useCarousel'
import { useTranslations } from 'next-intl'

const reviews = [
  { img: '/main/reviews/review-1.webp' },
  { img: '/main/reviews/review-2.webp' },
  { img: '/main/reviews/review-3.webp' },
  { img: '/main/reviews/review-4.webp' },
] as const

export default function WhyZerdeliCarousel() {
  const { setApi, current } = useCarousel()
  const t = useTranslations('HomePage')

  return (
    <section id="why-zis">
      <Container>
        <h2 className="mb-6 max-md:text-left text-2xl md:text-5xl">{t('why.heading')}</h2>
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
                  <h3 className="text-black w-full font-normal">{t(`why.reviews.${idx}.title`)}</h3>
                  <p className=" text-black/60 w-full text-sm">
                    {t(`why.reviews.${idx}.description`)}
                  </p>
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
    </section>
  )
}
