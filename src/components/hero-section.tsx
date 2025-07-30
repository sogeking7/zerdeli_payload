'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative items-center flex z-0 flex-col min-h-[calc(100vh-64px)] bg-white overflow-hidden">
      <div className="space-y-6 mt-8 md:my-[200px]">
        <h1 className="text-4xl font-agenor font-normal text-center sm:text-7xl">
          От знаний
          <br />к достижениям
        </h1>
        <p className="px-4 text-lg text-center font-normal sm:text-xl opacity-80">
          Школа, которая открывает перспективы
        </p>
      </div>

      <div className="px-4 flex flex-col max-md:absolute max-md:bottom-8 items-center space-y-4">
        <Image src="/svg/sun.svg" width={45} height={45} alt="sun" />

        <p className="text-base text-center lg:text-lg  opacity-70">
          Углубленно обучаем математике, логике, английскому языку и информационным технологиям
        </p>
      </div>
      <Image
        className="absolute max-sm:w-[240px] -z-10 right-0 top-[55%] -translate-y-1/2"
        src="/dombyra.webp"
        width={360}
        height={360}
        alt="dombyra"
      />
    </div>
  )
}
