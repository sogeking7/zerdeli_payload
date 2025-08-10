import Container from '@/components/custom/Container'
import { useTranslations } from 'next-intl'

export default function MissionSection() {
  const t = useTranslations('AboutPage')
  return (
    <section id="mission">
      <Container>
        <div className="rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6  md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium">{t('mission.title')}</h2>
          <p className="text-black/80 text-pretty max-w-4xl">{t('mission.text')}</p>
        </div>
      </Container>
    </section>
  )
}
