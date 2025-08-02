import Container from '@/components/custom/Container'

export default function MissionSection() {
  return (
    <section id="mission">
      <Container>
        <div className="rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6  md:p-10">
          <h2 className="text-2xl md:text-3xl font-medium">Миссия Zerdeli</h2>
          <p className="text-black/80 text-pretty max-w-4xl">
            Формирование умного ребенка, способного овладевать современной наукой и техникой,
            способного проводить самостоятельные исследования, свободно владеющего английским
            языком, имеющего национальное значение и в будущем послужившего Родине.
          </p>
        </div>
      </Container>
    </section>
  )
}
