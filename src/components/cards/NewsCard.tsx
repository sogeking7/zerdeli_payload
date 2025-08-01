import Image from 'next/image'

// Интерфейс для пропсов компонента
interface NewsCardProps {
  index: number
  childImageSrc: string
  description: string
}

const Pattern1 = () => (
  <Image
    alt={`pattern-1`}
    src={`/svg/pattern-1.svg`}
    width={270}
    height={300}
    className="max-md:h-[250px]"
  />
)
const Pattern2 = () => (
  <Image
    alt={`pattern-2`}
    src={`/svg/pattern-2.svg`}
    width={550}
    height={300}
    className="max-md:h-[300px]"
  />
)

const bgColors = ['bg-[#EDFFD6]', 'bg-[#FFFBE5]']

export const NewsCard = ({ index, childImageSrc, description }: NewsCardProps) => {
  return (
    <div
      className={`relative w-full h-full rounded-2xl overflow-hidden ${bgColors[index % 2]} p-6 md:p-8`}
    >
      <div className="absolute top-0 right-0">{index % 2 == 1 ? <Pattern2 /> : <Pattern1 />}</div>

      <div className="relative z-10 flex flex-col md:gap-10 gap-6 justify-between h-full">
        <Image
          src={childImageSrc}
          alt="Фото ученика"
          width={100}
          height={100}
          className="size-20 md:size-24 rounded-full object-cover"
        />
        <p className="md:text-xl text-balance max-w-md">{description}</p>
      </div>
    </div>
  )
}
