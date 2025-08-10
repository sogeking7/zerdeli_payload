import Container from '@/components/custom/Container'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function AchivementsSection() {
  const t = useTranslations('AboutPage')
  return (
    <section id="achivements">
      <Container>
        <div className="space-y-16">
          <div>
            <h2 className="text-center text-2xl mb-6 md:text-5xl">{t('achievements.title')}</h2>
            <p className="font-light mx-auto max-w-3xl text-center">
              {t('achievements.description')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <div className="col-span-full md:col-span-1">
              <Image alt="map" src="/about/map.webp" width={600} height={300} className="" />
            </div>
            <div className="col-span-full md:col-span-1 self-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">15 000 +</p>
                  <p className="text-black/60">{t('achievements.numbers.students')}</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">500 +</p>
                  <p className="text-black/60">{t('achievements.numbers.teachers')}</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">5</p>
                  <p className="text-black/60">{t('achievements.numbers.schools')}</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">25</p>
                  <p className="text-black/60">{t('achievements.numbers.centers')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
