import Image from 'next/image'
import MoreNewsCard from '@/features/news/MoreNewsCard'
import { RichText } from '@/components/RichText'
import { formatDate } from '@/lib/utils'
import getNewsById from '@/api/getNewsById'
import getOtherNewsById from '@/api/getOtherNewsById'
import { getTranslations } from 'next-intl/server'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type Props = {
  id: string | number
}

export default async function NewsContent({ id }: Props) {
  const article = await getNewsById(+id)
  const otherArticles = await getOtherNewsById(+id)
  const t = await getTranslations('NewsPage')

  if (!article) {
    return <div className="py-16">{t('article.notFound')}</div>
  }

  return (
    <>
      <Breadcrumb className="pt-6 ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t('breadcrumb.home')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">{t('breadcrumb.news')}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{article.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-8 md:mt-10 flex flex-col lg:flex-row gap-16">
        {/* Main content */}
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col gap-10">
            <div className="relative w-full h-[300px] md:h-[460px] rounded-2xl overflow-hidden">
              <Image
                src={`https://drive.google.com/thumbnail?id=${article.googleDriveImageId}&sz=w640-h480`}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-black/60">{formatDate(article.publishedDate)}</p>
            <h1 className="text-4xl font-semibold">{article.title}</h1>
            <div className="prose md:prose-lg text-black">
              {article.content && <RichText data={article.content} />}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-semibold">{t('article.otherNews')}</h2>
          <div className="flex flex-col gap-8 mt-6">
            {otherArticles.docs.map((otherArticle) => (
              <MoreNewsCard key={otherArticle.id} news={otherArticle} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
