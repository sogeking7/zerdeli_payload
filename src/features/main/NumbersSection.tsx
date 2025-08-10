import Container from '@/components/custom/Container'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function NumbersSection() {
  const t = useTranslations('HomePage')
  return (
    <section id="numbers">
      <Container className="max-md:!p-0">
        <div className="bg-[#F6F6F6] sm:rounded-2xl p-8 md:p-14 relative min-h-[560px]">
          <div className="md:bg-white/50 md:backdrop-blur-sm md:w-full lg:w-1/2 h-full md:p-10 relative z-10 rounded-2xl">
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              <div className="col-span-1">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">5</p>
                <p className="text-black/60 md:text-lg font-normal">{t('numbers.schools')}</p>
              </div>
              <div className="col-span-1">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">25</p>
                <p className="text-black/60 md:text-lg font-normal">{t('numbers.centers')}</p>
              </div>
              <div className="col-span-2">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">15 000 +</p>
                <p className="text-black/60 text-lg font-normal">{t('numbers.students')}</p>
              </div>
            </div>
          </div>
          <Image
            className="absolute max-md:hidden bottom-0 right-0 rounded-br-2xl"
            src="/children.webp"
            alt="numbers"
            width={1000}
            height={1000}
          />
          <Image
            className="md:hidden absolute bottom-0 right-0"
            src="/children-sm.webp"
            alt="numbers2"
            width={400}
            height={400}
          />
        </div>
      </Container>
    </section>
  )
}
