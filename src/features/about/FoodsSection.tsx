'use client'

import Container from '@/components/custom/Container'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import useCarousel from '@/hooks/useCarousel'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useTranslations } from 'next-intl'

const breakfastImgs = ['/about/foods/lunch/1.webp']
const lunchImgs = [
  '/about/foods/lunch/1.webp',
  '/about/foods/lunch/2.webp',
  '/about/foods/lunch/3.webp',
  '/about/foods/lunch/4.webp',
  '/about/foods/lunch/5.webp',
]
const snackImgs = ['/about/foods/lunch/1.webp']

export default function FoodSection() {
  const t = useTranslations('AboutPage')

  const breakfast = breakfastImgs.map((img, idx) => ({
    img,
    title: t(`foods.items.breakfast.${idx}`),
  }))
  const lunch = lunchImgs.map((img, idx) => ({
    img,
    title: t(`foods.items.lunch.${idx}`),
  }))
  const snack = snackImgs.map((img, idx) => ({
    img,
    title: t(`foods.items.snack.${idx}`),
  }))

  return (
    <section id="foods">
      <Container>
        <div className="space-y-8 md:space-y-16">
          <div>
            <h2 className="text-center text-2xl mb-6 md:text-5xl">{t('foods.title')}</h2>
            <p className="font-light mx-auto max-w-3xl text-center">{t('foods.description')}</p>
          </div>
          <Tabs defaultValue="lunch" className="w-full">
            <TabsList className="mx-auto mb-4 md:mb-10">
              <TabsTrigger value="breakfast">{t('foods.tabs.breakfast')}</TabsTrigger>
              <TabsTrigger value="lunch">{t('foods.tabs.lunch')}</TabsTrigger>
              <TabsTrigger value="snack">{t('foods.tabs.snack')}</TabsTrigger>
            </TabsList>
            <TabsContent value="breakfast" className="w-full">
              <Foods foods={breakfast} />
            </TabsContent>
            <TabsContent value="lunch" className="w-full">
              <Foods foods={lunch} />
            </TabsContent>
            <TabsContent value="snack" className="w-full">
              <Foods foods={snack} />
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  )
}

function Foods({ foods }: { foods: { title: string; img: string }[] }) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { setApi, current } = useCarousel()
  const grid = (
    <div className="grid grid-cols-12 gap-6">
      {foods.map((item, idx) => (
        <div
          key={idx}
          className="col-span-full sm:col-span-6 md:col-span-4 w-full  h-[200px] md:h-[240px] rounded-2xl relative"
        >
          <Image
            alt="food"
            src={item.img}
            fill
            className="absolute overflow-hidden w-full h-full object-cover rounded-2xl"
          />
          <div className="rounded-md bg-white px-3 py-1 z-10 absolute  max-md:text-sm bottom-4 left-4 max-w-max">
            {item.title}
          </div>
        </div>
      ))}
    </div>
  )
  const carousel = (
    <div>
      <Carousel setApi={setApi}>
        <CarouselContent className="-ml-2">
          {foods.map((item, idx) => (
            <CarouselItem
              key={idx}
              className="basis-full pl-2 h-[200px] md:h-[240px] rounded-2xl relative"
            >
              <div key={idx} className="w-full h-[200px] md:h-[240px] rounded-2xl relative">
                <Image
                  alt="food"
                  src={item.img}
                  fill
                  className="absolute overflow-hidden w-full h-full object-cover rounded-2xl"
                />
                <div className="rounded-md bg-white px-3 py-1 z-10 absolute  max-md:text-sm bottom-4 left-4 max-w-max">
                  {item.title}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="mx-auto flex py-6 gap-2 justify-center">
        {foods.map((_, idx) => (
          <div
            key={idx}
            className={cn(
              'rounded-full size-2',
              current === idx + 1 ? 'bg-[#4AA30A]' : 'bg-[#E3E3E3]',
            )}
          ></div>
        ))}
      </div>
    </div>
  )

  if (isDesktop) {
    return grid
  }
  return carousel
}
