import Image from 'next/image'
import Container from './custom/Container'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function ExamBanner() {
  const t = useTranslations('HomePage')
  return (
    <section id="exam-banner">
      <div className="max-md:px-2">
        <div className="bg-[#c3f1bd] max-md:rounded-2xl">
          <Container>
            <div className="relative flex flex-col md:flex-row items-center justify-between md:h-20 py-10  md:py-0">
              <Image
                src="/svg/exam.svg" // Убедитесь, что этот файл есть в папке /public
                alt="exam"
                width={565}
                height={80}
                className="absolute left-1/2 -translate-x-1/2  max-md:bottom-0"
              />

              <p className="trelative z-10 text-center md:text-lef text-base font-medium text-black">
                {t('examBanner.title')}
              </p>

              {/* Правая часть: Описание и кнопка */}
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                <p className="text-sm text-center max-md:text-balance md:text-right text-black/60">
                  {t('examBanner.description')}
                </p>
                <Link
                  href="/exam"
                  className="flex-shrink-0 px-6 py-3 rounded-[40px] bg-[#6646ea] hover:bg-[#5538c8] transition-colors"
                >
                  <p className="text-sm font-semibold text-left text-white">
                    {t('examBanner.cta')}
                  </p>
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}
