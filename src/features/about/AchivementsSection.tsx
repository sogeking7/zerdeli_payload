import Container from '@/components/custom/Container'
import Image from 'next/image'

export default function AchivementsSection() {
  return (
    <section id="achivements">
      <Container>
        <div className="space-y-16">
          <div>
            <h2 className="text-center text-2xl mb-6 md:text-5xl">Достижения и возможности</h2>
            <p className="font-light mx-auto max-w-3xl text-center">
              Мы создаем пространство для роста и развития, объединяя опытных педагогов,
              инновационные подходы и современные образовательные стандарты, чтобы каждый ученик мог
              раскрыть свой потенциал и добиться успеха в будущем.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:gap-16">
            <div className="col-span-full md:col-span-1">
              <Image alt="map" src="/map.webp" width={600} height={300} className="" />
            </div>
            <div className="col-span-full md:col-span-1 self-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">15 000 +</p>
                  <p className="text-black/60">Учеников обучаются</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">500 +</p>
                  <p className="text-black/60">Квалифицированных учителей</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">5</p>
                  <p className="text-black/60">Школ по всей республике</p>
                </div>
                <div className="col-span-full md:col-span-1 max-md:text-center">
                  <p className="text-black/80 text-3xl md:text-4xl font-semibold mb-2">25</p>
                  <p className="text-black/60">Образовательных центров</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
