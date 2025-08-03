import Container from '@/components/custom/Container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import AboutCarousel from '@/features/about/AboutCarousel'
import Image from 'next/image'

import AboutImage1 from '@/../public/about-1.webp'
import AboutImage2 from '@/../public/about-2.webp'

export default function AboutHeroSection() {
  return (
    <section id="about-hero">
      <Container>
        <div className="pt-16">
          <Breadcrumb className="pt-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>О школе</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div>
            <div className="space-y-6 mt-8 mb-16 md:mb-[150px] md:mt-[100px]">
              <h1 className="text-4xl font-agenor font-normal text-center sm:text-7xl">
                О Zerdeli <br />
                International School
              </h1>
              <p className="text-center font-normal sm:text-xl text-black/80 max-w-2xl mx-auto">
                ZIS — это международная школа, в которой углубленно преподают математику и логику,
                английский язык и информатику, а также воспитывают детей прививая национальную
                идентичность.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-full md:col-span-7 rounded-2xl">
                  <Image src={AboutImage1} alt="about-1" width={800} height={500} />
                </div>
                <div className="col-span-full md:col-span-5 rounded-2xl">
                  <Image src={AboutImage2} alt="about-2" width={800} height={500} />
                </div>
              </div>
              <AboutCarousel />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
