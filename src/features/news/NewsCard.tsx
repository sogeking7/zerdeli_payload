import Image from 'next/image'
import Link from 'next/link'
import { News } from '@/payload-types'
import { formatDate } from '@/lib/utils'

const NewsCard = ({ news }: { news: News }) => (
  <Link href={`/news/${news.id}`} className="block hover:opacity-95 transition-opacity">
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src={`https://drive.google.com/thumbnail?id=${news.googleDriveImageId}&sz=w640-h480`}
          alt={news.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-sm text-left text-black/60">{formatDate(news.publishedDate)}</p>
        <h3 className="text-base md:text-2xl font-semibold text-left text-black">{news.title}</h3>
        <p className="text-sm text-left text-black/60">{/*<RichText content={news.content} />*/}</p>
      </div>
    </div>
  </Link>
)

export default NewsCard
