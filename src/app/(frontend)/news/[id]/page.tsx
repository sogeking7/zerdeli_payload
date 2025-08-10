import React from 'react'
import Image from 'next/image'
import Container from '@/components/custom/Container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import MoreNewsCard from '@/features/news/MoreNewsCard'

import { News } from '@/payload-types'
import { RichText } from '@/components/RichText'
import { formatDate } from '@/lib/utils'

import { getPayload } from 'payload'
import config from '@/payload.config'
import { getTranslations } from 'next-intl/server'

async function fetchArticle(id: News['id']) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const article = await payload.findByID({
    collection: 'news',
    id: id,
  })

  return article
}

async function fetchOtherArticles(id: News['id']) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const articles = await payload.find({
    collection: 'news',
    where: {
      id: {
        not_in: [id],
      },
    },
    limit: 3,
    sort: '-publishedDate',
  })

  return articles.docs
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const article = await fetchArticle(+id)
  const otherArticles = await fetchOtherArticles(+id)
  const t = await getTranslations('NewsPage')

  if (!article) {
    return <div className="container mx-auto px-4 py-16">{t('article.notFound')}</div>
  }

  return (
    <>
      <section id={`news-article-${id}`}>
        <Container>
          <div className="pt-16">
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
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col justify-start items-start w-full relative gap-10">
                  <div className="relative w-full h-[300px] md:h-[460px] rounded-2xl overflow-hidden block">
                    <Image
                      src={`https://drive.google.com/thumbnail?id=${article.googleDriveImageId}&sz=w640-h480`}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start self-stretch relative gap-6">
                    <p className="self-stretch text-sm text-left text-black/60">
                      {formatDate(article.publishedDate)}
                    </p>
                    <div className="flex flex-col justify-start items-start self-stretch relative gap-8">
                      <h1 className="self-stretch text-4xl font-semibold text-left text-black">
                        {article.title}
                      </h1>
                      <div className="prose md:prose-lg text-black">
                        {article.content && <RichText data={article.content} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="flex flex-col justify-start items-start w-full relative gap-10">
                  <h2 className="self-stretch text-xl text-left text-black font-semibold">
                    {t('article.otherNews')}
                  </h2>
                  <div className="flex flex-col justify-start items-start self-stretch gap-8">
                    {otherArticles.map((otherArticle) => (
                      <MoreNewsCard key={otherArticle.id} news={otherArticle} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div></div>
    </>
  )
}
