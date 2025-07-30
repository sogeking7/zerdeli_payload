import Image from 'next/image'

export default function NumbersSection() {
  return (
    <section className="relative py-10 overflow-hidden">
      <div className="container mx-auto  sm:px-6 lg:px-8 relative">
        <div className="bg-[#F6F6F6] sm:rounded-2xl p-8 md:p-14 relative min-h-[560px]">
          <div className="md:bg-white/50 md:backdrop-blur-sm md:w-full lg:w-1/2 h-full md:p-10 relative z-10 rounded-2xl">
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              <div className="col-span-1">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">5</p>
                <p className="text-black/60 md:text-lg font-normal">Школ по всей республике</p>
              </div>
              <div className="col-span-1">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">25</p>
                <p className="text-black/60 md:text-lg font-normal">Образовательных центров</p>
              </div>
              <div className="col-span-2">
                <p className="text-black/80 text-5xl md:text-6xl font-semibold mb-4">15 000 +</p>
                <p className="text-black/60 text-lg font-normal">Учеников обучаются</p>
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
      </div>
    </section>
  )
}
