import Container from '@/components/custom/Container'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function StandardsSection() {
  const t = useTranslations('AboutPage')
  return (
    <section id="standards">
      <Container className="max-md:!p-0">
        <div className="py-10 max-md:pb-24 md:py-20 space-y-16 bg-[#F6F6F6] rounded-2xl relative z-0">
          <Image
            alt="bg-lines"
            src="/svg/bg-lines.svg"
            fill
            className="z-0 object-cover overflow-hidden absolute"
          />
          <h2 className="text-center text-2xl mb-10 md:mb-20 md:text-5xl z-10 relative">
            <span>{t('standards.headingTop')}</span> <br /> {t('standards.headingBottom')}
          </h2>
          <div className="max-w-3xl px-2 mx-auto grid grid-cols-2 gap-6 relative z-10 ">
            <div className="space-y-4 col-span-full p-10 md:col-span-1 bg-white  rounded-xl shadow-sm">
              <h3 className="font-medium text-xl md:text-2xl">{t('standards.left.title')}</h3>
              <p className="md:text-lg font-light">{t('standards.left.subtitle')}</p>
              <ul className="max-md:text-sm list-disc font-light space-y-1  pl-4">
                <li className="font-medium">{t('standards.left.list.0')}</li>
                <li className="font-medium">{t('standards.left.list.1')}</li>
                <li>{t('standards.left.list.2')}</li>
              </ul>
            </div>
            <div className="space-y-4 col-span-full p-10 md:col-span-1 bg-white relative rounded-xl shadow-lg">
              <div className="bg-[#FF8A48] rounded-xl max-md:-bottom-24 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-full p-3 absolute md:-top-16 text-center text-sm text-white md:-right-20 md:w-[150px]">
                {t('standards.badge')}
              </div>
              <h3 className="font-medium text-xl md:text-2xl text-[#29A30A]">{t('standards.right.title')}</h3>
              <ul className="list-disc max-md:text-sm font-light space-y-1  pl-4">
                <li className="font-medium">{t('standards.right.list.0')}</li>
                <li className="font-medium">{t('standards.right.list.1')}</li>
                <li>{t('standards.right.list.2')}</li>
                <li>{t('standards.right.list.3')}</li>
                <li>{t('standards.right.list.4')}</li>
                <li>{t('standards.right.list.5')}</li>
                <li>{t('standards.right.list.6')}</li>
                <li>{t('standards.right.list.7')}</li>
                <li>{t('standards.right.list.8')}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
