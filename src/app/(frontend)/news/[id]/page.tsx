import Container from '@/components/custom/Container'

import { Suspense } from 'react'
import NewsContentSkeleton from '@/features/news/NewsContentSkeleton'
import NewsContent from '@/features/news/NewsContent'
import { getTranslations } from 'next-intl/server'

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const t = await getTranslations('NewsPage')

  return (
    <>
      <section id={`news-article-${id}`}>
        <Container>
          <div className="pt-16">
            <Suspense fallback={<NewsContentSkeleton />}>
              <NewsContent id={id} />
            </Suspense>
          </div>
        </Container>
      </section>
      <div></div>
    </>
  )
}
