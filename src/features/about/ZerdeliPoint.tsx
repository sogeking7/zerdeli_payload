import Container from '@/components/custom/Container'
import Image from 'next/image'

export default function ZerdeliPoint() {
  return (
    <section id="zerdeli-point">
      <Container>
        <div className="relative max-md:pb-[200px] bg-gradient-to-r from-[#CBF5BF] z-0 to-[#FFE999] rounded-2xl p-6 md:p-10">
          <Image
            alt="box"
            src="/box.webp"
            width={220}
            height={220}
            className="md:top-1/2 bottom-0 max-md:left-1/2 max-md:-translate-x-1/2 md:-translate-y-1/2 absolute right-0 z-20"
          />
          <Image
            alt="box-pattern"
            src="/svg/box-pattern.svg"
            width={380}
            height={300}
            className="max-md:w-[300px] md:top-1/2 bottom-0 max-md:right-0 md:-translate-y-1/2 absolute right-0 z-0"
          />
          <h2 className="mb-2 text-3xl md:text-4xl font-medium ">Zerdeli Point</h2>
          <p className="max-md:text-sm mb-6 md:mb-10">Программа мотивации лучших учеников</p>
          <ul className="flex max-md:flex-col gap-2 md:gap-10 z-30 relative">
            <li className="flex items-center gap-3">
              <Image alt="checkmark" src="/svg/checkmark.svg" width={32} height={32} className="" />
              <p>
                Лучшим <br /> ученикам
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Image alt="checkmark" src="/svg/checkmark.svg" width={32} height={32} className="" />
              <p>
                Для активных <br /> учеников
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Image alt="checkmark" src="/svg/checkmark.svg" width={32} height={32} className="" />
              <p>
                Ученикам добившихся <br /> прогресса
              </p>
            </li>
            <li className="flex items-center gap-3">
              <Image alt="checkmark" src="/svg/checkmark.svg" width={32} height={32} className="" />
              <p>
                Для выполняющих <br /> домашнее задание
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
