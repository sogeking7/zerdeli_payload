import Container from '@/components/custom/Container'
import Image from 'next/image'

export default function StandardsSection() {
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
            <span>Образовательные</span> <br /> стандарты
          </h2>
          <div className="max-w-3xl px-2 mx-auto grid grid-cols-2 gap-6 relative z-10 ">
            <div className="space-y-4 col-span-full p-10 md:col-span-1 bg-white  rounded-xl shadow-sm">
              <h3 className="font-medium text-xl md:text-2xl">Государственный стандарт</h3>
              <p className="md:text-lg font-light">
                Требования к основным образовательным программ
              </p>
              <ul className="max-md:text-sm list-disc font-light space-y-1  pl-4">
                <li className="font-medium">Математика 3-4 ч.</li>
                <li className="font-medium">Английский язык 3-4 ч.</li>
                <li>Платные занятия</li>
              </ul>
            </div>
            <div className="space-y-4 col-span-full p-10 md:col-span-1 bg-white relative rounded-xl shadow-lg">
              <div className="bg-[#FF8A48] rounded-xl max-md:-bottom-24 max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-full p-3 absolute md:-top-16 text-center text-sm text-white md:-right-20 md:w-[150px]">
                Известная в республике система образования и олимпиады
              </div>
              <h3 className="font-medium text-xl md:text-2xl text-[#29A30A]">Стандарт Zerdeli</h3>
              <ul className="list-disc max-md:text-sm font-light space-y-1  pl-4">
                <li className="font-medium">Математика-логика 8 ч.</li>
                <li className="font-medium">Английский язык 8 ч.</li>
                <li>Домбра, шахматные занятия</li>
                <li>Relax time / чтение книг</li>
                <li>3-х разовое питание</li>
                <li>Робототехника</li>
                <li>Зердели, дебатные клубы</li>
                <li>Ученики не таскают сумки</li>
                <li>Семья “Зердели”</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
